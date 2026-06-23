# Retrieve transactions

Retrieves blockchain transactions. Each transaction represents an action that writes data to the blockchain (such as asset activation, controller operations, or ether transfers). This endpoint supports pagination with a default page size of 50 items.

You can filter transactions by signer address, transaction state, or other properties using standard OData query options.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/transaction.md)about transactions.

#### Request Endpoint:

```http
GET /odata/v1.0/Transactions
```

#### Parameters:

No parameters in path or query by default, but OData query options are supported.

**Supported OData query options:**\
Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search

**Sample Requests:**

```http
GET /Transactions?$filter=(SignedBy eq '0xa94f93dbfce5bb64603d245d4519e625c002fee5' or SignedBy eq '0xeb9c947cbae36895b513a32755c18ab4eb6cf762') and State eq 'Committed'
```

```http
GET /Transactions?$filter=SignedBy in('0xa94f94dbfcd5bb64603d245d4519e625c002fee5', '0xed9c957cbae36895b513a32755c18ab4eb6cf762')

```

#### Request Body

No request body required.

#### Response Body Example

Media type: `application/json`

```json
[
  {
    "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
    "State": "3",
    "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
    "Type": "ActivateAsset",
    "OnCreated": "2025-10-10T09:57:38.491Z",
    "OnUpdated": "2025-10-10T09:57:38.491Z",
    "OnSubmitted": "2025-10-10T09:57:38.491Z",
    "OnCommitted": "2025-10-10T09:57:38.491Z",
    "OnConfirmed": "2025-10-10T09:57:38.491Z",
    "OnRevokedByBlockchain": "2025-10-10T09:57:38.491Z",
    "OnRevokedByUser": "2025-10-10T09:57:38.491Z",
    "OnRevokedByTxServer": "2025-10-10T09:57:38.491Z",
    "SignedBy": "string",
    "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "GasPrice": "string",
    "GasUsed": "string",
    "DataAsJson": "string",
    "SigningParametersAsJson": "string"
  }
]
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

| **Code** | **Description**                     |
| -------- | ----------------------------------- |
| 200      | Transactions successfully retrieved |
| 400      | Bad Request                         |
| 401      | Unauthorized                        |

<br />
