# Delete a supply

This method allows a user to remove an already created supply, making it no longer available for trading or warp execution on the TEOS Platform.

A supply is an offer created by a TEOS user to trade a specific amount of sparks of one digital asset in exchange for sparks of another asset. Supplies are used by other TEOS users when executing trades or warps, and they exist on the blockchain until they are fully consumed, expired, or deleted.

📘[ Learn more ](../../resources/using-the-teos-api/concepts/supply.md)about supplies.

#### Request Endpoint:

```http
DELETE
/odata/v1.0/Supplies({key})
```

**Sample request:**

```http
DELETE /Supplies('0x261A23135CE91032AA960001A76D397041B5B3A8E5FF000146B799B6000001CC')
```

#### Parameters

| **Name** | **Description**                                        |
| -------- | ------------------------------------------------------ |
| key      | string (path) — The identifier of the supply to delete |

**Media type:** `application/json`

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-08T09:22:45.695Z",
  "OnUpdated": "2025-10-08T09:22:45.695Z",
  "OnSubmitted": "2025-10-08T09:22:45.695Z",
  "OnCommitted": "2025-10-08T09:22:45.695Z",
  "OnConfirmed": "2025-10-08T09:22:45.695Z",
  "OnRevokedByBlockchain": "2025-10-08T09:22:45.695Z",
  "OnRevokedByUser": "2025-10-08T09:22:45.695Z",
  "OnRevokedByTxServer": "2025-10-08T09:22:45.695Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Variables Description:

| **Field**               | **Type** | **Description**                                              |
| ----------------------- | -------- | ------------------------------------------------------------ |
| Id                      | string   | Unique identifier of the supply deletion transaction         |
| State                   | string   | Current state of the transaction                             |
| BlockchainTransactionId | string   | Blockchain transaction ID associated with the deletion       |
| CorrelationId           | string   | Correlation ID for tracking the operation                    |
| Type                    | string   | Type of operation, e.g., “ActivateAsset”                     |
| OnCreated               | datetime | Timestamp when the transaction was created                   |
| OnUpdated               | datetime | Timestamp when the transaction was last updated              |
| OnSubmitted             | datetime | Timestamp when the transaction was submitted                 |
| OnCommitted             | datetime | Timestamp when the transaction was committed                 |
| OnConfirmed             | datetime | Timestamp when the transaction was confirmed                 |
| OnRevokedByBlockchain   | datetime | Timestamp when revoked by blockchain (if applicable)         |
| OnRevokedByUser         | datetime | Timestamp when revoked by user (if applicable)               |
| OnRevokedByTxServer     | datetime | Timestamp when revoked by transaction server (if applicable) |
| SignedBy                | string   | Address that signed the transaction                          |
| CreatedBy               | string   | User ID who created the transaction                          |
| GasPrice                | string   | Gas price used for blockchain execution                      |
| GasUsed                 | string   | Gas used for blockchain execution                            |
| DataAsJson              | string   | Additional transaction data in JSON format                   |
| SigningParametersAsJson | string   | Signing parameters in JSON format                            |

#### Responses

| **Code** | **Description**                                        |
| -------- | ------------------------------------------------------ |
| 200      | OK                                                     |
| 201      | The transaction was successfully created               |
| 400      | The supply data is invalid. Error details are included |
| 401      | Unauthorized                                           |

<br />
