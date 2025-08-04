---
icon: chart-line-up
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

# Bonding Curve

The price of MOONY is governed by a **bonding curve**, a deterministic mathematical function implemented within the Moony Reserve smart contract. This curve sets the token price based on the percentage of total supply currently in circulation.


The bonding curve is the mechanism through which MOONY is priced during both minting and redemption directly through the Reserve contract. As more tokens are minted or fewer remain unissued, the price increases non-linearly, creating a transparent, incentive-aligned pricing structure.

***

## Core Principles&#x20;

* **Price Increases with Demand**: As users mint MOONY from the Reserve Contract, the circulating supply increases. The bonding curve adjusts the price upward with each transaction.
* **Price Also Governs Redemption**: When users redeem MOONY for USDC through the Reserve, the curve calculates the return value based on the current supply position.
* **Predictable and Transparent**: Pricing is not subject to market speculation or discretionary control. Every price point is determined onchain.
* **Scarcity-Enforcing**: Later tokens cost significantly more, reinforcing Moony's capped supply and aligning incentives for early participation.

***

## Key Parameters


* The price of the **first MOONY** token is **$0.01 USDC**
* The price of the **final MOONY** token is **$1,000,000 USDC**
* For every **1% increase** in circulating supply, the price increases by approximately **20%** relative to the previous 1%

This exponential pricing model promotes gradual growth and long-term alignment. Early adopters are rewarded with lower acquisition costs, while later participants contribute greater liquidity to the system.

***

## Mathematic Model


The bonding curve is a non-linear exponential function expressed as:

**Price = base\_price \* (1 + rate)^supply\_percent**

Where:

* `base_price` is $0.01
* `rate` is 0.20 (20% increase per 1%)
* `supply_percent` is the percentage of the 21M total supply currently in circulation

This formula guarantees that pricing is deterministic and increases exponentially across the supply curve.

***

## Market Dynamics

While the Reserve Contract governs Moony's primary issuance and redemption pricing, price discovery may also occur on secondary markets, including centralized exchanges or peer-to-peer platforms. These market prices may temporarily diverge from the bonding curve price. However, the Reserve’s transparent pricing mechanism creates an **arbitrage anchor**: if MOONY trades above the Reserve price, users can mint cheaper tokens from the Reserve; if it trades below, arbitrageurs can buy on the market and redeem to the Reserve. This dynamic stabilizes price and reinforces liquidity across platforms.
