/* ==========================================================================
   MAIN JS APPLICATION — TAOUFIK HAMZA PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initThemeToggle();
  initTypewriter();
  renderTimeline();
  renderSkills();
  renderProjects('all');
  renderCertifications('all');
  initFilterTabs();
  initModals();
  initCvModal();
  initProfileZoomModal();
  initScrollReveal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. TYPEWRITER CONTINUOUS ANIMATION (ÉCRITURE & EFFACEMENT AUTOMATIQUE)
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  if (!typewriterElement) return;

  const titles = [
    "Élève Ingénieur en Informatique et Réseaux — Option Cybersécurité, Infrastructures et Réseaux"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35; // Deleting is faster
    } else {
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70; // Writing speed
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause when full sentence is typed
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400; // Pause before typing next title
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. NAVBAR & THEME TOGGLE
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
}

/* Light / Dark Mode Toggle Logic */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(themeBtn, currentTheme);

  themeBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(themeBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('title', 'Passer en Mode Sombre');
  } else {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    btn.setAttribute('title', 'Passer en Mode Clair');
  }
}

/* --------------------------------------------------------------------------
   3. RENDER TIMELINE
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const eduContainer = document.getElementById('education-timeline');
  const expContainer = document.getElementById('experience-timeline');

  if (eduContainer && portfolioData.education) {
    eduContainer.innerHTML = portfolioData.education.map(item => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card card-hover-effect">
          <span class="timeline-date">${item.period}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <h4 class="timeline-subtitle">${item.specialty}</h4>
          <p class="timeline-institution" style="font-size: 0.9rem; margin-bottom: 0.5rem;">
            <i class="fa-solid fa-graduation-cap" style="color: var(--cyber-cyan); margin-right: 0.4rem;"></i>
            ${item.institution}
          </p>
          <p class="timeline-body">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  if (expContainer && portfolioData.experience) {
    expContainer.innerHTML = portfolioData.experience.map(item => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card card-hover-effect">
          <span class="timeline-date">${item.period}</span>
          <h3 class="timeline-title">${item.role}</h3>
          <h4 class="timeline-subtitle">${item.company} — ${item.location}</h4>
          <div class="timeline-body">
            <ul>
              ${item.tasks.map(t => `<li>${t}</li>`).join('')}
            </ul>
            <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${item.technologies.map(tech => `
                <span class="tech-tag">
                  <i class="${tech.icon}"></i> ${tech.name}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   4. RENDER SKILLS MATRIX WITH REAL BRAND ICONS
   -------------------------------------------------------------------------- */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !portfolioData.skillCategories) return;

  skillsContainer.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-category-card reveal card-hover-effect">
      <div class="category-header">
        <div class="category-icon">
          <i class="${cat.icon}"></i>
        </div>
        <h3 class="category-title">${cat.title}</h3>
      </div>
      <div class="skill-tags">
        ${cat.skills.map(skill => `
          <span class="skill-tag">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. RENDER PROJECTS GRID & FILTERING (13 PROJECTS)
   -------------------------------------------------------------------------- */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || !portfolioData.projects) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="project-card reveal card-hover-effect" data-category="${p.category}">
      <div class="project-banner">
        <i class="fa-solid ${p.icon} project-banner-icon"></i>
        <span class="project-category-badge">${p.categoryName}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.shortDesc}</p>
        <div class="project-tech-stack">
          ${p.technologies.map(t => `
            <span class="tech-tag"><i class="${t.icon}"></i> ${t.name}</span>
          `).join('')}
        </div>
        <div class="project-footer">
          <button class="btn btn-outline btn-sm open-project-modal" data-id="${p.id}">
            <i class="fa-solid fa-circle-info"></i> Détails
          </button>
          <a href="${p.github}" target="_blank" class="social-link" title="Voir le Code GitHub" style="width: 34px; height: 34px; font-size: 1rem;">
            <i class="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      openProjectModal(projId);
    });
  });
}

/* --------------------------------------------------------------------------
   6. RENDER CERTIFICATIONS GRID & BRAND BADGES
   -------------------------------------------------------------------------- */
function renderCertifications(filter = 'all') {
  const container = document.getElementById('certs-container');
  if (!container || !portfolioData.certifications) return;

  const filtered = filter === 'all'
    ? portfolioData.certifications
    : portfolioData.certifications.filter(c => c.category === filter);

  container.innerHTML = filtered.map(c => `
    <div class="cert-card reveal card-hover-effect">
      <div class="cert-header">
        <div class="cert-issuer-badge">
          <i class="${c.icon}"></i>
        </div>
        <div class="cert-title-area">
          <h4 class="cert-name">${c.name}</h4>
          <span class="cert-issuer">${c.issuer}</span>
        </div>
      </div>
      <div class="cert-meta">
        <div><i class="fa-regular fa-calendar-check" style="color: var(--cyber-cyan); margin-right: 0.4rem;"></i> Délivré : ${c.date}</div>
        <div class="cert-id"><i class="fa-solid fa-fingerprint" style="color: var(--cyber-green); margin-right: 0.4rem;"></i> ID : ${c.credentialId}</div>
      </div>
      <div class="cert-footer">
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyber-green); display: flex; align-items: center; gap: 0.3rem;">
          <i class="fa-solid fa-circle-check"></i> Officiel Coursera
        </span>
        <a href="${c.verifyUrl}" target="_blank" class="btn btn-outline btn-sm" style="padding: 0.3rem 0.75rem; font-size: 0.78rem;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Vérifier
        </a>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   7. FILTER TABS HANDLERS
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const projectFilters = document.querySelectorAll('#project-filters .filter-btn');
  projectFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
      initScrollReveal();
    });
  });

  const certFilters = document.querySelectorAll('#cert-filters .filter-btn');
  certFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertifications(btn.getAttribute('data-filter'));
      initScrollReveal();
    });
  });
}

/* --------------------------------------------------------------------------
   8. MODAL LOGIC & EXACT CV PREVIEW MODAL
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

function initCvModal() {
  const cvTriggers = document.querySelectorAll('#download-cv-btn, .cv-modal-trigger');
  const cvModalOverlay = document.getElementById('cv-modal');
  const cvModalClose = document.getElementById('cv-modal-close');

  cvTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cvModalOverlay) {
        cvModalOverlay.classList.add('active');
      }
    });
  });

  if (cvModalClose && cvModalOverlay) {
    cvModalClose.addEventListener('click', () => {
      cvModalOverlay.classList.remove('active');
    });
  }

  if (cvModalOverlay) {
    cvModalOverlay.addEventListener('click', (e) => {
      if (e.target === cvModalOverlay) {
        cvModalOverlay.classList.remove('active');
      }
    });
  }
}

/* Profile Photo Zoom Lightbox */
function initProfileZoomModal() {
  const imgTrigger = document.getElementById('profile-img-trigger');
  const zoomModal = document.getElementById('profile-zoom-modal');
  const zoomClose = document.getElementById('profile-zoom-close');

  if (imgTrigger && zoomModal) {
    imgTrigger.addEventListener('click', () => {
      zoomModal.classList.add('active');
    });
  }

  if (zoomClose && zoomModal) {
    zoomClose.addEventListener('click', () => {
      zoomModal.classList.remove('active');
    });

    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) {
        zoomModal.classList.remove('active');
      }
    });
  }
}

function openProjectModal(id) {
  const project = portfolioData.projects.find(p => p.id === id);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');

  if (modalOverlay && modalBody) {
    modalBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="width: 54px; height: 54px; border-radius: var(--radius-sm); background: rgba(0, 240, 255, 0.1); border: 1px solid var(--border-cyan); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: var(--cyber-cyan);">
          <i class="fa-solid ${project.icon}"></i>
        </div>
        <div>
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyber-cyan); text-transform: uppercase;">${project.categoryName}</span>
          <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-bright);">${project.title}</h2>
        </div>
      </div>
      
      <p style="font-size: 1.05rem; color: var(--text-sub); margin-bottom: 1.5rem; line-height: 1.7;">
        ${project.fullDesc}
      </p>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; color: var(--text-bright); margin-bottom: 0.75rem;">
          <i class="fa-solid fa-list-check" style="color: var(--cyber-green); margin-right: 0.5rem;"></i> Fonctionnalités Clés & Réalisations :
        </h4>
        <ul style="padding-left: 1.25rem; list-style-type: disc; color: var(--text-sub); line-height: 1.7;">
          ${project.keyFeatures.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1rem; color: var(--text-bright); margin-bottom: 0.6rem;">Technologies Utilisées :</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.technologies.map(t => `<span class="tech-tag"><i class="${t.icon}"></i> ${t.name}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <a href="${project.github}" target="_blank" class="btn btn-primary">
          <i class="devicon-github-original"></i> Voir le code sur GitHub
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
  }
}

/* --------------------------------------------------------------------------
   9. SCROLL REVEAL & CONTACT FORM
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Merci pour votre message ! Taoufik Hamza vous répondra dans les plus brefs délais.");
      contactForm.reset();
    });
  }
}
