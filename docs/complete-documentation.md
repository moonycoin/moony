# Complete Documentation

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::

## Table of Contents

1. [Getting Started](#getting-started)
2. [Tokenomics](#tokenomics)
   - [Reserve Contract](#reserve-contract)
   - [Proof of Liquidity](#proof-of-liquidity)
   - [Supply](#supply)
   - [Bonding Curve](#bonding-curve)
3. [Use Cases](#use-cases)
   - [Ecosystem](#ecosystem)
   - [P2P Payments](#p2p-payments)
   - [Micropayments](#micropayments)
   - [DeFi](#defi)
4. [Resources](#resources)
   - [Community](#community)
   - [Brand Kit](#brand-kit)

---

## Getting Started

### Tokenomics

Moony has a fixed maximum supply of 21 million tokens, enforced by immutable onchain logic. All 21 million tokens are minted exclusively through a Reserve Contract deployed on the Solana blockchain. Users can buy Moony by depositing USDC, a US dollar stablecoin issued by Circle Internet Group, Inc., into the Reserve Contract.

No tokens were allocated to any team, treasury, investors, or insiders. All tokens are bought from the reserve contract. This design eliminates discretionary allocation and central oversight, replacing them with a transparent, rules-based issuance process.

The Moony Reserve Contract holds all user deposits as onchain liquidity, enabling redemptions and anchoring supply in verifiable value. Token pricing is determined by a bonding curve, a deterministic function that increases cost as more tokens are purchased, ensuring that issuance is transparent, demand-driven, and algorithmically defined.

This model, referred to as Proof of Liquidity (PoL), replaces energy-intensive mining with a capital-based issuance mechanism. Instead of consuming electricity, users deposit capital directly into the network, where it remains onchain as liquidity. This model aligns issuance with demand, reduces inefficiencies, and ensures that all circulating Moony remains transparently and verifiably supported.

#### Key Properties:

- **Fixed Supply:** Moony has a hard cap of 21 million tokens, enforced by an immutable onchain smart contract. No additional tokens can ever be created.
- **Fair Distribution:** The entire supply is deposited into the reserve at launch. No allocation is given to any team, treasury, investors, or insiders.
- **Permissionless:** Anyone can buy and sell Moony by interacting directly with the reserve contract, with no approvals or intermediaries required.
- **Proof of Liquidity:** Capital used to mint Moony remains in the reserve, supporting redemptions and ensuring liquidity to support the market as it grows.
- **Bonding Curve:** Token pricing is governed by a deterministic bonding curve, meaning the price increases as more tokens are bought from the Reserve Contract, and tokens can be sold back to the Reserve Contract on the same bonding curve. This ensures that supply issuance is aligned with real demand.

### Composable Ecosystem

Moony is the foundational asset for a programmable, internet-native economy. It enables seamless, decentralized value exchange across a diverse range of applications without reliance on centralized infrastructure or intermediaries.

With global accessibility and negligible fees, Moony forms the basis of an open, interoperable economic layer for the internet. Its architecture supports permissionless integration across wallets, apps, and protocols, allowing anyone to build, exchange, and interact with value on their own terms.

As a composable SPL token, Moony can be embedded directly into smart contracts, payment flows, and onchain systems. Its programmable design and native compatibility unlock new forms of coordination and monetization, expanding what's possible in digital commerce and laying the foundation for a user-owned, innovation-driven economy.

#### Potential Applications

- **P2P Payments:** Enable global, permissionless transfers with near-zero fees and no latency. Moony empowers direct value exchange without intermediaries, expanding access to digital economies worldwide.
- **Micropayments:** Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.
- **DeFi Integration:** Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.

### Decentralized Community

Moony is not controlled by any organization or governing body. It operates as a decentralized blockchain protocol designed to serve as a public good. Open, permissionless, and governed by immutable code, Moony's growth is shaped by the individuals and communities who use and support it. As adoption grows, the protocol's utility and reach expand organically through the voluntary efforts of individuals, communities, and independent projects.

Moony's economic architecture is designed to reward that participation. Its Proof of Liquidity (PoL) model issues new tokens only when users deposit USDC into the reserve contract, expanding liquidity and distributing supply in direct response to demand. As usage grows, through integrations, transactions, or broader adoption, the price of newly minted tokens increases via the bonding curve, aligning incentives across the network. Those who help expand Moony's reach also stand to benefit from the value they help create. Growing the network is not only a shared mission but also a self-reinforcing strategy. Every new integration, creator, or community that joins strengthens the ecosystem and amplifies the potential impact of every contribution.

Participation is open to all. Whether you're a developer, creator, organizer, or enthusiast, there are many ways to contribute. Moony grows through grassroots energy and shared values, not central control. By offering time, talent, or ideas, participants help expand the network and strengthen its foundation. A diverse ecosystem of independent contributors is expected to emerge, including startups, nonprofits, open-source projects, and grassroots collectives. While none control the protocol, each plays a role in expanding its reach and reinforcing its resilience.

#### How To Contribute:

- **Build:** Integrate Moony into apps, platforms, and tools to unlock new use cases across the digital economy.
- **Transact:** Accept Moony for goods, services, or content to enable direct community support and alternative monetization.
- **Organize:** Launch regional or thematic groups around shared languages, interests, or goals to drive local adoption.
- **Educate:** Produce resources or host events that help others understand, use, and build with Moony.
- **Express:** Use storytelling, memes, and art to spread awareness and shape Moony's cultural narrative.

### Flipcash Infrastructure

Moony and it's reserve contract were launched using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash does not maintain control over Moony or its reserve contract, nor can it alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.

At launch, Flipcash provides the first public interface for interacting directly with the Moony Reserve Contract. Through its mobile app, users can seamlessly buy Moony or sell Moony for USDC. Flipcash also offers an industry-leading, trustless peer-to-peer payments experience, giving users a seamless way to transact with Moony.

#### Flipcash Enables Users To:

- **Interact With Reserve:** Seamlessly convert between Moony and USDC through an intuitive interface.
- **Send P2P Payments:** Instantly use Moony as digital cash where you can hand it to someone or send it as a link.

While Flipcash provides the first front end to access the Moony reserve contract, Moony is not limited to any single platform. Designed as a digital public good, Moony can be integrated into any third party platform, protocol, wallet, or app, ensuring broad utility, composability, and adoption.

---

## Tokenomics

### Reserve Contract

The Moony Reserve Contract is the core smart contract that governs all token issuance and redemption. It operates autonomously on the Solana blockchain and cannot be altered or controlled by any party.

#### Contract Features

- **Immutable Code:** Smart contract logic cannot be changed once deployed
- **Autonomous Operation:** Functions without human intervention or control
- **Transparent Operations:** All transactions are visible on the Solana blockchain
- **Permissionless Access:** Anyone can interact with the contract directly
- **Liquidity Management:** Automatically manages USDC reserves and token supply

#### How It Works

1. **Buying Moony:** Users send USDC to the contract and receive Moony tokens
2. **Selling Moony:** Users send Moony tokens to the contract and receive USDC
3. **Price Calculation:** All pricing is determined by the bonding curve formula
4. **Supply Management:** Token supply automatically adjusts based on demand
5. **Liquidity Provision:** USDC remains in the contract to support redemptions

#### Reserve Contract Architecture

The Reserve Contract is built on Solana's high-performance blockchain, ensuring fast transaction processing and low fees. It implements a deterministic bonding curve algorithm that automatically calculates token prices based on the current supply and demand dynamics.

The contract maintains a continuous balance between USDC reserves and Moony token supply, ensuring that every token in circulation is backed by an equivalent value of USDC held in the reserve. This creates a transparent and verifiable backing mechanism that users can audit at any time.

#### Security Features

- **Immutable Logic:** Once deployed, the contract cannot be modified
- **No Admin Keys:** No party has privileged access or control
- **Transparent Operations:** All functions and state changes are publicly visible
- **Auditable Code:** Smart contract source code is open and verifiable
- **No Backdoors:** No hidden functions or emergency controls exist

Moony is not limited to any platform. The Reserve Contract is open to all developers and integrators, and Moony can be used across any app, wallet, or protocol that supports Solana. This ensures maximum composability, interoperability, and future-proof adoption.

### Proof of Liquidity

Moony's approach replaces discretionary allocation with transparent rules. It eliminates intermediaries, gatekeepers, and the need for governance over monetary supply. Instead, it adopts a capital-based issuance model known as Proof of Liquidity (PoL), a mechanism that anchors every Moony token to value held onchain.

#### How Proof of Liquidity Works

1. **Capital Deposit:** Users deposit USDC into the Reserve Contract
2. **Token Minting:** Moony tokens are minted based on the bonding curve formula
3. **Liquidity Retention:** USDC remains in the reserve as onchain liquidity
4. **Redemption Support:** Users can redeem Moony for USDC at any time
5. **Transparent Value:** Every token is backed by verifiable onchain assets

This model replaces energy-intensive mining with a capital-based issuance mechanism. Instead of consuming electricity, users deposit capital directly into the network, where it remains onchain as liquidity. This model aligns issuance with demand, reduces inefficiencies, and ensures that all circulating Moony remains transparently and verifiably supported.

#### Benefits of Proof of Liquidity

- **Transparent Backing:** Every token is backed by verifiable onchain assets
- **Liquidity Provision:** Capital remains available for redemptions
- **Demand Alignment:** Token issuance responds to real market demand
- **No Inflation:** Supply cannot be increased beyond the 21 million cap
- **Verifiable Value:** Users can audit the reserve at any time

#### Comparison to Traditional Models

Traditional cryptocurrency models often rely on energy-intensive mining or discretionary allocation mechanisms. Proof of Liquidity eliminates these inefficiencies by:

- **Replacing mining with capital deposits:** No energy waste, direct value creation
- **Eliminating discretionary allocation:** No favoritism or insider advantages
- **Ensuring transparency:** All operations visible on the blockchain
- **Maintaining liquidity:** Capital remains available for market support

### Supply

Moony has a fixed maximum supply of 21 million tokens, enforced by immutable onchain logic. This supply cap is hardcoded into the smart contract and cannot be altered by any party.

#### Supply Characteristics

- **Fixed Cap:** Maximum of 21 million tokens, never more
- **Immutable Logic:** Supply parameters cannot be changed
- **Transparent Issuance:** All minting visible on the blockchain
- **Demand-Driven:** Supply increases only when users buy tokens
- **Redemption Support:** Supply decreases when users sell tokens

#### Supply Distribution

The entire 21 million token supply is initially deposited into the Reserve Contract at launch. No tokens are allocated to:

- Team members or developers
- Early investors or insiders
- Treasury or foundation
- Marketing or development funds
- Any centralized entity

This ensures a completely fair and transparent distribution where every token must be purchased from the reserve contract at market prices determined by the bonding curve.

#### Supply Mechanics

1. **Initial State:** 21 million tokens in reserve, 0 in circulation
2. **User Purchase:** USDC deposited, tokens minted and distributed
3. **Supply Increase:** Circulating supply grows as tokens are purchased
4. **User Sale:** Tokens returned to reserve, USDC distributed
5. **Supply Decrease:** Circulating supply shrinks as tokens are sold

The supply mechanism ensures that Moony remains a scarce asset while providing continuous liquidity for users who want to buy or sell.

### Bonding Curve

Moony's price is determined by an onchain bonding curve. The more tokens minted, the higher the price. When tokens are redeemed, price adjusts accordingly, ensuring alignment between supply and market demand.

#### Bonding Curve Mechanics

- **Price Discovery:** Price increases exponentially as more tokens are purchased
- **Demand Alignment:** Higher demand leads to higher prices, naturally limiting supply
- **Redemption Support:** Users can sell tokens back to the reserve at the current curve price
- **Transparent Pricing:** All price calculations are visible and verifiable onchain
- **No Manipulation:** Pricing cannot be influenced by any external party

#### Benefits of the Bonding Curve

1. **Fair Pricing:** Price discovery is algorithmic and transparent
2. **Demand-Driven Supply:** Token issuance automatically responds to market demand
3. **Liquidity Provision:** The curve ensures there's always a market for buying and selling
4. **Anti-Speculation:** Gradual price increases discourage rapid speculation
5. **Long-term Alignment:** Incentivizes long-term holding and network growth

#### Mathematical Foundation

The bonding curve uses a mathematical formula that ensures:
- **Continuous Pricing:** No gaps or jumps in price
- **Predictable Behavior:** Users can calculate exact costs
- **Efficient Markets:** Price reflects true supply and demand
- **Liquidity Provision:** Always a market for transactions

This mathematical foundation ensures that Moony's price discovery is fair, transparent, and resistant to manipulation.

---

## Use Cases

### Ecosystem

Moony is the foundational asset for a programmable, internet-native economy. It enables seamless, decentralized value exchange across a diverse range of applications without reliance on centralized infrastructure or intermediaries.

#### Core Infrastructure

Moony serves as the base layer for a new economic system that operates entirely on the internet. Its architecture supports:

- **Global Accessibility:** Available to anyone with internet access
- **Permissionless Integration:** No approval required to build or use
- **Composable Design:** Can be combined with other protocols and systems
- **Transparent Operations:** All transactions visible on the blockchain
- **Immutable Rules:** Core functionality cannot be changed or compromised

#### Economic Principles

The Moony ecosystem is built on principles of:

- **Fair Distribution:** No privileged access or insider advantages
- **Transparent Operations:** All mechanisms visible and auditable
- **User Ownership:** Participants own and control their assets
- **Open Innovation:** Anyone can build and integrate
- **Sustainable Growth:** Economic incentives aligned with long-term value

#### Network Effects

As more users, developers, and businesses integrate with Moony:

- **Liquidity Increases:** More trading pairs and market depth
- **Utility Expands:** More use cases and applications
- **Network Grows:** Stronger ecosystem and community
- **Value Appreciates:** Economic benefits for all participants
- **Innovation Accelerates:** More creative applications and integrations

### P2P Payments

Enable global, permissionless transfers with near-zero fees and no latency. Moony empowers direct value exchange without intermediaries, expanding access to digital economies worldwide.

#### Key Features

- **Global Access:** Available to anyone with internet access
- **Low Fees:** Minimal transaction costs compared to traditional systems
- **Instant Settlement:** Transactions settle in seconds on Solana
- **No Intermediaries:** Direct peer-to-peer value transfer
- **Permissionless:** No approval required to send or receive

#### Use Cases

- **International Transfers:** Send money across borders instantly
- **Family Support:** Support family members in different countries
- **Business Payments:** Pay suppliers and contractors globally
- **Charitable Giving:** Support causes and organizations worldwide
- **Personal Transfers:** Send money to friends and family

#### Technical Advantages

- **Solana Speed:** Transactions confirm in seconds
- **Low Cost:** Minimal fees regardless of amount
- **Global Reach:** Available anywhere with internet access
- **No Banking:** Bypass traditional financial infrastructure
- **24/7 Availability:** No business hours or holidays

#### Security Features

- **Blockchain Security:** Immutable transaction records
- **Private Keys:** Users control their own funds
- **No Chargebacks:** Irreversible transactions
- **Audit Trail:** Complete transaction history
- **Fraud Resistance:** Cryptographic security

### Micropayments

Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.

#### Applications

- **Content Monetization:** Pay-per-article, per-video, or per-minute
- **Streaming Payments:** Continuous micropayments for ongoing services
- **Gaming:** In-game purchases and rewards
- **IoT Payments:** Machine-to-machine transactions
- **Social Tipping:** Support creators with small amounts

#### Economic Benefits

- **New Revenue Streams:** Enable previously impossible business models
- **Reduced Friction:** Lower barriers to monetization
- **Global Access:** Reach customers worldwide
- **Automated Payments:** Reduce administrative overhead
- **Incremental Revenue:** Small amounts add up over time

#### Technical Implementation

- **Low Transaction Costs:** Solana's efficiency enables micro-transactions
- **Fast Settlement:** Instant confirmation for real-time experiences
- **Scalable Infrastructure:** Handle millions of small transactions
- **Programmable Logic:** Automated payment flows
- **Cross-Platform Integration:** Works across different applications

#### Use Case Examples

- **News Articles:** Pay $0.01 per article read
- **Video Streaming:** Pay $0.001 per minute watched
- **Music Streaming:** Pay $0.005 per song played
- **Software Usage:** Pay per feature or time used
- **API Access:** Pay per API call or data transfer

### DeFi

Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.

#### Integration Opportunities

- **Lending Protocols:** Use Moony as collateral or borrow against it
- **Automated Market Makers:** Provide liquidity in trading pairs
- **Staking:** Earn rewards by participating in network security
- **Yield Farming:** Generate returns through various DeFi strategies
- **Cross-Chain Bridges:** Move Moony between different blockchain networks

#### Lending and Borrowing

Moony can be used as collateral in lending protocols, allowing users to:

- **Borrow Stablecoins:** Use Moony as collateral for USDC loans
- **Earn Interest:** Lend Moony to earn yield
- **Leverage Positions:** Amplify investment exposure
- **Liquidity Management:** Access funds without selling assets
- **Risk Management:** Hedge against market volatility

#### Automated Market Making

Provide liquidity to trading pairs and earn fees:

- **Trading Pairs:** Moony/USDC, Moony/SOL, and other combinations
- **Fee Generation:** Earn from trading volume
- **Market Depth:** Improve liquidity for all users
- **Automated Rebalancing:** Maintain optimal portfolio allocation
- **Risk Management:** Diversify across multiple assets

#### Yield Farming

Participate in various DeFi protocols to earn rewards:

- **Protocol Incentives:** Earn additional tokens for participation
- **Liquidity Mining:** Provide liquidity to earn rewards
- **Staking Rewards:** Earn for securing networks
- **Governance Participation:** Earn for active protocol involvement
- **Cross-Protocol Strategies:** Combine multiple protocols for optimal returns

#### Cross-Chain Integration

Moony's design enables integration across different blockchain networks:

- **Bridge Protocols:** Move Moony between Solana and other chains
- **Multi-Chain DeFi:** Access opportunities across different ecosystems
- **Liquidity Aggregation:** Combine liquidity from multiple sources
- **Risk Diversification:** Spread exposure across different networks
- **Innovation Access:** Participate in emerging blockchain ecosystems

---

## Resources

### Community

Moony is not controlled by any organization or governing body. It operates as a decentralized blockchain protocol designed to serve as a public good. Open, permissionless, and governed by immutable code, Moony's growth is shaped by the individuals and communities who use and support it.

#### Community Principles

- **Decentralized Governance:** No central authority or decision-making body
- **Open Participation:** Anyone can contribute regardless of background
- **Merit-Based Recognition:** Contributions valued by their impact
- **Diverse Perspectives:** Multiple viewpoints and approaches welcome
- **Sustainable Growth:** Long-term thinking over short-term gains

#### Contribution Areas

- **Development:** Build applications, tools, and integrations
- **Documentation:** Create guides, tutorials, and educational content
- **Community Building:** Organize events, groups, and discussions
- **Marketing:** Spread awareness through various channels
- **Support:** Help new users understand and use Moony

#### Community Channels

- **Discord:** Real-time discussions and coordination
- **Telegram:** News and announcements
- **Reddit:** Community discussions and content sharing
- **Twitter:** Updates and community highlights
- **GitHub:** Code contributions and development

#### Regional Communities

Moony communities are forming around the world:

- **North America:** Active developer and user communities
- **Europe:** Growing adoption and regulatory awareness
- **Asia:** High interest in DeFi and blockchain technology
- **Africa:** Mobile-first adoption and remittance use cases
- **Latin America:** Strong peer-to-peer payment adoption

#### Community Events

- **Hackathons:** Build new applications and integrations
- **Meetups:** Local community gatherings and networking
- **Conferences:** Share knowledge and showcase projects
- **Workshops:** Educational sessions for new users
- **Online Events:** Virtual gatherings and presentations

### Brand Kit

Access official Moony branding assets, logos, colors, and design guidelines for consistent representation across all platforms and applications.

#### Logo Assets

- **Primary Logo:** Official Moony logo in various formats
- **Icon Versions:** Square and circular icon formats
- **Text Logo:** Text-only versions for different use cases
- **Vector Formats:** Scalable SVG and EPS files
- **High Resolution:** Print-quality PNG and JPG files

#### Color Palette

- **Primary Colors:** Official Moony brand colors
- **Secondary Colors:** Supporting color palette
- **Accent Colors:** Highlight and emphasis colors
- **Neutral Colors:** Text and background options
- **Accessibility:** High-contrast combinations for readability

#### Typography

- **Primary Font:** Official Moony typeface
- **Secondary Fonts:** Supporting font families
- **Font Weights:** Various weight options for hierarchy
- **Web Fonts:** Optimized fonts for digital use
- **Print Fonts:** High-quality fonts for physical materials

#### Design Guidelines

- **Logo Usage:** Proper placement and sizing guidelines
- **Color Usage:** When and how to use brand colors
- **Typography Rules:** Font selection and hierarchy
- **Spacing Standards:** Consistent layout and spacing
- **Brand Voice:** Tone and messaging guidelines

#### Asset Downloads

- **Logo Package:** Complete set of logo variations
- **Color Palette:** Digital and print color specifications
- **Typography Guide:** Font files and usage guidelines
- **Design Templates:** Ready-to-use design files
- **Brand Guidelines:** Complete brand manual

#### Usage Requirements

- **Attribution:** Credit Moony when using assets
- **Quality Standards:** Maintain high-quality reproduction
- **Brand Consistency:** Follow established guidelines
- **Permission:** Some uses may require approval
- **Updates:** Check for latest asset versions

---

## Conclusion

Moony represents a new paradigm for digital assets - one that prioritizes transparency, fairness, and permissionless access. By combining fixed supply with Proof of Liquidity and a bonding curve, Moony creates a sustainable economic model that grows with its community.

The protocol's immutable design ensures that these principles cannot be compromised, while its open architecture encourages innovation and adoption across the broader blockchain ecosystem. As more users, developers, and businesses integrate with Moony, the network effect will amplify its utility and value.

Whether you're looking to make payments, build applications, or participate in the future of decentralized finance, Moony provides the foundation for a more open, accessible, and user-owned digital economy.

---

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::
