# Complete Guide to Moony

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::

## Table of Contents

1. [Introduction](#introduction)
2. [Tokenomics](#tokenomics)
3. [Proof of Liquidity](#proof-of-liquidity)
4. [Reserve Contract](#reserve-contract)
5. [Bonding Curve](#bonding-curve)
6. [Use Cases](#use-cases)
7. [Getting Started](#getting-started)
8. [Community & Resources](#community--resources)

---

## Introduction

Moony is a decentralized digital asset deployed as a fixed-supply token on the Solana blockchain. Moony is designed to facilitate permissionless payments without intermediaries, with all issuance governed by an immutable smart contract that eliminates discretionary control and enables open participation in internet capital markets.

### What Makes Moony Unique

- **Fixed Supply:** Hard cap of 21 million tokens, enforced by immutable onchain logic
- **Fair Distribution:** No allocation to team, treasury, investors, or insiders
- **Permissionless:** Anyone can buy and sell without approvals or intermediaries
- **Proof of Liquidity:** Capital used to mint tokens remains in reserve as liquidity
- **Bonding Curve:** Deterministic pricing that increases with demand

---

## Tokenomics

Moony has a fixed maximum supply of 21 million tokens, enforced by immutable onchain logic. All 21 million tokens are minted exclusively through a Reserve Contract deployed on the Solana blockchain. Users can buy Moony by depositing USDC, a US dollar stablecoin issued by Circle Internet Group, Inc., into the Reserve Contract.

### Key Properties

- **Fixed Supply:** Moony has a hard cap of 21 million tokens, enforced by an immutable onchain smart contract. No additional tokens can ever be created.
- **Fair Distribution:** The entire supply is deposited into the reserve at launch. No allocation is given to any team, treasury, investors, or insiders.
- **Permissionless:** Anyone can buy and sell Moony by interacting directly with the reserve contract, with no approvals or intermediaries required.
- **Proof of Liquidity:** Capital used to mint Moony remains in the reserve, supporting redemptions and ensuring liquidity to support the market as it grows.
- **Bonding Curve:** Token pricing is governed by a deterministic bonding curve, meaning the price increases as more tokens are bought from the Reserve Contract, and tokens can be sold back to the Reserve Contract on the same bonding curve.

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

### Micropayments

Power sub-cent transactions and unlock new monetization models, from one-time purchases to continuous streaming payments between users, apps, or autonomous agents.

**Applications:**
- **Content Monetization:** Pay-per-article, per-video, or per-minute
- **Streaming Payments:** Continuous micropayments for ongoing services
- **Gaming:** In-game purchases and rewards
- **IoT Payments:** Machine-to-machine transactions
- **Social Tipping:** Support creators with small amounts

### DeFi Integration

Use Moony as a composable asset in lending markets, AMMs, staking protocols, and other decentralized financial infrastructure.

**Integration Opportunities:**
- **Lending Protocols:** Use Moony as collateral or borrow against it
- **Automated Market Makers:** Provide liquidity in trading pairs
- **Staking:** Earn rewards by participating in network security
- **Yield Farming:** Generate returns through various DeFi strategies
- **Cross-Chain Bridges:** Move Moony between different blockchain networks

---

## Getting Started

### How to Buy Moony

1. **Get USDC:** Purchase USDC from any major exchange or bridge
2. **Access the Reserve:** Use Flipcash app or interact directly with the contract
3. **Deposit USDC:** Send USDC to the Moony Reserve Contract
4. **Receive Moony:** Tokens are automatically minted and sent to your wallet
5. **Store Securely:** Keep your Moony in a secure Solana wallet

### How to Use Moony

1. **Send Payments:** Transfer Moony to any Solana wallet address
2. **Accept Payments:** Receive Moony from others for goods or services
3. **Integrate Apps:** Use Moony in any app that supports SPL tokens
4. **DeFi Participation:** Use Moony in various DeFi protocols
5. **Community Building:** Participate in the growing Moony ecosystem

---

## Community & Resources

### How to Contribute

- **Build:** Integrate Moony into apps, platforms, and tools
- **Transact:** Accept Moony for goods, services, or content
- **Organize:** Launch regional or thematic groups
- **Educate:** Produce resources or host events
- **Express:** Use storytelling, memes, and art to spread awareness

### Available Resources

- **Community Hub:** Connect with other Moony users and developers
- **Brand Kit:** Access official logos, colors, and design assets
- **Technical Documentation:** Detailed guides for developers
- **Integration Examples:** Sample code and implementation guides
- **Support Channels:** Get help from the community

### Flipcash Infrastructure

Moony and its reserve contract were launched using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash provides the first public interface for interacting with the Moony Reserve Contract through its mobile app.

**Flipcash Features:**
- **Reserve Interface:** Buy and sell Moony directly through the app
- **P2P Payments:** Send Moony to anyone with a link or phone number
- **Wallet Integration:** Secure storage and management of Moony
- **User Experience:** Intuitive interface for everyday use

While Flipcash provides the first front end to access the Moony reserve contract, Moony is not limited to any single platform. Designed as a digital public good, Moony can be integrated into any third party platform, protocol, wallet, or app, ensuring broad utility, composability, and adoption.

---

## Conclusion

Moony represents a new paradigm for digital assets - one that prioritizes transparency, fairness, and permissionless access. By combining fixed supply with Proof of Liquidity and a bonding curve, Moony creates a sustainable economic model that grows with its community.

The protocol's immutable design ensures that these principles cannot be compromised, while its open architecture encourages innovation and adoption across the broader blockchain ecosystem. As more users, developers, and businesses integrate with Moony, the network effect will amplify its utility and value.

Whether you're looking to make payments, build applications, or participate in the future of decentralized finance, Moony provides the foundation for a more open, accessible, and user-owned digital economy.

---

::: tip click-here-tip
[View Important Disclaimer](/resources/disclaimer)
:::
