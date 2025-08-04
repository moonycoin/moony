---
icon: rotate
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

# Proof of Liquidity

Moony utilizes a distribution model called **Proof of Liquidity (PoL)**, implemented entirely through the Moony Reserve smart contract. In this model, tokens are issued only in exchange for real, onchain capital.

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

The PoL model ensures that all circulating supply originates from public market activity, not from premines, insider allocations, or venture capital funding. Every token in circulation is backed by deposited USDC, and every issuance or redemption event is governed by immutable logic within the Reserve Contract.

***

## Dollar Denominated Access&#x20;

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

Moony is paired with USDC, a widely adopted dollar backed stablecoin issued by Circle. This pairing enables dollar based valuation, removes volatility from the base currency, and makes participation more accessible to new users. USDC’s transparency and regulatory alignment also reinforce the credibility of Moony’s backing mechanism.

At genesis, the Reserve Contract holds the entire fixed supply of 21 million MOONY and zero USDC. Liquidity enters the system only when a user sends USDC to the Reserve Contract to mint new tokens. As a result, the liquidity base grows directly in proportion to actual demand, and all minting activity is executed through the contract’s onchain bonding curve.

***

## Capital-Based Mining&#x20;

Moony’s Proof of Liquidity (PoL) represents a modern, capital‑based alternative to Proof of Work (PoW) mining. Instead of competing with specialized hardware and expending massive amounts of electricity to secure new supply, users mint Moony by depositing USDC into the on‑chain Reserve Contract.

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

This transforms the process of “mining” into a constructive economic activity rather than an extractive one. Each deposit not only mints new Moony, but also adds lasting value to the network in the form of redeemable on‑chain liquidity. Where traditional mining externalizes costs to the environment, PoL compounds value inside the ecosystem, aligning participant incentives with collective benefit.

This process is:

* Public and market‑driven – Anyone can participate as demand arises, without permission or centralized control.
* Deterministic and transparent – The bonding curve fully governs issuance and pricing, removing subjective decision‑making.
* Economically constructive – All capital remains in the Reserve Contract, forming the liquidity backbone of Moony’s economy.

In PoL, dollars replace electricity as the mining input. Rather than being burned or lost, that capital stays onchain to strengthen the network for every participant.

#### Contrasting PoL and Proof of Work

Traditional PoW networks like Bitcoin pioneered decentralized scarcity, but they rely on massive energy consumption and capital outflow. Miners compete using industrial hardware and consume gigawatt‑hours of electricity to secure the network and earn block rewards. This model, while proven, comes with trade‑offs:

* High energy consumption, much of which is ultimately dissipated as heat.
* Environmental impact when non‑renewable energy sources are used at scale.
* Indirect capital loss, as energy and hardware investments leave the system permanently.

Moony’s PoL model eliminates this waste entirely:

* No electricity is burned to issue new supply.
* All contributed USDC remains in the Reserve Contract, serving as redeemable liquidity for the network.
* Issuance scales with genuine market demand, rather than raw hardware or energy deployment.

The result is a cleaner, more efficient model where participation strengthens the ecosystem instead of draining resources.

#### Carbon‑Efficient and Sustainable

By combining PoL with Solana’s Proof‑of‑Stake (PoS) consensus, Moony offers a carbon‑efficient and environmentally sustainable distribution model for a finite digital asset. Solana’s network consumes a fraction of the energy used by PoW chains, and PoL’s design ensures that no external resources are wasted to issue new tokens.

* PoS minimizes energy usage per transaction, avoiding the constant power draw of PoW mining.
* PoL eliminates resource‑intensive competition, replacing energy expenditure with productive capital commitment.
* Distribution naturally follows demand, enabling growth without ecological impact.

This approach aligns digital scarcity with global sustainability goals, proving that a trustless, permissionless monetary system can operate without externalizing environmental cost.

#### Systemic Benefits

PoL’s advantages extend beyond environmental efficiency, it fundamentally strengthens Moony’s economic architecture. Every USDC deposit remains within the ecosystem, creating a self‑reinforcing loop of liquidity and resilience:

* **Continuous on‑chain liquidity** – Every minted Moony is backed by USDC in the Reserve Contract, stabilizing market depth and simplifying redemption.
* **Market‑aligned issuance** – New tokens are only created when participants commit real capital, ensuring distribution reflects genuine demand.
* **Resilient network growth** – Instead of draining resources like PoW, PoL allows liquidity to accumulate over time, benefitting all participants and supporting Moony’s role as a public good.

In short, every token minted through PoL strengthens the network. Capital is retained, liquidity grows, and the ecosystem becomes more robust with each action, creating a sustainable model for the distribution of scarce digital assets.

***

## Two-Way Liquidity&#x20;

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

The Reserve Contract is bidirectional. Users can:

* **Mint** new tokens by depositing USDC into the contract
* **Redeem** tokens by sending MOONY back to the contract for USDC

All pricing is governed by a transparent bonding curve that adjusts based on circulating supply. When USDC is deposited, the contract calculates the exact number of MOONY to issue at that moment. When MOONY is returned, the contract determines the USDC redemption amount based on current curve pricing.

{% hint style="info" %}
Click here to learn more about the Bonding Curve.
{% endhint %}

***

## Fee Model&#x20;

Purchasing MOONY from the Reserve Contract incurs **no fee**, making it cost effective to enter the ecosystem.

Selling MOONY back to the Reserve Contract incurs a **1% fee**, which serves two purposes:

* **Security**: The fee discourages sandwich attacks, a form of front-running where bots exploit price movement by inserting trades around a user’s transaction.
* **Revenue**: The fee is paid to Flipcash Inc., the architect of the smart contract design. Although Moony was launched independently, it uses open infrastructure developed by Flipcash.

The sell fee applies only when redeeming directly through the Reserve Contract. Transactions on exchanges or peer-to-peer platforms are unaffected.

{% hint style="info" %}
Click here to learn more about how Moony uses Flipcash
{% endhint %}
