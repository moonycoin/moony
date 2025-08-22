export default {
  title: 'Moony Documents',
  description: 'Permissionless transactions with Proof of Liquidity',
  base: '/moony/',
  appearance: false,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=0.8, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#333333' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-light.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-light.png' }],
    ['link', { rel: 'shortcut icon', href: '/icon-light.png' }],
    ['link', { rel: 'icon', href: '/icon-light.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon-light.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Moony Documents' }],
    ['meta', { property: 'og:site_name', content: 'Moony Documents' }],
    ['meta', { property: 'og:url', content: 'https://moonycoin.github.io/moony/' }],
    ['meta', { property: 'og:image', content: 'https://moonycoin.github.io/moony/og-image.svg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/svg+xml' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://moonycoin.github.io/moony/og-image.svg' }],
    ['script', {}, `
      // Force light mode and prevent theme switching - Enhanced version
      (function() {
        // Immediately force light mode before any rendering
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        
        // Set CSS custom properties to force light theme
        document.documentElement.style.setProperty('--vp-c-bg', '#ffffff');
        document.documentElement.style.setProperty('--vp-c-bg-alt', '#f6f6f7');
        document.documentElement.style.setProperty('--vp-c-bg-elv', '#ffffff');
        document.documentElement.style.setProperty('--vp-c-bg-soft', '#f6f6f7');
        document.documentElement.style.setProperty('--vp-c-text-1', '#213547');
        document.documentElement.style.setProperty('--vp-c-text-2', '#476582');
        document.documentElement.style.setProperty('--vp-c-text-3', '#8b9eb0');
        document.documentElement.style.setProperty('--vp-c-brand', '#333333');
        document.documentElement.style.setProperty('--vp-c-brand-light', '#333333');
        document.documentElement.style.setProperty('--vp-c-brand-dark', '#333333');
        
        // Prevent dark mode from being applied
        const observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
              }
            }
          });
        });
        
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
        
        // Remove any existing theme toggle elements
        const themeToggles = document.querySelectorAll('.VPNavBarAppearance, .VPSwitch, [data-vp-theme]');
        themeToggles.forEach(toggle => toggle.remove());
        
        // Enhanced scroll spy functionality for Complete Documentation page
        function initScrollSpy() {
          const currentPath = window.location.pathname;
          
          // Only run scroll spy on the Complete Documentation page
          if (currentPath.includes('/complete-documentation')) {
            const sections = document.querySelectorAll('h1, h2, h3');
            const sidebarLinks = document.querySelectorAll('.VPSidebar a');
            
            function updateActiveSection() {
              const scrollPosition = window.scrollY + 100; // Offset for better detection
              
              let currentSection = '';
              sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  currentSection = section.id || section.textContent.trim();
                }
              });
              
              // Update sidebar highlighting
              sidebarLinks.forEach(link => {
                link.classList.remove('current-page');
                const linkText = link.textContent.trim();
                
                // Match section headers with sidebar items
                if (currentSection && linkText.includes(currentSection)) {
                  link.classList.add('current-page');
                }
              });
            }
            
            // Add scroll event listener
            window.addEventListener('scroll', updateActiveSection);
            
            // Run on page load
            updateActiveSection();
            
            // Add smooth scrolling to sidebar links
            sidebarLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                  e.preventDefault();
                  const targetSection = document.querySelector(href);
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              });
            });
          } else {
            // Regular page navigation for other pages
            const sidebarLinks = document.querySelectorAll('.VPSidebar .VPSidebarItem a');
            
            sidebarLinks.forEach(link => {
              link.classList.remove('current-page');
              if (link.getAttribute('href') === currentPath || 
                  link.getAttribute('href') === currentPath + '.html') {
                link.classList.add('current-page');
              }
            });
          }
        }
        
        // Run scroll spy on page load
        initScrollSpy();
        
        // Run when navigation changes
        document.addEventListener('click', function(e) {
          if (e.target.closest('.VPSidebar a')) {
            setTimeout(initScrollSpy, 100);
          }
        });
        
        // Add CSS for current page highlighting
        const style = document.createElement('style');
        style.textContent = '.VPSidebar a.current-page { color: #333333 !important; background-color: #f6f6f7 !important; border-left: 3px solid #333333 !important; padding-left: 12px !important; font-weight: 600 !important; }';
        document.head.appendChild(style);
        
      })();
    `]
  ],
  themeConfig: {
    logo: {
      light: '/icon-light.png',
      dark: '/icon-light.png'
    },
    siteTitle: false,
    // Force light theme CSS variables
    css: {
      vars: {
        '--vp-c-bg': '#ffffff',
        '--vp-c-bg-alt': '#f6f6f7',
        '--vp-c-bg-elv': '#ffffff',
        '--vp-c-bg-soft': '#f6f6f7',
        '--vp-c-text-1': '#213547',
        '--vp-c-text-2': '#476582',
        '--vp-c-text-3': '#8b9eb0',
        '--vp-c-brand': '#333333',
        '--vp-c-brand-light': '#333333',
        '--vp-c-brand-dark': '#333333'
      }
    },
    nav: [
      { 
        text: 'Download PDF', 
        link: '/moony-documentation.pdf'
      }
    ],

    sidebar: [
      { text: 'Complete Documentation', link: '/complete-documentation' },
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: 'Tokenomics',
        items: [
          { text: 'Reserve Contract', link: '/tokenomics/reserve-contract' },
          { text: 'Proof of Liquidity', link: '/tokenomics/proof-of-liquidity' },
          { text: 'Bonding Curve', link: '/tokenomics/bonding-curve' }
        ]
      },
      {
        text: 'Use Cases',
        items: [
          { text: 'Ecosystem', link: '/use-cases/ecosystem' },
          { text: 'P2P Payments', link: '/use-cases/p2p-payments' },
          { text: 'Micropayments', link: '/use-cases/micropayments' },
          { text: 'DeFi', link: '/use-cases/defi' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Community', link: '/resources/community' },
          { text: 'Brand Kit', link: '/resources/brand-kit' },
          { text: 'Disclaimer', link: '/resources/disclaimer' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moonycoin/moony' }
    ],
    editLink: false,
    lastUpdated: false,
    appearance: false,
    // Completely disable theme switching
    darkMode: false
  }
}