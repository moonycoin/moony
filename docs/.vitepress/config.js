export default {
  title: 'Moony Documentation',
  description: 'Documentation for Moony - A decentralized digital asset on Solana',
  base: '/',
  themeConfig: {
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
    ]
  }
}