# Retrieve a transaction by Id

Retrieves a specific blockchain transaction using its unique identifier. A transaction represents an action that writes data to the blockchain, such as asset activation, controller updates, or ether transfers.

You can use OData Select query option to retrieve specific fields of the transaction.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/transaction.md)about transactions.

#### Request Endpoint:

```http
GET /odata/v1.0/Transactions({key})
```

#### Parameters

| **Parameter** | **Type**      | **Description**                                    | **Mandatory** |
| ------------- | ------------- | -------------------------------------------------- | ------------- |
| key           | string (UUID) | The unique identifier of the requested transaction | ✅             |

**Example:**

```json
B5BB3E99-A8F8-4896-8D41-07920DFCDAEC
```

#### Request Body

No request body required.

#### Response Body Example

**Media type:** `application/json`

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-10T10:02:57.810Z",
  "OnUpdated": "2025-10-10T10:02:57.810Z",
  "OnSubmitted": "2025-10-10T10:02:57.810Z",
  "OnCommitted": "2025-10-10T10:02:57.810Z",
  "OnConfirmed": "2025-10-10T10:02:57.810Z",
  "OnRevokedByBlockchain": "2025-10-10T10:02:57.810Z",
  "OnRevokedByUser": "2025-10-10T10:02:57.810Z",
  "OnRevokedByTxServer": "2025-10-10T10:02:57.810Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Body Parameters:

| **Parameter**           | **Type**      | **Description**                                                             |
| ----------------------- | ------------- | --------------------------------------------------------------------------- |
| Id                      | string (UUID) | Unique identifier of the transaction                                        |
| State                   | string        | Current transaction state (Received, Submitted, Committed, Confirmed, etc.) |
| BlockchainTransactionId | string        | Identifier of the transaction on the blockchain                             |
| Type                    | string        | Type of the transaction (see Transaction types in TEOS API)                 |
| OnCreated               | datetime      | Timestamp when the transaction was created                                  |
| OnUpdated               | datetime      | Timestamp when the transaction was last updated                             |
| OnSubmitted             | datetime      | Timestamp when the transaction was submitted for signing                    |
| OnCommitted             | datetime      | Timestamp when the transaction was successfully committed to the blockchain |
| OnConfirmed             | datetime      | Timestamp when the transaction was confirmed by the blockchain              |
| OnRevokedByBlockchain   | datetime      | Timestamp if transaction was revoked by blockchain                          |
| OnRevokedByUser         | datetime      | Timestamp if transaction was revoked by user                                |
| OnRevokedByTxServer     | datetime      | Timestamp if transaction was revoked by TxServer                            |
| SignedBy                | string        | Public address of the signer of the transaction                             |
| CreatedBy               | string        | Identifier of the user who created the transaction                          |
| GasPrice                | string        | Gas price used for the transaction                                          |
| GasUsed                 | string        | Gas used for the transaction                                                |
| DataAsJson              | string        | Transaction data serialized as JSON                                         |
| SigningParametersAsJson | string        | Parameters used for signing the transaction serialized as JSON              |

#### Responses

| **Code** | **Description**                                |
| -------- | ---------------------------------------------- |
| 200      | The transaction was successfully retrieved     |
| 401      | Unauthorized                                   |
| 404      | The transaction with specified Id is not found |

<br>
