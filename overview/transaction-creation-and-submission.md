---
description: >-
  Flow for signing transactions using user token authentication and flow for
  signing transactions using api key authentication
---

# Transaction creation and submission

Starting from [v0.8](../changelog/v0.8.md) TEOS API consumers can submit signed transactions using TEOS API. Each transaction mentioned in [#transaction-types-available-in-teos-platform](../using-the-teos-api/concepts/transaction.md#transaction-types-available-in-teos-platform "mention")requires the same set of actions described in the diagrams below with the example of an asset creation process.

### Flow with API key

<figure><img src="../.gitbook/assets/MicrosoftTeams-image (13).png" alt=""><figcaption><p>Flow for submitting signed transaction with api key</p></figcaption></figure>

This is the flow for the case when the TEOS API consumer uses an API key for interacting with TEOS API (the TEOS consumer has his own identity services for user authentication).

Prerequisite: TEOS API consumer has access (direct or indirect) to private keys of the public address for transaction signing

**Step 1. Post a transaction** (for example, creating an asset) with the specific public address which can sign the transaction afterward _POST /odata/v0.8/Assets_\
TEOS consumer interacts with TEOS API to create an asset with the API key and provided asset data. TEOS API prepares a blockchain transaction and returns a transaction object with signing parameters. Signing parameters can be retrieved again using received transaction id _GET /odata/v0.8/Transactions({key})/GetSigningParameters_

**Step 2. Sign the transaction and submit** it to TEOS API _POST /odata/v0.8/Transactions/{key}/Submit_\
TEOS consumer signs the transaction with private keys of the wallet address used for the transaction creation. The signed transaction must be submitted to TEOS API with the API key

### Flow with a user token

<figure><img src="../.gitbook/assets/MicrosoftTeams-image (15).png" alt=""><figcaption><p>Flow for submitting signed transaction with user token</p></figcaption></figure>

This is the flow for the case when TEOS Identity Services are used for the authentication and thus TEOS API is called with a user token.

**Step 1. TEOS Identity Services authentication**\
TEOS API consumer interacts with AuthServer to get user token

**Step 2. Register user device at TxServer** with user token and device id\
TEOS API consumer interacts with TxServer to add the device to the list of authorized devices to make sure that all transactions created by the user can be pushed to this device and signed here. TxServer returns a device token which must be used in further steps

**Step 3. Post transaction** (for example, creating asset) with the public address of the selected wallet _POST /odata/v0.8/Assets_\
TEOS API consumer interacts with TEOS API to create an asset with the device token and provided asset data by the user. TEOS API prepares a blockchain transaction and returns the transaction object with signing parameters. Signing parameters can be retrieved again using received transaction id _GET /odata/v0.8/Transactions({key})/GetSigningParameters_

**Step 4. Sign the transaction and submit** it to TEOS API _POST /odata/v0.8/Transactions/{key}/Submit_\
TEOS API consumer lets the user sign the transaction with private keys of the wallet address used for creating the transaction. The signed transaction must be submitted to TEOS API with the device token
