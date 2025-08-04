export default {
  base: '/moony/', //
  themeConfig: {
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
    ]
  }
}