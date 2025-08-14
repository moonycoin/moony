---
title: Proof of Liquidity
---

<div class="justify">

# Proof of Liquidity

Moony uses a distribution mechanism called Proof of Liquidity (PoL), implemented entirely through its immutable on-chain reserve contract. Under this model, new tokens enter circulation exclusively in exchange for verifiable on‑chain capital, ensuring issuance is transparent, market‑driven, and free from discretionary control.

The PoL model guarantees that all circulating supply emerges from public, on-chain activity—never from premines, insider allocations, or venture funding. Each Moony token is issued in exchange for USDC, a widely used, dollar-pegged stablecoin issued by Circle Internet Group, Inc. This stable pairing offers clear pricing, lowers entry barriers, and strengthens trust among new participants. This pairing provides familiar dollar‑based valuation and lowers the entry barrier for new participants. Every issuance and redemption is executed by immutable onchain logic, ensuring transparency, market‑driven pricing, and freedom from discretionary control.

## Capital-Based Mining

Moony’s Proof of Liquidity (PoL) mechanism offers a capital‑driven alternative to traditional Proof‑of‑Work (PoW) distribution models. Instead of consuming vast amounts of energy through specialized hardware to compete for block rewards, participants mint Moony by depositing USDC directly into the on‑chain Reserve Contract. This shifts issuance from energy‑intensive computation to verifiable, capital‑based participation.

This model redefines mining as a constructive economic activity rather than an extractive one. Each deposit not only mints new Moony but also strengthens the network by adding permanent, redeemable on‑chain liquidity. Where traditional mining externalizes environmental costs, PoL compounds value inside the ecosystem, aligning participant incentives with collective benefit.

This process is:

- **Public and market-driven**: Anyone can participate as demand arises, without permission or centralized control.
- **Deterministic and transparent**: The bonding curve fully governs issuance and pricing, removing subjective decision-making.
- **Economically constructive**: All capital remains in the Reserve Contract, forming the liquidity backbone of Moony’s economy.

By combining PoL with Solana’s carbon‑efficient infrastructure, Moony achieves a distribution model that is both sustainable and economically reinforcing. Every minted token leaves lasting value in the network, deepens market liquidity, and ensures that growth reflects genuine demand, creating a self‑sustaining framework for the issuance of scarce digital assets.

## Fee Model

Acquiring Moony directly from the Reserve Contract carries no fee, enabling cost‑efficient entry into the ecosystem. Redemptions, selling Moony back to the Reserve Contract for USDC, incur a 1% fee. 

This mechanism serves two purposes:

- **Security**: The fee mitigates the risk of sandwich attacks, a form of front‑running in which automated bots attempt to profit from predictable price movements by inserting transactions around a user’s trade.
- **Revenue**: Fee proceeds are directed to Flipcash Inc., the developer of the Reserve Contract’s architecture. While Moony was launched as an independent protocol, it leverages this infrastructure to facilitate permissionless access.

The sell‑side fee applies only to redemptions executed directly against the Reserve Contract. Peer‑to‑peer transfers and secondary market transactions, whether on centralized or decentralized exchanges, are not subject to this fee.

</div>