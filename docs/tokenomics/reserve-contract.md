# Reserve Contract

Moony has a permanently capped supply of 21 million tokens. At genesis, the entire supply is deposited into the Moony reserve, an immutable smart contract deployed on the Solana blockchain. It serves as the foundation of Moony's distribution system, enabling anyone to acquire or redeem tokens directly onchain without intermediaries. 

 No tokens were allocated to any team, treasury, investors, or insiders. Instead, the supply remains unissued until users interact with the contract. This design ensures a fair start, eliminates insider advantages, and aligns issuance with real demand through onchain interaction.

### Core Mechanisms

The Reserve Contract governs all token issuance and redemption. Users interact with the Reserve directly by exchanging USDC for Moony or vice versa, with pricing determined by an onchain bonding curve. This system ensures continuous liquidity and transparent, market‑driven distribution.

- **Proof of Liquidity:** All circulating Moony is backed by USDC held in the contract, ensuring redeemability and reinforcing user confidence in the protocol. 

- **Bonding Curve:** Moony’s pricing follows a mathematical curve that adjusts dynamically based on circulating supply, creating a transparent and predictable pricing model.

Together, these mechanisms make the Reserve Contract the core of Moony’s architecture. Fully onchain, autonomous, and immutable, it operates without control from any foundation, team, or privileged actor. The rules that define issuance, pricing, and redemption are permanently encoded in its smart contract, ensuring openness and finality from inception.

### Design Principles

- **Immutable:** The Reserve Contract is unchangeable once deployed. It has no upgrade path, admin keys, or privileged access. The rules governing issuance, pricing, and redemption are fixed and permanently encoded. Users are protected from governance risk, policy changes, or centralized interference.

- **Non-custodial:** Users interface directly with the Reserve Contract from their own wallets, with the protocol never taking custody of funds. During minting, USDC is transferred on‑chain to the contract; during redemption, the contract returns USDC directly to the user. All interactions occur entirely on‑chain, without intermediaries or reliance on off‑chain accounts.

- **Permissionless:** The Reserve is open and accessible to anyone, anywhere, without gatekeepers, whitelists, or KYC requirements. Participation is fully permissionless, enabling both individuals and developers to interact with the protocol on equal terms.

- **Transparent:** All contract activity is recorded on‑chain and is publicly verifiable. Participants can monitor supply, reserves, and pricing in real time, with no hidden mechanics or opaque governance processes.


## Flipcash Infrastructure

Moony and it's reserve contract were launched using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash does not maintain control over Moony or its reserve contract, nor can it alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.

At launch, Flipcash provides the first public interface for interacting directly with the Moony reserve contract. Through its mobile app, users can seamlessly acquire Moony or redeem tokens for USDC. The app also offers an industry-leading, trustless peer-to-peer payments experience, giving users a seamless way to transact with Moony.

While Flipcash provides the first front end to access the Moony reserve contract, Moony is not limited to any single platform. Designed as a digital public good, Moony can be integrated into any third party platform, protocol,wallet, or app, ensuring broad utility, composability, and adoption.

### Flipcash Enables Users To:

- **Interact With Reserve:** Seamlessly convert between Moony and USDC through an intuitive interface.
- **Send P2P Payments:** Use QR code based digital cash and URL links to send and receive payments.

::: tip click-here-tip
[Download Flipcash Mobile Application](/resources/community)
:::
