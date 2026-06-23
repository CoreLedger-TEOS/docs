# Remove whitelist addresses

&#x20;Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them. Removes one or more addresses from the whitelist of a specific controller.

This endpoint removes one or more addresses from the whitelist of a specific controller.

The operation updates the blockchain-level controller by removing the specified addresses from its whitelist. It generates a blockchain transaction, and the removal is applied only after the transaction is processed and confirmed.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
POST /odata/v1.0/Controllers({key})/RemoveWhitelistAddresses
```

Supported OData query options: None

#### Parameters

| **Name** | **Type**      | **Description**                          | **Mandatory** |
| -------- | ------------- | ---------------------------------------- | ------------- |
| key      | string (UUID) | The unique identifier of the controller. | ✅             |

#### Request Body:

`application/json`  — Object containing the addresses to remove from the whitelist.

| **Parameter** | **Type**         | **Description**                                                         | **Mandatory** |
| ------------- | ---------------- | ----------------------------------------------------------------------- | ------------- |
| addresses     | array of strings | List of blockchain addresses to remove from the controller’s whitelist. | ✅             |

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "addresses": [
    "0x128363b39f249b615d88b9dd2115b134a3b042be",
    "0x76f8b4f93cbc0468a35b258dc21331c409cc76a3"
  ]
}
```

#### Response Body:

`application/json`  — Returns the created transaction object for removing whitelist addresses.

| **Parameter**           | **Type**      | **Description**                                                        |
| ----------------------- | ------------- | ---------------------------------------------------------------------- |
| Id                      | string (UUID) | Transaction identifier.                                                |
| State                   | string        | Current transaction state (e.g., Received, Submitted, Committed).      |
| BlockchainTransactionId | string        | Blockchain transaction hash.                                           |
| Type                    | string        | Transaction type (e.g., RemoveWhitelistAddresses).                     |
| OnCreated               | datetime      | Timestamp when the transaction was created.                            |
| OnUpdated               | datetime      | Timestamp of the last update.                                          |
| OnSubmitted             | datetime      | Timestamp when the transaction was submitted for signing.              |
| OnCommitted             | datetime      | Timestamp when the transaction was successfully written to blockchain. |
| OnConfirmed             | datetime      | Timestamp when the transaction was confirmed on blockchain.            |
| OnRevokedByBlockchain   | datetime      | Timestamp if revoked by blockchain.                                    |
| OnRevokedByUser         | datetime      | Timestamp if revoked by user.                                          |
| OnRevokedByTxServer     | datetime      | Timestamp if revoked by transaction server.                            |
| SignedBy                | string        | Address of the signer.                                                 |
| CreatedBy               | string (UUID) | User who created the transaction.                                      |
| GasPrice                | string        | Gas price used for blockchain transaction.                             |
| GasUsed                 | string        | Gas used for blockchain transaction.                                   |
| DataAsJson              | string        | Transaction data in JSON format.                                       |
| SigningParametersAsJson | string        | Signing parameters in JSON format.                                     |

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "RemoveWhitelistAddresses",
  "OnCreated": "2025-10-10T08:10:32.734Z",
  "OnUpdated": "2025-10-10T08:10:32.734Z",
  "OnSubmitted": "2025-10-10T08:10:32.734Z",
  "OnCommitted": "2025-10-10T08:10:32.734Z",
  "OnConfirmed": "2025-10-10T08:10:32.734Z",
  "OnRevokedByBlockchain": "2025-10-10T08:10:32.734Z",
  "OnRevokedByUser": "2025-10-10T08:10:32.734Z",
  "OnRevokedByTxServer": "2025-10-10T08:10:32.734Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Codes:

| **Code** | **Description**                                                      |
| -------- | -------------------------------------------------------------------- |
| 202      | Accepted. Transaction has been created and submitted for processing. |
| 400      | Bad Request. The provided data is invalid.                           |
| 401      | Unauthorized.                                                        |

<br>
