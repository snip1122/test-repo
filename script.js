(function () {
  const header = document.querySelector('[data-scroll-header]');
  const yearEl = document.querySelector('#year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const slidesContainer = hero.querySelector('.hero-carousel__slides');
    const slides = Array.from(hero.querySelectorAll('.hero-slide'));
    const dotsContainer = hero.querySelector('.hero-dots');
    const prevBtn = hero.querySelector('[data-hero-prev]');
    const nextBtn = hero.querySelector('[data-hero-next]');
    let current = 0;
    let autoTimer;

    const renderDots = () => {
      slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'hero-dot';
        button.type = 'button';
        button.setAttribute('aria-label', `Go to slide ${index + 1}`);
        button.addEventListener('click', () => {
          goToSlide(index);
        });
        dotsContainer.appendChild(button);
      });
    };

    const updateDots = () => {
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === current);
      });
    };

    const goToSlide = (index) => {
      current = (index + slides.length) % slides.length;
      slidesContainer.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
      resetAuto();
    };

    const next = () => goToSlide(current + 1);
    const prev = () => goToSlide(current - 1);

    const resetAuto = () => {
      if (autoTimer) {
        window.clearInterval(autoTimer);
      }
      autoTimer = window.setInterval(next, 7000);
    };

    renderDots();
    updateDots();
    resetAuto();

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);
  }

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('.product-track');
    const cards = Array.from(track.children);
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    let position = 0;
    const gap = 24;

    const cardWidth = () => cards[0]?.getBoundingClientRect().width ?? 0;

    const visibleCount = () => {
      const step = cardWidth() + gap;
      if (step === 0) return 1;
      return Math.max(1, Math.round(carousel.getBoundingClientRect().width / step));
    };

    const maxPosition = () => {
      const step = cardWidth() + gap;
      const remaining = cards.length - visibleCount();
      return step * Math.max(0, remaining);
    };

    const applyPosition = () => {
      position = Math.min(Math.max(position, 0), maxPosition());
      track.style.transform = `translateX(-${position}px)`;
    };

    const move = (direction) => {
      const step = cardWidth() + gap;
      if (step === 0) return;
      position += direction * step;
      applyPosition();
    };

    if (prev) {
      prev.addEventListener('click', () => move(-1));
    }

    if (next) {
      next.addEventListener('click', () => move(1));
    }

    window.addEventListener('resize', () => {
      applyPosition();
    });

    applyPosition();
  }

  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(newsletterForm);
      const email = String(formData.get('email') ?? '').trim();
      if (email.includes('@')) {
        window.alert(`Баярлалаа! We will keep ${email} informed about new drops.`);
        newsletterForm.reset();
      }
    });
  }
})();
