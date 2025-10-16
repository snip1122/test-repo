<# 
 codex-init-fix.ps1
 Purpose: Ensure a local project is a properly initialized Git repo with a 'main' branch,
 linked to a GitHub remote, and pushed — satisfying Codex/ChatGPT GitHub integration.

 Usage:
   .\codex-init-fix.ps1 -RepoUrl "https://github.com/USERNAME/REPO_NAME.git"
 or run without -RepoUrl to be prompted.
#>

param(
  [string]$RepoUrl
)

function Die([string]$Message) {
  Write-Error $Message
  exit 1
}

# --- Requirements ---
try {
  git --version | Out-Null
} catch {
  Die "Required command 'git' is not installed or not on PATH."
}

# --- Input ---
if (-not $RepoUrl -or $RepoUrl.Trim() -eq "") {
  $RepoUrl = Read-Host "Enter GitHub repo URL (e.g., https://github.com/USERNAME/REPO_NAME.git)"
}

if (-not $RepoUrl -or $RepoUrl.Trim() -eq "") {
  Die "No repository URL provided."
}

Write-Host "Using remote: $RepoUrl"

# --- Detect repo or init ---
$insideRepo = $false
try {
  git rev-parse --is-inside-work-tree 2>$null | Out-Null
  if ($LASTEXITCODE -eq 0) { $insideRepo = $true }
} catch { $insideRepo = $false }

if ($insideRepo) {
  Write-Host "Git repository detected in current directory."
} else {
  Write-Host "No git repository found. Initializing..."
  git init | Out-Null
}

# --- Ensure at least one file exists ---
if (-not (Test-Path "README.md")) {
  "# Project" | Out-File -FilePath "README.md" -Encoding UTF8
  Write-Host "Created README.md"
}

# --- Stage changes ---
git add -A

# --- Ensure there is at least one commit ---
$hasCommit = $false
try {
  git rev-parse --verify HEAD 2>$null | Out-Null
  if ($LASTEXITCODE -eq 0) { $hasCommit = $true }
} catch { $hasCommit = false }

if ($hasCommit) {
  # Commit only if staged changes exist
  git diff --cached --quiet
  if ($LASTEXITCODE -ne 0) {
    git commit -m "chore: update repository bootstrap" | Out-Null
  } else {
    Write-Host "Commit already exists and no staged changes to commit."
  }
} else {
  Write-Host "Creating initial commit..."
  git commit -m "chore: initial commit" | Out-Null
}

# --- Ensure main branch ---
Write-Host "Ensuring branch is 'main'..."
git branch -M main | Out-Null

# --- Configure remote ---
$originUrl = ""
try {
  $originUrl = git remote get-url origin 2>$null
} catch { $originUrl = "" }

if ($originUrl) {
  Write-Host "Updating existing 'origin' URL..."
  git remote set-url origin $RepoUrl | Out-Null
} else {
  Write-Host "Adding 'origin' remote..."
  git remote add origin $RepoUrl | Out-Null
}

# --- Push ---
Write-Host "Pushing to GitHub (origin/main)..."
git push -u origin main

# --- Verify ---
Write-Host ""
Write-Host "✅ All set! Quick verification:"
$branch = git branch --show-current
$remote = git remote get-url origin
$last = git log -1 --pretty=format:'%h %s (%cr) by %an'
Write-Host " - Branch: $branch"
Write-Host " - Remote: $remote"
Write-Host " - Last commit: $last"
Write-Host ""
Write-Host "If Codex/ChatGPT still shows 'Repository must be initialized', try reconnecting the GitHub integration and reopening the repo."
