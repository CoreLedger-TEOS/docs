# Set a blacklist addresses

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint updates the blacklist addresses of a specific controller. It can add new addresses to the blacklist or update the reason for existing addresses. The operation modifies the blockchain-level controller and ensures that the restrictions are applied according to the updated blacklist.

📘 [Learn more](../../resources/using-the-teos-api/concepts/controllers.md) about controllers.

#### Request Endpoint:

```http
POST /odata/v1.0/Controllers({key})/SetBlacklistAddresses
```

Supported OData query options: None

#### Parameters

| **Name** | **Type**      | **Description**                          | **Mandatory** |
| -------- | ------------- | ---------------------------------------- | ------------- |
| key      | string (UUID) | The unique identifier of the controller. | ✅             |

#### Request Body:

`application/json` — Object containing the blacklist addresses to set or update.

| **Parameter**      | **Type**         | **Description**                                                                                                           | **Mandatory** |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- |
| blacklistAddresses | array of objects | List of blockchain addresses to set or update in the controller's blacklist. Each object must include Address and Reason. | ✅             |
|   Address          | string           | The blockchain address to add or update in the blacklist.                                                                 | ✅             |
|   Reason           | integer          | Reason code associated with the blacklist entry.                                                                          | ✅             |

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  "Address" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "blacklistAddresses": [
    {
      "Address": "0x128363b39f249b615d88b9dd2115b134a3b042be",
      "Reason": 12
    },
    {
      "Address": "0x76f8b4f93cbc0468a35b258dc21331c409cc76a3",
      "Reason": 42
    }
  ]
}
```

#### Response Body:

`application/json` — Returns the transaction object created for setting or updating the blacklist addresses.

| Parameter               | Type          | Description                                                            |
| ----------------------- | ------------- | ---------------------------------------------------------------------- |
| Id                      | string (UUID) | Transaction identifier.                                                |
| State                   | string        | Current transaction state (e.g., Received, Submitted, Committed).      |
| BlockchainTransactionId | string        | Blockchain transaction hash.                                           |
| Type                    | string        | Transaction type (e.g., SetBlacklistAddresses).                        |
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
  "Type": "SetBlacklistAddresses",
  "OnCreated": "2025-10-10T08:40:44.394Z",
  "OnUpdated": "2025-10-10T08:40:44.394Z",
  "OnSubmitted": "2025-10-10T08:40:44.394Z",
  "OnCommitted": "2025-10-10T08:40:44.394Z",
  "OnConfirmed": "2025-10-10T08:40:44.394Z",
  "OnRevokedByBlockchain": "2025-10-10T08:40:44.394Z",
  "OnRevokedByUser": "2025-10-10T08:40:44.394Z",
  "OnRevokedByTxServer": "2025-10-10T08:40:44.394Z",
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

<br />
