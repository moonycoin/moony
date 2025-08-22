export default {
  title: 'Moony Documents',
  description: 'Permissionless transactions with Proof of Liquidity',
  base: '/moony/',
  appearance: false,
  markdown: {
    toc: {
      level: [2, 3]
    },
    outline: [2, 3]
  },
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
              let currentSubSection = '';
              
              sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  currentSection = section.textContent.trim();
                  currentSubSection = section.id || section.textContent.trim().toLowerCase().replace(/\s+/g, '-');
                }
              });
              
              // Update sidebar highlighting for both main sections and subsections
              sidebarLinks.forEach(link => {
                link.classList.remove('current-page');
                const linkHref = link.getAttribute('href');
                const linkText = link.textContent.trim();
                
                // Check if this link matches the current section
                if (currentSubSection && linkHref && linkHref.includes('#' + currentSubSection)) {
                  link.classList.add('current-page');
                } else if (currentSection && linkText === currentSection) {
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
        
        // Add CSS for moving right aside to left side and styling with full section hierarchy
        const style = document.createElement('style');
        style.textContent = '.VPDocAside { position: fixed !important; left: 0 !important; top: 64px !important; width: 280px !important; height: calc(100vh - 64px) !important; overflow-y: auto !important; background: #ffffff !important; border-right: 1px solid #e2e8f0 !important; z-index: 10 !important; padding: 24px 16px !important; } .VPDocAside .right { display: none !important; } .VPDoc .container { margin-left: 280px !important; max-width: calc(100% - 280px) !important; } .VPDocAside .content-container { padding: 0 !important; } .VPDocAside .content-container h2:first-child { display: none !important; } .VPDocAside .content-container h2:first-of-type { display: none !important; } .VPDocAside .content-container h2:contains("On This Page") { display: none !important; } .VPDocAside .content-container h2 { font-size: 18px !important; font-weight: 700 !important; margin-bottom: 20px !important; color: #333333 !important; border-bottom: 2px solid #e2e8f0 !important; padding-bottom: 8px !important; } .VPDocAside .content-container ul { list-style: none !important; padding: 0 !important; margin: 0 !important; } .VPDocAside .content-container li { margin-bottom: 4px !important; } .VPDocAside .content-container a { display: block !important; padding: 8px 12px !important; color: #476582 !important; text-decoration: none !important; border-radius: 6px !important; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; font-size: 14px !important; position: relative !important; } .VPDocAside .content-container a:hover { background-color: #f1f5f9 !important; color: #1e293b !important; transform: translateX(4px) !important; } .VPDocAside .content-container a.active { background: linear-gradient(135deg, #3b82f6 !important, #1d4ed8 !important) !important; color: #ffffff !important; border-left: 4px solid #1e40af !important; padding-left: 20px !important; font-weight: 600 !important; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25) !important; transform: translateX(4px) !important; } .VPDocAside .content-container a.active::before { content: "" !important; position: absolute !important; left: -8px !important; top: 50% !important; transform: translateY(-50%) !important; width: 0 !important; height: 0 !important; border-left: 8px solid #1e40af !important; border-top: 6px solid transparent !important; border-bottom: 6px solid transparent !important; } .VPDocAside .content-container ul ul { margin-left: 16px !important; } .VPDocAside .content-container ul ul a { font-size: 13px !important; padding: 6px 12px !important; color: #64748b !important; } .VPDocAside .content-container ul ul a:hover { color: #1e293b !important; background-color: #f8fafc !important; } .VPDocAside .content-container ul ul a.active { color: #ffffff !important; background: linear-gradient(135deg, #10b981 !important, #059669 !important) !important; border-left: 3px solid #047857 !important; padding-left: 18px !important; font-weight: 600 !important; box-shadow: 0 3px 8px rgba(16, 185, 129, 0.25) !important; } .VPDocAside .content-container ul ul ul { margin-left: 32px !important; } .VPDocAside .content-container ul ul ul a { font-size: 12px !important; padding: 4px 12px !important; color: #94a3b8 !important; } .VPDocAside .content-container ul ul ul a:hover { color: #1e293b !important; background-color: #f8fafc !important; } .VPDocAside .content-container ul ul ul a.active { color: #ffffff !important; background: linear-gradient(135deg, #f59e0b !important, #d97706 !important) !important; border-left: 3px solid #b45309 !important; padding-left: 16px !important; font-weight: 600 !important; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.25) !important; } .VPDocAside .content-container .outline-title { display: none !important; } .VPDocAside .content-container .outline-marker { display: none !important; }';
        document.head.appendChild(style);
        
        // Enhanced aside navigation with advanced scroll spy
        function enhanceAsideNavigation() {
          setTimeout(() => {
            const aside = document.querySelector('.VPDocAside');
            if (aside) {
              // Remove the "On This Page" header - multiple approaches
              const onThisPageHeaders = aside.querySelectorAll('h2');
              onThisPageHeaders.forEach((header, index) => {
                if (index === 0 || header.textContent.includes('On This Page')) {
                  header.style.display = 'none';
                  header.style.visibility = 'hidden';
                  header.style.height = '0';
                  header.style.margin = '0';
                  header.style.padding = '0';
                }
              });
              
              // Add smooth scrolling to all aside links
              const asideLinks = aside.querySelectorAll('a');
              asideLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                  const href = link.getAttribute('href');
                  if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                });
              });
              
              // Enhanced scroll spy for aside navigation
              function updateAsideActiveState() {
                const scrollPosition = window.scrollY + 150; // Offset for better detection
                const sections = document.querySelectorAll('h1, h2, h3');
                
                let activeSection = null;
                let activeSubSection = null;
                
                // Find the current active section
                sections.forEach(section => {
                  const sectionTop = section.offsetTop;
                  const sectionHeight = section.offsetHeight;
                  
                  if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    if (section.tagName === 'H2') {
                      activeSection = section;
                    } else if (section.tagName === 'H3') {
                      activeSubSection = section;
                    }
                  }
                });
                
                // Update aside navigation highlighting
                asideLinks.forEach(link => {
                  link.classList.remove('active');
                  const href = link.getAttribute('href');
                  
                  if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    
                    // Check if this link matches the active section or subsection
                    if (activeSubSection && activeSubSection.id === targetId) {
                      link.classList.add('active');
                    } else if (activeSection && activeSection.id === targetId) {
                      link.classList.add('active');
                    }
                  }
                });
              }
              
              // Add scroll event listener for aside navigation
              window.addEventListener('scroll', () => {
                requestAnimationFrame(updateAsideActiveState);
              });
              
              // Initial call
              updateAsideActiveState();
            }
          }, 500);
        }
        
        // Initialize enhanced navigation when page loads
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', enhanceAsideNavigation);
        } else {
          enhanceAsideNavigation();
        }
        
      })();
    `]
  ],
  themeConfig: {
    logo: {
      light: '/icon-light.png',
      dark: '/icon-light.png'
    },
    siteTitle: false,
    outline: {
      level: [2, 3],
      label: 'Complete Documentation',
      outlineBadges: false
    },
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

    sidebar: false,
    aside: true,
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