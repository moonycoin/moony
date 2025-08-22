# Getting Started

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::

## Table of Contents

- [Tokenomics](#tokenomics)
- [Proof of Liquidity](#proof-of-liquidity)
- [Reserve Contract](#reserve-contract)
- [Bonding Curve](#bonding-curve)
- [Use Cases](#use-cases)
- [Community & Resources](#community--resources)

---

## Tokenomics

The total supply is capped at 21 million tokens, enforced by a smart contract that cannot be altered or upgraded. There are no team allocations, no treasury reserves, and no private premines. Every token in circulation is minted under the same public rules, directly from a decentralized Reserve Contract deployed on Solana.

The Reserve Contract governs all token issuance and redemption. Users can mint Moony by depositing USDC, a U.S. dollar–backed stablecoin issued by Circle, into the Reserve Contract. Pricing is determined by a deterministic bonding curve that increases as circulating supply grows, ensuring that Moony’s distribution is entirely market-driven, demand-responsive, and algorithmically defined.

Moony’s approach replaces discretionary allocation with transparent rules. It eliminates intermediaries, gatekeepers, and the need for governance over monetary supply. Instead, it adopts a capital-based issuance model known as Proof of Liquidity (PoL), a mechanism that anchors every Moony token to value held onchain.

### Key Properties:

- **Fixed Supply:** The supply of Moony is capped at 21 million tokens. This cap is hard-coded into the Reserve Contract and cannot be changed.
- **Fair Distribution:** No tokens are premined or reserved for any team, treasury, founder, or investor. All tokens enter circulation via the same permissionless mechanism.
- **Permissionless:** Anyone can mint or redeem Moony through the Reserve Contract, without intermediaries, approvals, whitelisting, or KYC.
- **Proof of Liquidity:** All USDC deposited to mint Moony remains locked in the Reserve Contract as liquidity. This provides a source of redemption and public proof that supply is backed.
- **Bonding Curve:** Moony’s price is determined by an onchain bonding curve. The more tokens minted, the higher the price. When tokens are redeemed, price adjusts accordingly, ensuring alignment between supply and market demand.

::: tip click-here-tip
[Learn more about Moony's tokenomics](/tokenomics/reserve-contract)
:::

---

## Proof of Liquidity

Moony's approach replaces discretionary allocation with transparent rules. It eliminates intermediaries, gatekeepers, and the need for governance over monetary supply. Instead, it adopts a capital-based issuance model known as Proof of Liquidity (PoL), a mechanism that anchors every Moony token to value held onchain.

### How Proof of Liquidity Works

1. **Capital Deposit:** Users deposit USDC into the Reserve Contract
2. **Token Minting:** Moony tokens are minted based on the bonding curve formula
3. **Liquidity Retention:** USDC remains in the reserve as onchain liquidity
4. **Redemption Support:** Users can redeem Moony for USDC at any time
5. **Transparent Value:** Every token is backed by verifiable onchain assets

This model replaces energy-intensive mining with a capital-based issuance mechanism. Instead of consuming electricity, users deposit capital directly into the network, where it remains onchain as liquidity. This model aligns issuance with demand, reduces inefficiencies, and ensures that all circulating Moony remains transparently and verifiably supported.

::: tip click-here-tip
[Learn more about Proof of Liquidity](/tokenomics/proof-of-liquidity)
:::

---

## Reserve Contract

The Moony Reserve Contract is the core smart contract that governs all token issuance and redemption. It operates autonomously on the Solana blockchain and cannot be altered or controlled by any party.

### Contract Features

- **Immutable Code:** Smart contract logic cannot be changed once deployed
- **Autonomous Operation:** Functions without human intervention or control
- **Transparent Operations:** All transactions are visible on the Solana blockchain
- **Permissionless Access:** Anyone can interact with the contract directly
- **Liquidity Management:** Automatically manages USDC reserves and token supply

### How It Works

1. **Buying Moony:** Users send USDC to the contract and receive Moony tokens
2. **Selling Moony:** Users send Moony tokens to the contract and receive USDC
3. **Price Calculation:** All pricing is determined by the bonding curve formula
4. **Supply Management:** Token supply automatically adjusts based on demand
5. **Liquidity Provision:** USDC remains in the contract to support redemptions

::: tip click-here-tip
[Learn more about the Reserve Contract](/tokenomics/reserve-contract)
:::

---

## Bonding Curve

Moony's price is determined by an onchain bonding curve. The more tokens minted, the higher the price. When tokens are redeemed, price adjusts accordingly, ensuring alignment between supply and market demand.

### Bonding Curve Mechanics

- **Price Discovery:** Price increases exponentially as more tokens are purchased
- **Demand Alignment:** Higher demand leads to higher prices, naturally limiting supply
- **Redemption Support:** Users can sell tokens back to the reserve at the current curve price
- **Transparent Pricing:** All price calculations are visible and verifiable onchain
- **No Manipulation:** Pricing cannot be influenced by any external party

### Benefits of the Bonding Curve

1. **Fair Pricing:** Price discovery is algorithmic and transparent
2. **Demand-Driven Supply:** Token issuance automatically responds to market demand
3. **Liquidity Provision:** The curve ensures there's always a market for buying and selling
4. **Anti-Speculation:** Gradual price increases discourage rapid speculation
5. **Long-term Alignment:** Incentivizes long-term holding and network growth

::: tip click-here-tip
[Learn more about the Bonding Curve](/tokenomics/bonding-curve)
:::

---

## Use Cases

Moony is the foundational asset for a programmable, internet-native economy. It enables seamless, decentralized value exchange across a diverse range of applications without reliance on centralized infrastructure or intermediaries.

### P2P Payments

Enable global, permissionless transfers with near-zero fees and no latency. Moony empowers direct value exchange without intermediaries, expanding access to digital economies worldwide.

**Key Features:**
- **Global Access:** Available to anyone with internet access
- **Low Fees:** Minimal transaction costs compared to traditional systems
- **Instant Settlement:** Transactions settle in seconds on Solana
- **No Intermediaries:** Direct peer-to-peer value transfer
- **Permissionless:** No approval required to send or receive

::: tip click-here-tip
[Learn more about P2P Payments](/use-cases/p2p-payments)
:::

### Micropayments

Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.

**Applications:**
- **Content Monetization:** Pay-per-article, per-video, or per-minute
- **Streaming Payments:** Continuous micropayments for ongoing services
- **Gaming:** In-game purchases and rewards
- **IoT Payments:** Machine-to-machine transactions
- **Social Tipping:** Support creators with small amounts

::: tip click-here-tip
[Learn more about Micropayments](/use-cases/micropayments)
:::

### DeFi Integration

Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.

**Integration Opportunities:**
- **Lending Protocols:** Use Moony as collateral or borrow against it
- **Automated Market Makers:** Provide liquidity in trading pairs
- **Staking:** Earn rewards by participating in network security
- **Yield Farming:** Generate returns through various DeFi strategies
- **Cross-Chain Bridges:** Move Moony between different blockchain networks

::: tip click-here-tip
[Learn more about DeFi Integration](/use-cases/defi)
:::

---

## Composable Ecosystem

Moony is the foundational asset for a programmable, internet-native economy. It enables seamless, decentralized value exchange across a diverse range of applications without reliance on centralized infrastructure or intermediaries.

With global accessibility and negligible fees, Moony forms the basis of an open, interoperable economic layer for the internet. Its architecture supports permissionless integration across wallets, apps, and protocols, allowing anyone to build, exchange, and interact with value on their own terms.

As a composable SPL token, Moony can be embedded directly into smart contracts, payment flows, and onchain systems. Its programmable design and native compatibility unlock new forms of coordination and monetization, expanding what’s possible in digital commerce and laying the foundation for a user-owned, innovation-driven economy.


### Potential Applications

- **P2P Payments:** Enable global, permissionless transfers with near-zero fees and no latency. Moony empowers direct value exchange without intermediaries, expanding access to digital economies worldwide.
- **Micropayments:** Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.
- **DeFi Integration:** Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.


::: tip click-here-tip
[Learn more about Moony's use cases](/use-cases/ecosystem)
:::

## Decentralized Community

Moony is not controlled by any organization or governing body. It operates as a decentralized blockchain protocol designed to serve as a public good. Open, permissionless, and governed by immutable code, Moony’s growth is shaped by the individuals and communities who use and support it. As adoption grows, the protocol’s utility and reach expand organically through the voluntary efforts of individuals, communities, and independent projects.

Moony’s economic architecture is designed to reward that participation. Its Proof of Liquidity (PoL) model issues new tokens only when users deposit USDC into the reserve contract, expanding liquidity and distributing supply in direct response to demand. As usage grows, through integrations, transactions, or broader adoption, the price of newly minted tokens increases via the bonding curve, aligning incentives across the network. Those who help expand Moony’s reach also stand to benefit from the value they help create. Growing the network is not only a shared mission but also a self-reinforcing strategy. Every new integration, creator, or community that joins strengthens the ecosystem and amplifies the potential impact of every contribution.

Participation is open to all. Whether you’re a developer, creator, organizer, or enthusiast, there are many ways to contribute. Moony grows through grassroots energy and shared values, not central control. By offering time, talent, or ideas, participants help expand the network and strengthen its foundation. A diverse ecosystem of independent contributors is expected to emerge, including startups, nonprofits, open-source projects, and grassroots collectives. While none control the protocol, each plays a role in expanding its reach and reinforcing its resilience.

### How To Contribute:

- **Build:** Integrate Moony into apps, platforms, and tools to unlock new use cases across the digital economy.
- **Transact:** Accept Moony for goods, services, or content to enable direct community support and alternative monetization.
- **Organize:** Launch regional or thematic groups around shared languages, interests, or goals to drive local adoption.
- **Educate:** Produce resources or host events that help others understand, use, and build with Moony.
- **Express:** Use storytelling, memes, and art to spread awareness and shape Moony’s cultural narrative.

::: tip click-here-tip
[Learn more about Moony's community](/resources/community)
:::

---

## Community & Resources

### How to Contribute

- **Build:** Integrate Moony into apps, platforms, and tools to unlock new use cases across the digital economy
- **Transact:** Accept Moony for goods, services, or content to enable direct community support and alternative monetization
- **Organize:** Launch regional or thematic groups around shared languages, interests, or goals to drive local adoption
- **Educate:** Produce resources or host events that help others understand, use, and build with Moony
- **Express:** Use storytelling, memes, and art to spread awareness and shape Moony's cultural narrative

### Available Resources

- **Community Hub:** Connect with other Moony users and developers
- **Brand Kit:** Access official logos, colors, and design assets
- **Technical Documentation:** Detailed guides for developers
- **Integration Examples:** Sample code and implementation guides
- **Support Channels:** Get help from the community

::: tip click-here-tip
[Access Community Resources](/resources/community)
:::

---

## Flipcash Infrastructure

Moony and it's reserve contract were launched using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash does not maintain control over Moony or its reserve contract, nor can it alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.

At launch, Flipcash provides the first public interface for interacting directly with the Moony Reserve Contract. Through its mobile app, users can seamlessly buy Moony or sell Moony for USDC. Flipcash also offers an industry-leading, trustless peer-to-peer payments experience, giving users a seamless way to transact with Moony.

### Flipcash Enables Users To:

- **Interact With Reserve:** Seamlessly convert between Moony and USDC through an intuitive interface.
- **Send P2P Payments:** Instantly use Moony as digital cash where you can hand it to someone or send it as a link.

::: tip click-here-tip
[Download Flipcash Mobile Application](https://www.flipcash.com)
:::

While Flipcash provides the first front end to access the Moony reserve contract, Moony is not limited to any single platform. Designed as a digital public good, Moony can be integrated into any third party platform, protocol,wallet, or app, ensuring broad utility, composability, and adoption.

---

## Conclusion

Moony represents a new paradigm for digital assets - one that prioritizes transparency, fairness, and permissionless access. By combining fixed supply with Proof of Liquidity and a bonding curve, Moony creates a sustainable economic model that grows with its community.

The protocol's immutable design ensures that these principles cannot be compromised, while its open architecture encourages innovation and adoption across the broader blockchain ecosystem. As more users, developers, and businesses integrate with Moony, the network effect will amplify its utility and value.

Whether you're looking to make payments, build applications, or participate in the future of decentralized finance, Moony provides the foundation for a more open, accessible, and user-owned digital economy.

---

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::