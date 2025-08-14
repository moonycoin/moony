# Reserve Contract

The Moony reserve is an immutable smart contract deployed on the Solana blockchain. It serves as the foundation of Moony's distribution system, enabling anyone to acquire or redeem tokens directly onchain without intermediaries. 

Moony has a permanently capped supply of 21 million tokens. At genesis, the entire supply is deposited into the reserve contract. No tokens were allocated to any team, treasury, investors, or insiders. Instead, the supply remains unissued until users interact with the contract.

The design ensures a fair start, eliminates insider advantages, and aligns issuance with real demand through onchain interaction. This design enshrines Moony's commitment to fairness, transparency, and decentralization.

## Core Mechanisms

The Reserve Contract governs all token issuance and redemption. Users interact directly by exchanging USDC for Moony or vice versa, with pricing determined by an onchain bonding curve. This system ensures continuous liquidity and transparent, market‑driven distribution.

- **Proof of Liquidity:** All circulating Moony is backed 1:1 by USDC held in the contract, ensuring full redeemability and reinforcing user confidence in the protocol. 

- **Bonding Curve:** Moony’s pricing follows a mathematical curve that adjusts dynamically based on circulating supply, creating a transparent and predictable pricing model.

Together, these mechanisms make the Reserve Contract the core of Moony’s architecture. Fully onchain, autonomous, and immutable, it operates without control from any foundation, team, or privileged actor. The rules that define issuance, pricing, and redemption are permanently encoded in its smart contract, ensuring openness and finality from inception.

## Design Principles

- **Immutable:** The Reserve Contract is unchangeable once deployed. It has no upgrade path, admin keys, or privileged access. The rules governing issuance, pricing, and redemption are fixed and permanently encoded. Users are protected from governance risk, policy changes, or centralized interference.

- **Non-custodial:** Users interface directly with the Reserve Contract from their own wallets, with the protocol never taking custody of funds. During minting, USDC is transferred on‑chain to the contract; during redemption, the contract returns USDC directly to the user. All interactions occur entirely on‑chain, without intermediaries or reliance on off‑chain accounts.

- **Permissionless:** The Reserve is open and accessible to anyone, anywhere, without gatekeepers, whitelists, or KYC requirements. Participation is fully permissionless, enabling both individuals and developers to interact with the protocol on equal terms.

- **Transparent:** All contract activity is recorded on‑chain and is publicly verifiable. Participants can monitor supply, reserves, and pricing in real time, with no hidden mechanics or opaque governance processes.

## Open Participation

Moony’s reserve contract was deployed using infrastructure developed by Flipcash Inc., an independent third‑party company. Flipcash holds no control over Moony or its reserve contract and cannot alter the protocol’s issuance, pricing, or supply mechanisms. These parameters are fixed in Moony’s immutable smart contract, ensuring the system remains open, autonomous, and free from centralized oversight.

At launch, Flipcash will be the first platform to integrate directly with the reserve contract, offering early adopters an accessible interface to mint and redeem Moony. While Flipcash provides this initial point of access, the reserve contract is fully open and permissionless. Any application, wallet, or platform can integrate without approvals or coordination, enabling a diverse ecosystem of independent front ends. This interoperability reinforces Moony’s role as a public good, accessible to anyone, anywhere, and extendable by a broad range of participants.