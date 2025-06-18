---
description: Blockchain providers, cloud providers, authentication types typical cases
---

# Tenant setup options

There is a set of basic configurations which should be defined when new tenant is setup. Necessary tenant setup configuration is defined by TEOS API consumer requirements. We collected typical setup configurations which were used so far and described it below. If you are looking for some other options, they can be discussed upon a request.

<figure><img src="../../.gitbook/assets/Data layers-Page-2.drawio.svg" alt=""><figcaption></figcaption></figure>

## Blockchain provider

Blockchain options:

* Ethereum Mainnet - you get access to global public Ethereum network using PoS, [read more](https://ethereum.org/en/enterprise/#private-vs-public)
* SparkNet - private Ethereum based network, used for pilot and productive solutions mainly, [read more](https://sparknet.online/)
* DevilNet - private Ethereum based network run by CoreLedger, used for development purposes mainly
* Your option can be discussed upon a request

|                             | Ethereum Mainnet                                                                                                                                                                                                       | SparkNet                                                                                                                               | DevilNet                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Transaction processing time | <p>is more than for other options, estimated in minutes (strongly depends on amount of available nodes and amount of transactions to be processed)<br><a href="https://etherscan.io/">Check current statistics</a></p> | <p>comparatively low, estimated in seconds<br><a href="https://netstats-sparknet.coreledger.net/">Check current statistics</a><br></p> | comparatively low, estimated in seconds, but more than in SparkNet                                              |
| Transaction cost            | <p>varies, but definitely higher than for other options<br><a href="https://ethereum.org/en/developers/docs/gas/">Read more</a> and<br><a href="https://etherscan.io/">Check current statistics</a></p>                | stable and 0 (gas required for signing transactions is distributed automatically to newly registered addresses)                        | stable and 0 (gas required for signing transactions is distributed automatically to newly registered addresses) |

## Authentication type

The authentication process for TEOS API consumers is described in [authentication.md](../authentication.md "mention"). The description below can help you decide on which option to go.

One tenant can have several TEOS API consumers, they can have different authentication types.

#### Using TEOS API with API key

Main characteristics of TEOS API consumer for such case:

* TEOS API consumer is a self-sufficient system with server-side
* The server side is designed to perform communication with TEOS API
* TEOS API consumer has its own authentication system for its users

With such an option all operations in TEOS API are performed on behalf of the TEOS API consumer representative registered in the TEOS platform, we call him or her "administrator". An administrator (or several if needed) is registered in the TEOS Platform to configure TEOS API processes and maintain them. API key is generated for the admin user. End users of the TEOS API consumer are authenticated by the TEOS API consumer.

<figure><img src="../../.gitbook/assets/Data layers-Option with api key.drawio.svg" alt=""><figcaption></figcaption></figure>

#### Using TEOS API with the user access token

Main characteristics of TEOS API consumer for such case:

* TEOS API consumer is a client application without a backend on the server side and/or without its own authentication system
* TEOS API consumer is a WLA-based application

With such an option, the TEOS Authentication service is used to authenticate end users. User account data is stored in TEOS authentication service. The integration with TEOS authentication service is a prerequisite for using TEOS API flows.

<figure><img src="../../.gitbook/assets/Data layers-Copy of Page-2.drawio.svg" alt=""><figcaption></figcaption></figure>
