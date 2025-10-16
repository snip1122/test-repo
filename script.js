(function () {
  const header = document.querySelector('[data-scroll-header]');
  const chipGroup = document.querySelector('[data-filter-group]');
  const productGrid = document.querySelector('[data-product-grid]');
  const assistSwitch = document.querySelector('#assist-switch');
  const yearEl = document.querySelector('#year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    const toggleScrolled = () => {
      if (window.scrollY > 32) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  if (chipGroup && productGrid) {
    const chips = Array.from(chipGroup.querySelectorAll('.chip'));
    const productCards = Array.from(productGrid.querySelectorAll('.product-card'));

    const setActiveChip = (chip) => {
      chips.forEach((c) => c.classList.toggle('is-active', c === chip));
    };

    chipGroup.addEventListener('click', (event) => {
      const target = event.target.closest('.chip');
      if (!target) return;
      const filter = target.dataset.filter;
      setActiveChip(target);
      productCards.forEach((card) => {
        const category = card.dataset.category ?? '';
        const matches = filter === 'all' || category.includes(filter);
        card.style.display = matches ? '' : 'none';
      });
    });
  }

  if (assistSwitch && productGrid) {
    assistSwitch.addEventListener('change', (event) => {
      const enabled = event.target.checked;
      productGrid.classList.toggle('is-assist-disabled', !enabled);
      productGrid.querySelectorAll('.product-card__tag').forEach((tag) => {
        tag.style.opacity = enabled ? '1' : '0.35';
      });
    });
  }

  const ctaForm = document.querySelector('.cta__form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(ctaForm);
      const email = formData.get('email');
      if (typeof email === 'string' && email.includes('@')) {
        alert(`Thanks! We'll reach out to ${email} with next steps.`);
        ctaForm.reset();
      }
    });
  }
})();
