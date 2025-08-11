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

Price = base_price * (1 + rate) ^ supply_percent

Where:
base_price = $0.01 USDC (price of the first token)
rate = 0.20 (20% price increase for each 1% of total supply issued)
supply_percent = percentage of the 21,000,000 total supply currently in circulation

This model guarantees deterministic, transparent price progression. The first Moony token is priced at $0.01 USDC, while the final token will approach $1,000,000 USDC. The non‑linear curve is central to Moony’s economic design, early activity is rewarded with lower acquisition costs, while later entrants add more capital to the Reserve, deepening liquidity and ensuring the system scales in proportion to demand.

## Market Dynamics

While the Reserve Contract governs Moony’s primary issuance and redemption pricing, price discovery may also occur on secondary markets, including centralized exchanges or peer‑to‑peer platforms. These market prices may temporarily diverge from the bonding curve price. However, the Reserve’s transparent pricing mechanism creates an arbitrage anchor: 

If Moony trades above the Reserve price, users can mint from the Reserve at a lower cost.

If Moony trades below the Reserve price, arbitrageurs can buy on the market and redeem to the Reserve.

This dynamic keeps market prices tethered to the curve, reinforcing liquidity and price stability across platforms.