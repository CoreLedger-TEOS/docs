---
description: Main concepts used in TEOS API and TEOS platform in general
---

# Concepts

You can check the glossary below and extended description of main TEOS concepts in subsections

### Glossary

**TEOS as PaaS /TEOS platform/** – Token Economy Operating System which represents platform as a service (TEOS as PaaS), CoreLedger’s core product, includes all platform components

**Tenant** – a logical, uniquely identifiable grouping of information and settings in TEOS Platform. Set of platform components is configured for every tenant specifically. Normally one customer has one tenant

**TEOS API consumer** – any customer application interacting with TEOS platform via TEOS API. One tenant can have several TEOS API consumers (TEOS platform components and customer applications)

**Tenant admin** – administrative user of the tenant who can manage tenant configuration, all tenant admins must have CL user account

**End users** – end users of customer, based on customer’s business case and tenant configuration end users may use TEOS platform components OR/AND customer applications

**TEOS user** – TEOS API consumer, tenant admin or end user interacting with TEOS platform via platform components provided by CoreLedger

**TEOS Authentication service** - one of the components of the TEOS platform, providing functionality for authentication and authorization of TEOS users. It's an optional service for customer's end users (depending on the customer solution architecture)

**TEOS user account /TEOS account/** – account in TEOS Authentication service representing set of user’s properties required for TEOS platform, all tenant admins and end users who login in TEOS platform components must have TEOS user account

**Device** – artificial logical entity for presenting authorized holder of wallets’ private keys, device can keep private keys of more than 1 wallet

**Provider** – artificial logical entity for presenting source oftransactions, authorized to push transactions to connected devices

**Wallet** – wallets are used to keep sparks of assets owned by a TEOS user. Each wallet consists of a pair of public address, which is used to identify the wallet, and private key, which is stored by wallet owner required to sign transactions [Learn more](wallet.md)

**Seed words** – a group of random words generated by your crypto wallet when you first set it up and which will be needed to restore the access to your wallet (to restore private keys)

**Spark** – generalized term for the smallest indivisible fraction of a digital asset (like one Satoshi is for Bitcoin or one Wei is for Ether) [Learn more](spark.md)

**Digital asset /asset/** – every artifact, specific tangible value, on blockchain within TEOS platform [Learn more](asset.md)

**Token** – used as a unit of measure (uom) within the TEOS platform, which exists alongside a variety of other units such as kilogram, liter, square meter, etc.

**Supply** – an offer created by a user to get specific amount of sparks of desired asset in exchange to specific amount of sparks of offered asset

**Warp** – sequence of supplies that is returned as the search result by a WARP search engine based on a mathematical optimization algorithm where the supplies, available in TEOS at the moment, play the role of chain links

**Controller** – logical container with the set rules for checking the allowance to perform transfer transactions with specific assets for specific wallets. The default version of a controller has a simple rule-set – granting or denying transfer of units for the asset based on whitelist and blacklist. If no controller is assigned to an asset, transfer transactions are not restricted

**Invoice** - a time-stamped digital record for a payment agreement made between two parties [Learn more](invoice.md)