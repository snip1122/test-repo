(function () {
  const header = document.querySelector('[data-scroll-header]');
  const yearEl = document.querySelector('#year');
  const megaMenus = document.querySelectorAll('[data-menu]');
  const compatFilter = document.querySelector('.compat-filter');
  const productGrid = document.querySelector('[data-product-grid]');
  const pdpBadges = document.querySelectorAll('.compat-badges .badge');
  const bundler = document.querySelector('[data-bundler]');
  const tabs = document.querySelectorAll('.pdp-tabs .tab');
  const panels = document.querySelectorAll('.pdp-panels .panel');
  const newsletterForm = document.querySelector('.newsletter__form');
  const heroSearch = document.querySelector('.hero-search');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    const toggleScrolled = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 16);
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  megaMenus.forEach((item) => {
    const trigger = item.querySelector('.nav-trigger');
    const mega = item.querySelector('.mega');

    if (!trigger || !mega) return;

    const open = () => {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('mouseenter', open);
    trigger.addEventListener('focus', open);
    item.addEventListener('mouseleave', close);
  });

  if (compatFilter && productGrid) {
    const buttons = Array.from(compatFilter.querySelectorAll('.chip'));
    const cards = Array.from(productGrid.querySelectorAll('.product-card'));

    compatFilter.addEventListener('click', (event) => {
      const target = event.target.closest('.chip');
      if (!target) return;
      const filter = target.dataset.filter ?? 'all';

      buttons.forEach((btn) => btn.classList.toggle('is-active', btn === target));
      cards.forEach((card) => {
        const compatibility = card.dataset.compatibility ?? '';
        const matches = filter === 'all' || compatibility.includes(filter);
        card.style.display = matches ? '' : 'none';
      });
    });
  }

  if (pdpBadges.length && bundler) {
    const bundlerItems = Array.from(bundler.querySelectorAll('.bundler__list li'));
    const priceEl = bundler.querySelector('.bundler__price');
    const savingsEl = bundler.querySelector('.bundler__savings');
    const basePrice = Number(bundler.dataset.basePrice ?? '0');

    const formatCurrency = (value) => `₮${value.toLocaleString('en-US')}`;

    const parsePrice = (text) => {
      const match = text.match(/₮([\d,]+)/u);
      if (!match) return 0;
      return Number(match[1].replace(/,/g, ''));
    };

    const recalc = () => {
      const activeBadge = document.querySelector('.compat-badges .badge.is-active');
      const ecosystem = activeBadge ? activeBadge.dataset.compat : 'all';
      let total = basePrice;
      let count = 0;

      bundlerItems.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('span');
        const compat = item.dataset.compat ?? '';
        const isCompatible = ecosystem === 'all' || compat.includes(ecosystem);
        item.style.display = isCompatible ? '' : 'none';

        if (isCompatible && checkbox && checkbox.checked && label) {
          total += parsePrice(label.textContent);
          count += 1;
        }
      });

      if (priceEl) {
        priceEl.textContent = formatCurrency(total);
      }

      if (savingsEl) {
        const savings = count >= 2 ? 0.11 : 0;
        savingsEl.textContent = savings
          ? `Bundle savings: ${(savings * 100).toFixed(0)}%`
          : 'Bundle savings: —';
      }
    };

    pdpBadges.forEach((badge) => {
      badge.addEventListener('click', () => {
        pdpBadges.forEach((b) => b.classList.toggle('is-active', b === badge));
        recalc();
      });
    });

    bundler.addEventListener('change', (event) => {
      const checkbox = event.target.closest('input[type="checkbox"]');
      if (!checkbox) return;
      recalc();
    });

    recalc();
  }

  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const panelId = tab.dataset.panel;
        tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
        panels.forEach((panel) => {
          const isActive = panel.id === `panel-${panelId}`;
          panel.classList.toggle('is-active', isActive);
        });
      });
    });
  }

  if (heroSearch) {
    heroSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(heroSearch);
      const query = formData.get('search');
      if (typeof query === 'string' && query.trim()) {
        alert(`Showing curated results for: ${query.trim()}`);
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(newsletterForm);
      const email = formData.get('email');
      if (typeof email === 'string' && email.includes('@')) {
        alert(`Thanks! We'll reach out to ${email} with tailored guidance.`);
        newsletterForm.reset();
      }
    });
  }
})();
