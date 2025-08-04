---
icon: gear-code
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Reserve Contract

The Moony reserve contract is an immutable smart contract deployed on the Solana blockchain. It serves as the foundation of Moony's distribution system, enabling anyone to acquire or redeem tokens directly onchain without intermediaries.

Moony has a permanently capped supply of 21 million tokens. At genesis, the entire supply is deposited into the reserve contract. No tokens were allocated to any team, treasury, investors, or insiders. Instead, the supply remains unissued until users interact with the contract.

The design ensures a fair start, eliminates insider advantages, and aligns issuance with real demand through onchain interaction. This design enshrines Moony's commitment to fairness, transparency, and decentralization.

***

## Core Mechanisms

The Reserve Contract governs all token issuance and redemption. Users interact directly by exchanging USDC for Moony or vice versa, with pricing determined by an onchain bonding curve. This system ensures continuous liquidity and transparent, market-driven distribution.



*   **Proof of Liquidity**

    All circulating Moony is backed by real-time USDC held in the contract. This ensures full redeemability and reinforces user confidence in the protocol.


*   **Bonding Curve**

    Moony's pricing is governed by a mathematical curve that adjusts dynamically based on circulating supply. This transparent mechanism ensures predictable pricing.&#x20;


At the heart of Moony’s design is the Reserve Contract: an onchain system that governs token issuance, redemption, and protocol-owned liquidity. It is not controlled by a foundation, a team, or any privileged actor. Instead, it operates by rules encoded directly in smart contracts—open, autonomous, and final.

***

## Design Principles



* **Immutable:** The Reserve Contract is unchangeable once deployed. It has no upgrade path, admin keys, or privileged access. The rules governing issuance, pricing, and redemption are fixed and permanently encoded. Users are protected from governance risk, policy changes, or centralized interference.
* **Non-custodial:** Users interact directly with the contract from their own wallets. The protocol does not hold custody of funds. When minting, users send USDC to the contract. When redeeming, the contract returns USDC. There are no intermediaries or offchain accounts involved.
* **Permissionless**: The Reserve is accessible to anyone, anywhere. There are no gatekeepers, whitelists, or KYC requirements. Whether minting $5 worth of Moony or building a dApp, all access is open and equal.
* **Transparent**: All contract activity is recorded onchain and publicly verifiable. Users can inspect supply, collateral, and pricing in real time. There are no hidden mechanics or opaque governance processes.

***

## Open Participation&#x20;

At launch, Flipcash is the first independent platform to integrate directly with the Moony reserve contract, providing a simple and intuitive way for early adopters to mint and redeem Moony. \
\
The reserve contract is fully open and permissionless, allowing any application, wallet, or platform to integrate without approvals or coordination. This interoperability ensures that Moony's reserve remains accessible across a diverse range of independent front ends, reinforcing its role as a public good.


