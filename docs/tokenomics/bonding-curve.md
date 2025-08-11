# Bonding Curve

Moony’s price discovery is governed by an on‑chain bonding curve, a deterministic mathematical function encoded within the Reserve Contract. The curve dynamically adjusts the token’s price based on the proportion of the total fixed supply currently in circulation.

This mechanism applies symmetrically to both minting and redemption. When new Moony is issued, the curve calculates the cost in USDC according to current circulating supply; when Moony is redeemed, it determines the USDC return using the same logic. As circulating supply increases, the curve raises the price in a non‑linear fashion. This exponential structure is intentional: it rewards early participation with lower entry costs, requires later participants to contribute proportionally more liquidity, and naturally reinforces Moony’s scarcity over time.

## Core Principles

- **Price Increases with Demand:** As users mint Moony from the Reserve Contract, the circulating supply increases and the bonding curve adjusts the price upward with each transaction.

- **Price Also Governs Redemption:** When users redeem Moony for USDC through the Reserve, the curve calculates the return value based on the current supply position.

- **Predictable and Transparent:** Pricing is fully deterministic, enforced by on‑chain logic, and free from discretionary control.

- **Aligned Incentives:** Early adopters gain an advantage, while later participants strengthen network liquidity through higher‑priced entries.

## Model Parameters

The bonding curve follows a non‑linear exponential function:

```math
Price = base\_price × (1 + rate)^{supply\_percent - 1}
```

### **Key Variables**

```math
base\_price = $0.01 \text{ USDC}
```
*The price for the first 1% of supply*

```math
rate = 0.20 \text{ (20%)}
```
*Price increase for each additional 1% of total supply issued*

```math
supply\_percent = \frac{\text{Current Circulating Supply}}{21,000,000} × 100
```
*Percentage of the total fixed supply currently in circulation*

### **Price Examples**

| Supply Level | Circulating Tokens | Price per 1% | Total Cost for Next 1% |
|--------------|-------------------|---------------|------------------------|
| 1%          | 210,000           | $0.01 USDC    | $2,100 USDC            |
| 2%          | 420,000           | $0.012 USDC   | $2,520 USDC            |
| 5%          | 1,050,000         | $0.0207 USDC  | $4,347 USDC            |
| 10%         | 2,100,000         | $0.043 USDC   | $9,030 USDC            |
| 25%         | 5,250,000         | $0.149 USDC   | $31,290 USDC           |
| 50%         | 10,500,000        | $0.516 USDC   | $108,360 USDC          |
| 75%         | 15,750,000        | $1.79 USDC    | $375,900 USDC          |
| 90%         | 18,900,000        | $6.19 USDC    | $1,299,900 USDC        |
| 95%         | 19,950,000        | $15.4 USDC    | $3,234,000 USDC        |
| 99%         | 20,790,000        | $61.9 USDC    | $13,000,000 USDC       |
| 99.9%       | 20,979,000        | $185 USDC     | $38,850,000 USDC       |
| 99.99%      | 20,997,900         | $555 USDC     | $116,550,000 USDC      |
| 100%        | 21,000,000         | $1,667 USDC   | $350,000,000 USDC      |

**Note**: The exponential growth becomes extremely steep at the end. The final 0.01% of supply (21,000 tokens) costs $350 million USDC, making each individual token worth approximately $16,667. The very last few tokens would indeed approach $1,000,000 each as the curve becomes nearly vertical.

This model guarantees **deterministic, transparent price progression**. The first 1% of Moony supply is priced at $0.01 per token, while the final tokens will approach $1,000,000 each. The non‑linear curve is central to Moony's economic design: early activity is rewarded with lower acquisition costs, while later entrants add more capital to the Reserve, deepening liquidity and ensuring the system scales in proportion to demand.

## Market Dynamics

While the Reserve Contract governs Moony’s primary issuance and redemption pricing, price discovery may also occur on secondary markets, including centralized exchanges or peer‑to‑peer platforms. These market prices may temporarily diverge from the bonding curve price. However, the Reserve’s transparent pricing mechanism creates an arbitrage anchor: 

If Moony trades above the Reserve price, users can mint from the Reserve at a lower cost.

If Moony trades below the Reserve price, arbitrageurs can buy on the market and redeem to the Reserve.

This dynamic keeps market prices tethered to the curve, reinforcing liquidity and price stability across platforms.