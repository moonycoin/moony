---
icon: money-bills
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

# P2P Payments

Peer-to-peer (P2P) payments are the most direct expression of Moony’s purpose: value moving between people without intermediaries. By combining a credibly constrained supply with trust-minimized, onchain settlement, Moony enables anyone to send and receive digital cash globally with finality, transparency, and extremely low fees.

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

## Why It Matters

Traditional payment systems route through layered intermediaries: banks, processors, networks, and compliance vendors, each adding cost, latency, and points of failure or control. Those layers can decline transactions, reverse them days later, or exclude entire regions and communities.

Moony’s P2P model is different:

* **Direct settlement:** Payments are finalized on‑chain between sender and recipient addresses, no custodial middleman needed.
* **Trust minimization:** Rules are enforced by code. Users do not rely on a counterparty’s promise to settle later.
* **Censorship resistance:** As long as participants can reach the network, valid transactions are processed by the protocol.
* **Global Accessibility:** Anyone with an internet connection and a compatible wallet can participate, regardless of local banking access.

The result is a payment primitive that feels like handing someone cash, only it works across any distance, any time of day, with programmatic certainty.

***

## Global Scalability&#x20;

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

For P2P to work at human scale, costs and throughput must be practical. Moony launches on the Solana blockchain to achieve that:

* **Fees**: Typical transfers cost a tiny fraction of a cent in network fees. Fees are predictable and transparent at the time of submission.
* **Throughput & latency:** Solana’s high‑performance design supports high volumes with low confirmation times, so everyday payments don’t congest the network.
* **Composability:** The same low‑fee rails that serve P2P transfers also enable higher‑order use cases (micropayments, streaming, machine‑to‑machine settlement) without redesigning the base.

Together, these properties make Moony credible for daily payments, not just occasional, high‑value transactions.

***

## Finality, Audibility, and Security



* **Finality:** Once confirmed, a transaction is settled by the network and cannot be unilaterally reversed by third parties.
* **Auditability:** Balances and transfers are recorded on‑chain, enabling independent verification and financial transparency when desired.
* **User safety practices:** Moony encourages common‑sense operational security, verifying addresses, using hardware or secure wallets, and starting with small test transfers when sending to a new counterparty.

Finality and auditability together create predictable payments that reduce disputes and operational overhead.

***

## Global Financial Inclusion

Billions of people live with limited or unreliable access to modern payment infrastructure. Even where banking exists, cross‑border remittances are costly and slow, and small transactions are often uneconomical.

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

Moony’s P2P model helps address these barriers:

* **Open access:** Anyone with a smartphone and internet connection can receive Moony within minutes, without opening a bank account or passing gatekeepers that may be unavailable in their region.
* **Remittance efficiency:** Low fees and rapid settlement allow migrants and cross‑border workers to send value home quickly and predictably.
* **Micro‑commerce:** Street vendors, creators, and small online sellers can accept small payments without card terminals, chargebacks, or high percentage fees.
* **24/7/365 operations:** No weekend or holiday shutdowns; P2P works when people need it.

Inclusion is not only about access, it’s about practical economics. When fees are low and finality is fast, more transactions become worthwhile, widening the circle of participation.

***

## Interoperable Access

Moony is issued as an SPL token on the Solana blockchain, ensuring that it is fully interoperable and not bound to any single interface or platform. From the moment it is minted, Moony is part of a broader composable ecosystem where users and developers can freely move, store, and integrate the asset without permission. This open design not only reinforces Moony’s role as decentralized digital cash but also guarantees that its utility can expand organically across a variety of independent applications.

Several key properties enable this interoperability:

* **Wallet compatibility**: Any Solana‑compatible wallet that supports SPL tokens can hold and transfer Moony. Users are free to manage their balances in the interface of their choice, rather than being locked into a single custodial or proprietary app.
* **Composability**: Moony can be added to payment apps, point‑of‑sale systems, bots, and custodial or non‑custodial services with minimal friction. Developers can plug into Moony the same way they support any other SPL token, allowing it to circulate naturally through the ecosystem.

Because Moony is permissionless and composable by design, its peer‑to‑peer utility is not constrained to a single application. The token can flow seamlessly between wallets, payment interfaces, and future onchain services, creating a foundation for global accessibility and financial inclusion as the network of integrations grows.

***

## Flipcash Launch Integation

At launch, Flipcash will provide the first independent public interface for Moony, allowing users to experience it as true digital cash.&#x20;

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption></figcaption></figure>

Through its intuitive mobile interface, users can seamlessly mint and redeem Moony directly from the reserve contract and begin transacting within seconds, without relying on banks, card networks, or any centralized intermediary. This immediate usability allows Moony to function like cash for the digital era: fast, final, and user‑controlled.

Flipcash makes the on‑chain experience accessible through familiar payment patterns:

* **QR codes** – Scan to pay in person. This simple interaction makes Moony feel like handing someone cash, but with global reach and on‑chain settlement.
* **Payment links** – Generate a link to share over chat, email, or social media, allowing recipients to claim Moony instantly and securely.
* **Instant balance and settlement** – Users can see their Moony balance update immediately, pay friends and settle transactions without waiting days for bank processing.

By abstracting complex onchain mechanics into actions users already understand, Flipcash delivers a mainstream‑ready P2P experience.&#x20;

{% hint style="info" %}
While Flipcash is the first independent interface to access the Moony reserve contract, the token remains fully permissionless and interoperable as an SPL asset. Any compatible Solana wallet can store, send, or receive Moony, and future apps can integrate it seamlessly without requiring approval.
{% endhint %}

***
