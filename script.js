/* ==============================================
   WANDERLY — TRAVEL AGENCY WEBSITE
   script.js
   ============================================== */

// ==============================================
// DATA
// ==============================================

// Destination cards data
const destinationsData = [
  {
    id: 1,
    name: 'European Explorer',
    description: 'Visit 5 European capitals in 12 days — Paris, Rome, Vienna, Prague, and London.',
    price: '৳2,499',
    image: 'images/europe.jpg',
    alt: 'European explorer cartoon illustration with map and binoculars'
  },
  {
    id: 2,
    name: 'Tropical Paradise',
    description: 'Relax in the Maldives and Bali with overwater villas, spa treatments, and sunset cruises.',
    price: '৳1,899',
    image: 'images/tropical.jpg',
    alt: 'Beautiful tropical paradise beach with turquoise waters'
  },
  {
    id: 3,
    name: 'Adventure Trail',
    description: 'New Zealand and Iceland — bungee jumping, glacier hiking, and volcano tours.',
    price: '৳2,199',
    image: 'images/adventure.jpg',
    alt: 'Adventure hiking trail through New Zealand mountains'
  },
  {
    id: 4,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with ancient temples, lush rice terraces, and vibrant culture.',
    price: '৳899',
    image: 'images/bali.jpg',
    alt: 'Canoe on water with a pagoda in Bali'
  },
  {
    id: 2,
    name: 'Swiss Alps',
    description: 'Majestic mountain peaks, charming villages, and world-class skiing.',
    price: '৳1,499',
    image: 'images/swiss.jpg',
    alt: 'Snow-capped Swiss Alps mountain landscape'
  },
  {
    id: 3,
    name: 'Maldives',
    description: 'Overwater bungalows, crystal-clear lagoons, and pristine white sands.',
    price: '৳1,899',
    image: 'images/maldives.jpg',
    alt: 'Overwater bungalows in the Maldives'
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    description: 'A dazzling fusion of ancient tradition and futuristic innovation.',
    price: '৳1,299',
    image: 'images/tokyo.jpg',
    alt: 'Illuminated Tokyo cityscape at night'
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    description: 'Iconic white-washed buildings, stunning sunsets, and azure waters.',
    price: '৳1,099',
    image: 'images/santorini.jpg',
    alt: 'White-washed buildings in Santorini overlooking the sea'
  },
  {
    id: 6,
    name: 'Queenstown, New Zealand',
    description: 'Adventure capital with bungee jumping, skiing, and breathtaking fjords.',
    price: '৳1,699',
    image: 'images/queenstown.jpg',
    alt: 'Lake Wakatipu and mountains in Queenstown'
  },
  {
    id: 7,
    name: 'Iceland',
    description: 'Northern lights, geothermal springs, volcanoes, and otherworldly landscapes.',
    price: '৳1,599',
    image: 'images/iceland.jpg',
    alt: 'Northern lights dancing over an Icelandic landscape'
  },
  {
    id: 8,
    name: 'Marrakech, Morocco',
    description: 'Exotic markets, stunning palaces, and the gateway to the Sahara Desert.',
    price: '৳799',
    image: 'images/marrakech.jpg',
    alt: 'Vibrant market street in Marrakech'
  }
];

// Package cards data
const packagesData = [
  {
    id: 4,
    name: 'European Explorer',
    description: 'Visit 5 European capitals in 12 days — Paris, Rome, Vienna, Prague, and London.',
    duration: '12 Days',
    price: '৳2,499',
    image: 'images/europe.jpg',
    alt: 'European explorer cartoon illustration with map and binoculars'
  },
  {
    id: 5,
    name: 'Tropical Paradise',
    description: 'Relax in the Maldives and Bali with overwater villas, spa treatments, and sunset cruises.',
    duration: '7 Days',
    price: '৳1,899',
    image: 'images/tropical.jpg',
    alt: 'Beautiful tropical paradise beach with turquoise waters'
  },
  {
    id: 6,
    name: 'Adventure Trail',
    description: 'New Zealand and Iceland — bungee jumping, glacier hiking, and volcano tours.',
    duration: '10 Days',
    price: '৳2,199',
    image: 'images/adventure.jpg',
    alt: 'Adventure hiking trail through New Zealand mountains'
  }
];

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    text: 'Wanderly made our honeymoon absolutely magical. Every detail was perfectly planned, from the private dinner on the beach to the sunrise hot air balloon ride. We didn\'t have to worry about a thing.',
    rating: 5,
    avatar: 'SM'
  },
  {
    id: 2,
    name: 'James Rodriguez',
    location: 'London, UK',
    text: 'The European Explorer package was incredible value. We visited 5 countries in 12 days and everything ran like clockwork. The local guides were knowledgeable and friendly. Already booking our next trip!',
    rating: 5,
    avatar: 'JR'
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    text: 'As a solo traveler, safety and convenience are my top concerns. Wanderly\'s 24/7 support team was amazing — they checked in daily and helped me navigate every city with ease. Highly recommended!',
    rating: 4,
    avatar: 'PP'
  }
];

// ==============================================
// RENDER FUNCTIONS
// ==============================================

function renderDestinations(data) {
  const grid = document.getElementById('destinationGrid');
  grid.innerHTML = data.map(dest => `
    <div class="destination-card fade-in" data-id="${dest.id}">
      <div class="card-img-wrapper">
        <img class="card-img" src="${dest.image}" alt="${dest.alt}" loading="lazy">
        <span class="card-price-badge">From ${dest.price}</span>
      </div>
      <div class="card-body">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>
    </div>
  `).join('');
}

function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  grid.innerHTML = packagesData.map(pkg => `
    <div class="package-card fade-in">
      <div class="card-img-wrapper">
        <img class="card-img" src="${pkg.image}" alt="${pkg.alt}" loading="lazy">
      </div>
      <div class="package-body">
        <h3>${pkg.name}</h3>
        <p>${pkg.description}</p>
        <div class="package-meta">
          <span><i class="far fa-clock"></i> ${pkg.duration}</span>
        </div>
        <div class="package-price">${pkg.price} <small>/ per person</small></div>
        <button type="button" class="btn btn-primary book-now-btn" data-package-id="${pkg.id}" style="width:100%;justify-content:center;">Book Now</button>
      </div>
    </div>
  `).join('');
}

function initBookingButtons() {
  let currentPackage = null;
  let bookedButton = null;
  let paymentMethod = 'mobile';

  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const formView = document.getElementById('bookingFormView');
  const paymentView = document.getElementById('bookingPaymentView');
  const successView = document.getElementById('bookingSuccessView');
  const form = document.getElementById('bookingForm');
  const formMessage = document.getElementById('bookingFormMessage');
  const mobilePayForm = document.getElementById('mobilePayForm');
  const cardPayForm = document.getElementById('cardPayForm');
  const mobilePayMessage = document.getElementById('mobilePayMessage');
  const cardPayMessage = document.getElementById('cardPayMessage');

  function openModal(pkg) {
    currentPackage = pkg;
    document.getElementById('bookingPackageName').textContent = pkg.name;
    document.getElementById('bookingPackageDuration').innerHTML =
      pkg.duration ? `<i class="far fa-clock"></i> ${pkg.duration}` : '';
    document.getElementById('bookingPackagePrice').textContent = pkg.price;
    document.getElementById('paymentPackageName').textContent = pkg.name;
    document.getElementById('paymentPackagePrice').textContent = pkg.price;
    document.getElementById('mobilePayAmount').textContent = pkg.price;
    document.getElementById('cardPayAmount').textContent = pkg.price;

    showStep(formView);
    form.reset();
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    document.getElementById('bookingDate').min = new Date().toISOString().split('T')[0];

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('bookingName').focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    currentPackage = null;
    bookedButton = null;
  }

  function showStep(view) {
    [formView, paymentView, successView].forEach(v => { v.hidden = true; });
    view.hidden = false;
  }

  function selectMethod(method) {
    paymentMethod = method;
    document.getElementById('methodMobileBtn').classList.toggle('active', method === 'mobile');
    document.getElementById('methodCardBtn').classList.toggle('active', method === 'card');
    mobilePayForm.hidden = method !== 'mobile';
    cardPayForm.hidden = method !== 'card';
  }

  function markBooked() {
    if (bookedButton) {
      bookedButton.textContent = 'Booked';
      bookedButton.disabled = true;
      bookedButton.classList.add('booked');
      bookedButton.setAttribute('aria-pressed', 'true');
    }
  }

  function showSuccess(name, email, paymentLabel) {
    document.getElementById('successName').textContent = name;
    document.getElementById('successPackage').textContent = currentPackage.name;
    document.getElementById('successRef').textContent =
      'WND-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    document.getElementById('successEmail').textContent = email;
    document.getElementById('successPayment').textContent = paymentLabel;
    document.getElementById('successPaidAmount').textContent = currentPackage.price;

    markBooked();
    showStep(successView);
  }

  document.querySelectorAll('.book-now-btn').forEach(button => {
    button.addEventListener('click', () => {
      if (button.disabled) return;
      const packageId = Number(button.dataset.packageId);
      const pkg = packagesData.find(item => item.id === packageId);
      if (!pkg) return;
      bookedButton = button;
      openModal(pkg);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  document.getElementById('successDoneBtn').addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  document.getElementById('methodMobileBtn').addEventListener('click', () => selectMethod('mobile'));
  document.getElementById('methodCardBtn').addEventListener('click', () => selectMethod('card'));

  document.getElementById('backToDetailsBtn').addEventListener('click', () => {
    showStep(formView);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookingName').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    const date = document.getElementById('bookingDate').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      formMessage.textContent = 'Please enter your full name.';
      formMessage.className = 'form-message error';
      return;
    }
    if (!email || !emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.className = 'form-message error';
      return;
    }
    if (!date) {
      formMessage.textContent = 'Please choose a travel date.';
      formMessage.className = 'form-message error';
      return;
    }

    formMessage.textContent = '';
    formMessage.className = 'form-message';
    showStep(paymentView);
  });

  mobilePayForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = document.getElementById('mobileNumber').value.replace(/\s+/g, '');
    const pin = document.getElementById('mobilePin').value;
    const provider = document.getElementById('mobileProvider').value;
    const phoneRegex = /^01[3-9]\d{8}$/;

    if (!phoneRegex.test(number)) {
      mobilePayMessage.textContent = 'Please enter a valid 11-digit mobile number (e.g. 01712345678).';
      mobilePayMessage.className = 'form-message error';
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      mobilePayMessage.textContent = 'Please enter your 4-digit PIN.';
      mobilePayMessage.className = 'form-message error';
      return;
    }

    simulatePayment(mobilePayForm.querySelector('button[type="submit"]'),
      () => showSuccess(
        document.getElementById('bookingName').value.trim(),
        document.getElementById('bookingEmail').value.trim(),
        provider
      ));
  });

  cardPayForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cardName').value.trim();
    const number = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const expiry = document.getElementById('cardExpiry').value.trim();
    const cvc = document.getElementById('cardCvc').value;
    const cardRegex = /^\d{16}$/;

    if (!name) {
      cardPayMessage.textContent = 'Please enter the name on the card.';
      cardPayMessage.className = 'form-message error';
      return;
    }
    if (!cardRegex.test(number)) {
      cardPayMessage.textContent = 'Please enter a valid 16-digit card number.';
      cardPayMessage.className = 'form-message error';
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      cardPayMessage.textContent = 'Please enter a valid expiry date (MM/YY).';
      cardPayMessage.className = 'form-message error';
      return;
    }
    if (!/^\d{3,4}$/.test(cvc)) {
      cardPayMessage.textContent = 'Please enter a valid CVC.';
      cardPayMessage.className = 'form-message error';
      return;
    }

    simulatePayment(cardPayForm.querySelector('button[type="submit"]'),
      () => showSuccess(
        document.getElementById('bookingName').value.trim(),
        document.getElementById('bookingEmail').value.trim(),
        'Card (**** ' + number.slice(-4) + ')'
      ));
  });

  const cardNumberInput = document.getElementById('cardNumber');
  cardNumberInput.addEventListener('input', () => {
    const digits = cardNumberInput.value.replace(/\D+/g, '').slice(0, 16);
    cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });

  const cardExpiryInput = document.getElementById('cardExpiry');
  cardExpiryInput.addEventListener('input', () => {
    const digits = cardExpiryInput.value.replace(/\D+/g, '').slice(0, 4);
    if (digits.length >= 3) {
      cardExpiryInput.value = digits.slice(0, 2) + '/' + digits.slice(2);
    } else {
      cardExpiryInput.value = digits;
    }
  });

  function simulatePayment(button, onDone) {
    const original = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

    setTimeout(() => {
      button.disabled = false;
      button.innerHTML = original;
      onDone();
    }, 1200);
  }
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = testimonialsData.map(t => {
    const stars = '<i class="fas fa-star"></i>'.repeat(t.rating) + '<i class="far fa-star"></i>'.repeat(5 - t.rating);
    return `
      <div class="testimonial-card fade-in">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.avatar}</div>
          <div>
            <h4>${t.name}</h4>
            <span>${t.location}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==============================================
// 1. MOBILE HAMBURGER MENU TOGGLE
// ==============================================

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ==============================================
// 2. SMOOTH SCROLL FOR ANCHOR LINKS
// ==============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ==============================================
// 3. HERO IMAGE CAROUSEL
// ==============================================

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  let current = 0;
  let interval;

  function goTo(index) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    goTo((current + 1) % slides.length);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  // Click on indicators
  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(i);
      startAuto();
    });
  });

  // Pause on hover
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);

  startAuto();
}

// ==============================================
// 4. SEARCH BAR — FILTER DESTINATIONS BY KEYWORD
// ==============================================

function initSearchFilter() {
  const searchInput = document.getElementById('search-destination');
  const searchBtn = document.getElementById('searchBtn');
  const destinationsSection = document.getElementById('destinations');

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = destinationsData.filter(d =>
      d.name.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query)
    );

    renderDestinations(filtered.length > 0 ? filtered : destinationsData);

    if (filtered.length === 0 && query !== '') {
      // Show "no results" state
      const grid = document.getElementById('destinationGrid');
      grid.innerHTML = `<div class="no-results">No destinations found matching "${query}". Try a different search.</div>`;
    }

    // Scroll to destinations section
    const top = destinationsSection.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

// ==============================================
// 5. NEWSLETTER FORM VALIDATION
// ==============================================

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const message = document.getElementById('newsletterMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      message.textContent = 'Please enter your email address.';
      message.className = 'newsletter-message error';
      return;
    }

    if (!emailRegex.test(email)) {
      message.textContent = 'Please enter a valid email address.';
      message.className = 'newsletter-message error';
      return;
    }

    message.textContent = 'Thanks for subscribing! Check your inbox for deals.';
    message.className = 'newsletter-message success';
    emailInput.value = '';

    // Reset message after 4 seconds
    setTimeout(() => {
      message.textContent = '';
      message.className = 'newsletter-message';
    }, 4000);
  });
}

// ==============================================
// 6. STICKY NAVBAR ON SCROLL
// ==============================================

function initStickyNav() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==============================================
// 7. FADE-IN ON SCROLL (Intersection Observer)
// ==============================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation to save performance
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ==============================================
// 8. ADD "NO RESULTS" STYLE
// ==============================================

// Inject a small style for the no-results message
const noResultsStyle = document.createElement('style');
noResultsStyle.textContent = `
  .no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    font-size: 1.1rem;
    color: var(--text-muted);
    background: var(--bg-white);
    border-radius: var(--radius);
  }
`;
document.head.appendChild(noResultsStyle);

// ==============================================
// INIT — RUN EVERYTHING
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
  renderDestinations(destinationsData);
  renderPackages();
  initBookingButtons();
  renderTestimonials();
  initMobileMenu();
  initSmoothScroll();
  initCarousel();
  initSearchFilter();
  initNewsletter();
  initStickyNav();
  initScrollAnimations();
});
