export default {
  title: 'Moony Documents',
  description: 'Permissionless transactions with Proof of Liquidity',
  base: '/moony/',
  appearance: 'light',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' }],
    ['meta', { name: 'theme-color', content: '#007AFF' }],
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
        document.documentElement.style.setProperty('--vp-c-brand', '#007AFF');
        document.documentElement.style.setProperty('--vp-c-brand-light', '#007AFF');
        document.documentElement.style.setProperty('--vp-c-brand-dark', '#007AFF');
        
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
        
        // Force portrait mode on mobile
        if (window.innerWidth <= 768 && window.innerHeight < window.innerWidth) {
          const warning = document.createElement('div');
          warning.className = 'portrait-warning';
          warning.innerHTML = \`
            <div class="icon">📱</div>
            <div>Please rotate your device to portrait mode</div>
            <div style="font-size: 0.9rem; opacity: 0.8;">This site is optimized for portrait viewing</div>
          \`;
          document.body.appendChild(warning);
        }
        
        // Listen for orientation changes
        window.addEventListener('orientationchange', function() {
          if (window.innerWidth <= 768 && window.innerHeight < window.innerWidth) {
            if (!document.querySelector('.portrait-warning')) {
              const warning = document.createElement('div');
              warning.className = 'portrait-warning';
              warning.innerHTML = \`
                <div class="icon">📱</div>
                <div>Please rotate your device to portrait mode</div>
                <div style="font-size: 0.9rem; opacity: 0.8;">This site is optimized for portrait viewing</div>
              \`;
              document.body.appendChild(warning);
            }
          } else {
            const warning = document.querySelector('.portrait-warning');
            if (warning) {
              warning.remove();
            }
          }
        });
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
        '--vp-c-brand': '#007AFF',
        '--vp-c-brand-light': '#007AFF',
        '--vp-c-brand-dark': '#007AFF'
      }
    },
    nav: [
      { text: 'Start', link: '/getting-started' },
      { text: 'Tokenomics', link: '/tokenomics/reserve-contract' },
      { text: 'Use Cases', link: '/use-cases/ecosystem' },
      { text: 'Resources', link: '/resources/community' }
    ],
    sidebar: [
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: 'Tokenomics',
        items: [
          { text: 'Supply', link: '/tokenomics/supply' },
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
          { text: 'Brand Kit', link: '/resources/brand-kit' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moonycoin/moony' }
    ],
    editLink: {
      pattern: 'https://github.com/moonycoin/moony/edit/main/docs/:path'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    mobileMenu: true,
    mobileMenuGroup: true,
    appearance: false
  }
}