export default {
  title: 'Moony Documents',
  description: 'Permissionless transactions with Proof of Liquidity',
  base: '/moony/',
  appearance: 'dark',
      head: [
      ['meta', { name: 'theme-color', content: '#007AFF' }],
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
      ['meta', { name: 'twitter:image', content: 'https://moonycoin.github.io/moony/og-image.svg' }]
    ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tokenomics', link: '/tokenomics/reserve-contract' },
      { text: 'Use Cases', link: '/use-cases/ecosystem' },
      { text: 'Resources', link: '/resources/community' }
    ],
    sidebar: [
      { text: 'Getting Started', link: '/' },
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
          { text: 'Branding Kit', link: '/resources/branding-kit' }
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
    }
  }
}