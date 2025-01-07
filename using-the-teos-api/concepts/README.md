---
description: >-
  Main TEOS Platform terms, development and blockchain terms used in TEOS API
  and TEOS platform in general. You can check the extended description of main
  TEOS platform concepts in subsections
---

# Terms and concepts

## TEOS Platform terms

**TEOS as PaaS /TEOS Platform/** – Token Economy Operating System which represents platform as a service (TEOS as PaaS), CoreLedger’s core product, includes all platform components

**Tenant** – set of the TEOS platform components configured for specific customer and use case, connected to the specific [environment](../architecture-note/#environments-and-nodes). Normally one customer has one development tenant and one or more productive tenants

**Tenant admin** – administrative user of the tenant who can manage tenant configuration, all tenant admins must have CL user account

**End users** – end users of the customer, based on customer’s business case and tenant configuration end users may use TEOS platform components OR/AND customer applications

**TEOS API consumer** – any customer application interacting with TEOS platform via TEOS API. One tenant can have several TEOS API consumers (TEOS platform components and customer applications)

**TEOS user** – TEOS API consumer, tenant admin or end user interacting with TEOS platform via platform components provided by CoreLedger

**Digital asset /asset/** – every artifact, specific tangible value, on blockchain within TEOS platform [Learn more](asset.md)

**Token** – used as a unit of measure (uom) within the TEOS platform, which exists alongside a variety of other units such as kilogram, liter, square meter, etc.

**Spark** – generalized term for the smallest indivisible fraction of a digital asset (like one Satoshi is for Bitcoin or one Wei is for Ether) [Learn more](spark.md)

**Wallet** – wallets are used to keep sparks of assets owned by a TEOS user. Each wallet consists of a pair of public address, which is used to identify the wallet, and private key, which is stored by wallet owner required to sign transactions [Learn more](wallet.md)

**Controller** – logical container with the set rules for checking the allowance to perform transfer transactions with specific assets for specific wallets. The default version of a controller has a simple rule-set – granting or denying transfer of units for the asset based on whitelist and blacklist. If no controller is assigned to an asset, transfer transactions are not restricted

**Invoice** - a time-stamped digital record for a payment agreement made between two parties [Learn more](invoice.md)

**Supply** – an offer created by a user to get specific amount of sparks of desired asset in exchange to specific amount of sparks of offered asset [Learn more](supply.md)

**Warp** – sequence of supplies that is returned as the search result by a WARP search engine based on a mathematical optimization algorithm where the supplies, available in TEOS at the moment, play the role of chain links

## TEOS Platform development terms

**TEOS Authentication service** - one of the components of the TEOS platform, providing functionality for authentication and authorization of TEOS users. It's an optional service for customer's end users (depending on the customer solution architecture)

**TEOS user account /TEOS account/** – account in TEOS Authentication service representing set of user’s properties required for TEOS platform, all tenant admins and end users who login in TEOS platform components must have TEOS user account

**Device** – TEOS Platform creates virtual devices for each physical device which represents the holder of wallets’ private keys in the TEOS Platform. Device can operate the private keys of more than 1 wallet. Different instances of the software which is used for wallet management (for example, TxMobile or WLA) can share the same device assigned to the same user account. Different user accounts can't share the same device.&#x20;

**Provider** –  logical entity for presenting source of transactions, authorized to push transactions to connected devices, normally provider is a specific tenant

**Environment** - the set of TEOS platform components serving tenants which are setup within this environment, each environment has its own SLAs, can be on-premise or cloud based. [Read more](../architecture-note/#environments-and-nodes)

## Blockchain terms

**Seed words** – a group of random words generated for the crypto wallet when you first set it up and which will be needed to restore the access to the wallet (to restore private keys)

**Address of the wallet/public address** - a blockchain account where assets are stored. Public address is used to identify the wallet. This is publicly available information that can be shared

**Private key** - a secret key of a wallet, tightly related to the public address. Owning private key = owning the wallet, only with the help of it you can proof your ownership of the wallet and transfer sparks of asset from it

**Transaction** - each record written to a blockchain, there is a list of transaction types depending on the type of data to be written to the blockchain (units transfer, new asset creation, supply exchange rate update, etc). [Read more](transaction.md)
