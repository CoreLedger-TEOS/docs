---
description: >-
  Flow for signing transactions using user token authentication, and flow for
  signing transactions using API key authentication
---

# Transaction Creation and Submission

Starting from [v0.8](../changelog/v0.8.md), TEOS API consumers can submit signed transactions using the TEOS API. Each transaction mentioned in [#transaction-types-available-in-teos-platform](../using-the-teos-api/concepts/transaction.md#transaction-types-available-in-teos-platform "mention")requires the same set of actions described in the diagrams below, using the asset creation process as an example.

### Flow with API key

<figure><img src="../.gitbook/assets/MicrosoftTeams-image (13).png" alt=""><figcaption><p>Flow for submitting signed transaction with api key</p></figcaption></figure>

This is the flow for when the TEOS API consumer uses an API key to interact with the TEOS API. [Read more](../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-api-key)

**Prerequisite**: The TEOS API user has access (direct or indirect) to the private keys of the public address for transaction signing.

**Step 1. Post a transaction** (for example creating an asset) with the specific public address which can sign the transaction afterward _POST /odata/v0.8/Assets_\
The TEOS API consumer interacts with the TEOS API to create an asset with the API key and provided asset data. The TEOS API prepares a blockchain transaction and returns a transaction object with signing parameters. Signing parameters can be retrieved again using received transaction id _GET /odata/v0.8/Transactions({key})/GetSigningParameters_

**Step 2. Sign the transaction and submit** it to _POST /odata/v0.8/Transactions/{key}/Submit_\
The TEOS API consumer signs the transaction with the private keys of the wallet address used for the transaction creation. The signed transaction must be submitted to the TEOS API with the API key

### Flow with a user token

<figure><img src="../.gitbook/assets/MicrosoftTeams-image (15).png" alt=""><figcaption><p>Flow for submitting signed transaction with user token</p></figcaption></figure>

This is the flow for when the TEOS authentication service is used for the user authentication and thus the TEOS API is called with a user token. [Read more](../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token)

**Step 1. TEOS authentication**\
The TEOS API consumer interacts with AuthServer (TEOS Platform component representing TEOS Authentication service) to get a user token.

**Step 2. Register user device at TxServer** with user token and device id\
The TEOS API consumer interacts with TxServer to add the device to the list of authorized devices to make sure that all transactions created by the user can be pushed to this device and signed here. The TxServer returns a device token which must be used in further steps.

**Step 3. Post transaction** (for example, creating asset) with the public address of the selected wallet _POST /odata/v0.8/Assets_\
The TEOS API consumer interacts with the TEOS API to create an asset with the device token and the provided asset data by the user. The TEOS API prepares a blockchain transaction and returns the transaction object with signing parameters. Signing parameters can be retrieved again using received transaction id _GET /odata/v0.8/Transactions({key})/GetSigningParameters_

**Step 4. Sign the transaction and submit** it to TEOS API _POST /odata/v0.8/Transactions/{key}/Submit_\
The TEOS API consumer lets the user sign the transaction with the private keys of the wallet address used for creating the transaction. The signed transaction must be submitted to the TEOS API with the device token.
