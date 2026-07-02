# Get current user transactions

Retrieves transactions belonging to the current user. This endpoint supports default pagination, with a maximum of 50 items per page. API key authentication is not supported for this endpoint.

📘 [Learn more](../../resources/using-the-teos-api/concepts/transaction.md) about transactions.

#### Request Endpoint:

```http
GET /odata/v1.0/Transactions/My
```

#### Parameters

This endpoint does not require any path or query parameters. Supported OData query options can be used for filtering, ordering, or selecting data:

* Filter
* Expand
* Select
* OrderBy
* Top
* Skip
* Count
* Format
* SkipToken
* DeltaToken
* Apply
* Compute
* Search

#### Request Body

No request body is required.

#### Response Body Example

**Media type**: `application/json`

```json
[
  {
    "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
    "State": "3",
    "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
    "Type": "ActivateAsset",
    "OnCreated": "2025-10-10T10:22:32.504Z",
    "OnUpdated": "2025-10-10T10:22:32.505Z",
    "OnSubmitted": "2025-10-10T10:22:32.505Z",
    "OnCommitted": "2025-10-10T10:22:32.505Z",
    "OnConfirmed": "2025-10-10T10:22:32.505Z",
    "OnRevokedByBlockchain": "2025-10-10T10:22:32.505Z",
    "OnRevokedByUser": "2025-10-10T10:22:32.505Z",
    "OnRevokedByTxServer": "2025-10-10T10:22:32.505Z",
    "SignedBy": "string",
    "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "GasPrice": "string",
    "GasUsed": "string",
    "DataAsJson": "string",
    "SigningParametersAsJson": "string"
  }
]
```

#### Response Body Parameters

| **Parameter**           | **Type**          | **Description**                                                                      |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------ |
| Id                      | string            | Unique identifier of the transaction.                                                |
| State                   | string            | Current state of the transaction (e.g., Received, Submitted, Committed, Confirmed).  |
| BlockchainTransactionId | string            | Blockchain-specific identifier of the transaction.                                   |
| Type                    | string            | Type of transaction (e.g., ActivateAsset, Create Supply, etc.).                      |
| OnCreated               | string (datetime) | Timestamp when the transaction was created in TEOS Platform.                         |
| OnUpdated               | string (datetime) | Timestamp when the transaction was last updated.                                     |
| OnSubmitted             | string (datetime) | Timestamp when the transaction was submitted to TEOS Platform after signing.         |
| OnCommitted             | string (datetime) | Timestamp when the transaction passed all validations and was written to blockchain. |
| OnConfirmed             | string (datetime) | Timestamp when the transaction was confirmed on the blockchain.                      |
| OnRevokedByBlockchain   | string (datetime) | Timestamp if the transaction was rejected by the blockchain.                         |
| OnRevokedByUser         | string (datetime) | Timestamp if the transaction was revoked by the user before signing.                 |
| OnRevokedByTxServer     | string (datetime) | Timestamp if the transaction was rejected by TEOS Platform transaction processor.    |
| SignedBy                | string            | Public address of the wallet that signed the transaction.                            |
| CreatedBy               | string            | Identifier of the user who created the transaction in TEOS Platform.                 |
| GasPrice                | string            | Gas price used for the transaction in blockchain.                                    |
| GasUsed                 | string            | Gas used for the transaction.                                                        |
| DataAsJson              | string            | Raw transaction data in JSON format.                                                 |
| SigningParametersAsJson | string            | Signing parameters for the transaction in JSON format.                               |

#### Responses

| **Code** | **Description**                                                          |
| -------- | ------------------------------------------------------------------------ |
| 200      | Transactions successfully retrieved.                                     |
| 400      | Bad Request. Invalid filter or request parameters.                       |
| 401      | Unauthorized. The current user is not authorized to access transactions. |

<br />
