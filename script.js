// script.js
// Main script for theme, AOS, smooth scroll, etc.
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 700,
        easing: 'ease-in-out-quad',
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom',
    });

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement; 
    const navbarLogoContainer = document.getElementById('navbar-logo-container');
    const footerLogoContainer = document.getElementById('footer-logo-container');

    const logoLightModeSVG = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg id="Layer_2_Light_Mode_Logo" data-name="Layer 2 Light Mode Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.09 97.79">
          <defs>
            <style>
              .cls-1-light-logo { isolation: isolate; }
              .cls-2-light-logo { fill: #8b5cf6; } 
              .cls-3-light-logo { fill: #1f2937; font-family: 'Inter', sans-serif; font-size: 75px; font-weight: 600; }
            </style>
          </defs>
          <g id="Layer_1-2_Light_Mode_Logo" data-name="Layer 1 Light Mode Logo">
            <g>
              <path class="cls-2-light-logo" d="M84.84,5.97c11.18,10.61,16.12,21.58,10.4,28.43-6.89,8.24-23.06,5.18-30.43-.96-5.43-4.53-10.3-16.74-8.84-23.72,2.88-13.82,21.41-10.83,28.87-3.75Z"/>
              <path class="cls-2-light-logo" d="M43.06,1.77c6.62,4.14,5.61,16.37,1.9,22.31-6.48,10.36-27.92,19.25-37.08,8.53C-3.27,19.57,29.34-6.81,43.06,1.77Z"/>
              <path class="cls-2-light-logo" d="M90.61,47.51c10.09,5.18,6.28,21.92.93,29.4-9.71,13.59-31.32,20.76-30.13-2.94.56-11.1,5.84-19.13,15.81-24.32,2.78-1.45,10.59-3.58,13.39-2.14Z"/>
              <path class="cls-2-light-logo" d="M16.97,43.36c10,6.66,11.37,25.03,1.35,32.13-9.67,6.85-24.05-19.32-15.93-30.07,3.23-4.27,10.25-4.95,14.58-2.06Z"/>
              <path class="cls-2-light-logo" d="M58.61,36.16c13.98,10.11-3.21,34.51-17.24,24.68-16.58-11.62,2.07-35.66,17.24-24.68Z"/>
              <path class="cls-2-light-logo" d="M50.19,78.06c5.81,3.95,8.59,8.6,4.65,15.15-5.77,9.62-28.57,2.57-31.26-7.18-3.6-13.08,19.27-12.96,26.6-7.97h0Z"/>
              <g class="cls-1-light-logo">
                <text x="112.29" y="73.4" class="cls-3-light-logo">Hamoniq</text>
              </g>
            </g>
          </g>
        </svg>
    `;

    const logoDarkModeSVG = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg id="Layer_2_Dark_Mode_Logo" data-name="Layer 2 Dark Mode Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.09 97.79">
          <defs>
            <style>
              .cls-1-dark-logo { isolation: isolate; }
              .cls-2-dark-logo { fill: #fff; font-family: 'Inter', sans-serif; font-size: 75px; font-weight: 600;}
              .cls-3-dark-logo { fill: #8b5cf6; } 
            </style>
          </defs>
          <g id="Layer_1-2_Dark_Mode_Logo" data-name="Layer 1 Dark Mode Logo">
            <g>
              <path class="cls-3-dark-logo" d="M84.84,5.97c11.18,10.61,16.12,21.58,10.4,28.43-6.89,8.24-23.06,5.18-30.43-.96-5.43-4.53-10.3-16.74-8.84-23.72,2.88-13.82,21.41-10.83,28.87-3.75Z"/>
              <path class="cls-3-dark-logo" d="M43.06,1.77c6.62,4.14,5.61,16.37,1.9,22.31-6.48,10.36-27.92,19.25-37.08,8.53C-3.27,19.57,29.34-6.81,43.06,1.77Z"/>
              <path class="cls-3-dark-logo" d="M90.61,47.51c10.09,5.18,6.28,21.92.93,29.4-9.71,13.59-31.32,20.76-30.13-2.94.56-11.1,5.84-19.13,15.81-24.32,2.78-1.45,10.59-3.58,13.39-2.14Z"/>
              <path class="cls-3-dark-logo" d="M16.97,43.36c10,6.66,11.37,25.03,1.35,32.13-9.67,6.85-24.05-19.32-15.93-30.07,3.23-4.27,10.25-4.95,14.58-2.06Z"/>
              <path class="cls-3-dark-logo" d="M58.61,36.16c13.98,10.11-3.21,34.51-17.24,24.68-16.58-11.62,2.07-35.66,17.24-24.68Z"/>
              <path class="cls-3-dark-logo" d="M50.19,78.06c5.81,3.95,8.59,8.6,4.65,15.15-5.77,9.62-28.57,2.57-31.26-7.18-3.6-13.08,19.27-12.96,26.6-7.97h0Z"/>
              <g class="cls-1-dark-logo">
                 <text x="112.29" y="73.4" class="cls-2-dark-logo">Hamoniq</text>
              </g>
            </g>
          </g>
        </svg>
    `;
    
    const setLogoForTheme = (theme) => {
        const currentLogoSVG = theme === 'dark' ? logoDarkModeSVG : logoLightModeSVG;
        if (navbarLogoContainer) navbarLogoContainer.innerHTML = currentLogoSVG;
        if (footerLogoContainer) footerLogoContainer.innerHTML = currentLogoSVG;
    };

    const applyTheme = (theme) => {
        const sunIcon = themeToggleBtn ? themeToggleBtn.querySelector('.fa-sun-bright') : null;
        const moonIcon = themeToggleBtn ? themeToggleBtn.querySelector('.fa-moon-stars') : null;

        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            if (sunIcon) sunIcon.classList.remove('hidden'); 
            if (moonIcon) moonIcon.classList.add('hidden');    
        } else { 
            htmlElement.classList.remove('dark');
            if (sunIcon) sunIcon.classList.add('hidden');     
            if (moonIcon) moonIcon.classList.remove('hidden'); 
        }
        setLogoForTheme(theme);
    };
    
    // This script runs after the FOUC prevention script in <head>
    // The initial theme class is already set on <html> by that script.
    // This call to applyTheme ensures icons and logos are correctly set on load.
    const initialTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(initialTheme); 

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('hamoniq-theme', newTheme);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && href.startsWith('#')) { 
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                        if(mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                    const headerOffset = document.getElementById('siteHeader').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    const siteHeader = document.getElementById('siteHeader');
    if (siteHeader) { 
        const scrollThreshold = 80;
        const handleScroll = () => {
            siteHeader.classList.toggle('header-scrolled', window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
    }

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isCurrentlyHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', isCurrentlyHidden ? 'true' : 'false');
        });
    }
  });
