---
layout: home
---

<div class="hero-section">
  <div class="hero-content">
    <div class="hero-logo">
      <img src="/logo-light.svg" alt="Moony Logo" class="hero-image">
    </div>
                            <h1 class="hero-title">permissionless transactions with proof of liquidity</h1>
        <p class="hero-description">
          Moony is a decentralized digital asset designed to facilitate global permissionless transactions without intermediaries. It is deployed as a fixed-supply token on the Solana blockchain, with all issuance governed by an immutable smart contract. This design removes all forms of discretionary control and enables open participation in internet capital markets.
        </p>
        <div class="hero-actions">
          <a href="/docs" class="hero-button primary">
            <svg class="docs-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            View Docs
          </a>
          <a href="https://github.com/moonycoin" class="hero-button secondary">
            <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Github
          </a>
        </div>
  </div>
</div>

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🔒</div>
    <h3>Permissionless</h3>
    <p>Anyone can mint Moony by interacting directly with the reserve contract, with no approvals or intermediaries required.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">⚖️</div>
    <h3>Fair Distribution</h3>
    <p>The entire supply is deposited into the reserve at launch. No allocation to team, treasury, investors, or insiders.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">💧</div>
    <h3>Proof of Liquidity</h3>
    <p>Capital used to mint Moony remains in the reserve, supporting redemptions and ensuring liquidity to support the market.</p>
  </div>
</div>

<div class="content-section">
  <h2>Getting Started</h2>
  
  <p>Moony is a decentralized digital asset designed to facilitate permissionless transactions without intermediaries. It is deployed as a fixed-supply token on the Solana blockchain, with all issuance governed entirely by an immutable smart contract. This design ensures full transparency, removes all forms of discretionary control, and enables open participation in emerging internet capital markets.</p>

  ::: tip Disclaimer
  This documentation is for informational purposes only and does not constitute investment advice. Moony is a decentralized digital asset issued and governed by an immutable smart contract deployed on the Solana blockchain. The protocol operates autonomously and cannot be altered or controlled by any party. No company or formal organization is responsible for Moony's performance or value. Participants engage with the Moony protocol at their own discretion and are encouraged to conduct independent research and seek professional advice before interacting with blockchain-based systems.
  :::

  <h2>Tokenomics</h2>

  <p>Moony has a fixed maximum supply of 21 million tokens, enforced by immutable onchain logic. New tokens are issued exclusively through a reserve contract deployed on the Solana blockchain, allowing users to mint Moony by depositing USDC, a US dollar stablecoin issued by Circle Internet Group, Inc. No tokens were allocated to any team, treasury, investors, or insiders. Instead, the supply remains unissued until users interact with the contract. This design eliminates discretionary allocation and central oversight, replacing them with a transparent, rules-based issuance process.</p>

  <p>The Moony reserve contract holds all user deposits as onchain liquidity, enabling redemptions and anchoring supply in verifiable value. Token pricing is determined by a bonding curve, a deterministic function that increases cost as more tokens are minted, ensuring that issuance is transparent, demand-driven, and algorithmically defined.</p>

  <h3>Key Properties:</h3>

  - **Permissionless:** Anyone can mint Moony by interacting directly with the reserve contract, with no approvals or intermediaries required.
  - **Fair Distribution:** The entire supply is deposited into the reserve at launch. No allocation is given to any team, treasury, investors, or insiders.
  - **Proof of Liquidity:** Capital used to mint Moony remains in the reserve, supporting redemptions and ensuring liquidity to support the market as it grows.

  <p>This model, referred to as Proof of Liquidity (PoL), replaces energy-intensive mining with a capital-based issuance mechanism. Instead of consuming electricity, users deposit capital directly into the network, where it remains onchain as liquidity. This model aligns issuance with demand, reduces inefficiencies, and ensures that all circulating Moony remains transparently and verifiably supported.</p>

  ::: tip click-here-tip
  [Learn more about Moony's tokenomics →](/tokenomics/reserve-contract)
  :::

  <h2>Composable Ecosystem</h2>

  <p>Moony is designed as a foundational asset for a programmable, internet-native economy. As a permissionless digital asset, it facilitates seamless value exchange across applications, platforms, and protocols without permission or centralized infrastructure.</p>

  <p>Built as an SPL-standard token, Moony can be embedded directly into apps, wallets, and financial primitives. Its low-cost, programmable design unlocks new ways to coordinate, transact, and build across a growing ecosystem of use cases.</p>

  <h3>Potential use-cases:</h3>

  - **P2P Payments:** Enable global, permissionless transfers with near-zero fees and minimal latency. Moony empowers direct value exchange without intermediaries, expanding access to digital economies worldwide.
  - **Micropayments:** Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.
  - **DeFi Integration:** Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.

  <p>Moony combines global accessibility with negligible fees and onchain transparency to support an open economic layer for the internet. Its architecture enables permissionless integration and frictionless value exchange, empowering developers, creators, and users to participate directly in a shared financial future.</p>

  ::: tip click-here-tip
  [Learn more about Moony's use cases →](/use-cases/ecosystem)
  :::

  <h2>Decentralized Community</h2>

  <p>Moony is not controlled by any organization or governing body. It operates as a decentralized blockchain protocol designed to serve as a public good. Open, permissionless, and governed by immutable code, Moony's evolution is driven by the individuals and communities who participate in its ecosystem. As adoption grows, the protocol's utility and reach expand organically through collective engagement and voluntary contribution.</p>

  <p>Participation is open to all. Whether you're a developer, creator, organizer, or enthusiast, there are many ways to contribute. Moony grows through grassroots energy and shared values, not central control. By offering time, talent, or ideas, participants help expand the network and strengthen its foundation.</p>

  - **Develop & Integrate:** Builders can extend Moony's utility by integrating it into apps, platforms, and tools, enabling new use cases across the digital economy.
  - **Create & Transact:** Creators can accept Moony for goods, services, or content, unlocking direct community support and alternative monetization models.
  - **Organize & Connect:** Community leaders can launch regional or thematic groups around shared languages, interests, or goals to drive local adoption.
  - **Educate & Onboard:** Contributors can host events or produce educational resources that help others understand and use Moony.
  - **Share & Express:** Artists, storytellers, and memers can craft content that spreads awareness, shapes culture, and amplifies Moony's narrative.

  <p>As adoption increases, a diverse ecosystem of independent contributors is expected to form, including startups, nonprofits, open-source projects, and grassroots collectives. While none control the protocol, each plays a role in expanding its reach and strengthening its resilience.</p>

  ::: tip click-here-tip
  [Learn more about Moony's community →](/resources/community)
  :::

  <h2>Flipcash Infrastructure</h2>

  <p>Moony was launched using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash does not maintain control over Moony or its reserve contract, nor can it alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.</p>

  <p>At launch, Flipcash provides the first public interface for interacting directly with the Moony reserve contract. Through its mobile app, users can seamlessly acquire Moony or redeem tokens for USDC. The app also offers an industry-leading, trustless peer-to-peer payments experience, giving users a seamless way to transact with Moony.</p>

  <h3>The Flipcash app enables users to:</h3>

  - **Interact With Reserve:** Seamlessly convert between MOONY and USDC through an intuitive interface.
  - **Send P2P Payments:** Use QR code based digital cash and URL links to simplify sending and receiving payments.

  ::: tip
  While Flipcash provides the first front end to access the Moony reserve contract, Moony is not limited to any single platform. Designed as a digital public good, Moony can be integrated into any third party platform, protocol,wallet, or app. As an SPL-standard digital asset, it is fully compatible with the broader Solana ecosystem, ensuring broad utility, composability, and adoption.
  :::
</div>