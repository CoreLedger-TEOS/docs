# Create units for an asset

This endpoint allows you to create units for an existing asset on the blockchain. The amount of units can be provided either in natural units or in Sparks. The transaction is created for the address of the asset issuer (the Author field in the Asset model). The transaction must be signed by the asset issuer to complete this action.

📘 [Learn more](../../resources/using-the-teos-api/concepts/spark.md) about natural units of measure and Sparks.

#### Preconditions:

* The asset with the provided uniqueAssetId must exist.
* The amount of units must be a positive integer.
* Amount should be provided as a string; it will be parsed to BigInteger during execution.

#### Request Endpoint:

```http
POST /odata/v1.0/Assets({key})/CreateUnits
```

#### Request Body:

`application/json` — The object specifying the units to create.

| **Parameter** | **Type** | **Description**                       | **Mandatory** |
| ------------- | -------- | ------------------------------------- | ------------- |
| amount        | Body     | Amount of units to create (as string) | ✅             |
| type          | Body     | Type of amount: "Sparks" or "Units"   | ✅             |

#### Example Request Body:

```json
{
  "amount": "2000",
  "type": "Sparks"
}
```

#### Response Body:

`application/json`  — Returns the transaction object for the unit creation request.

| **Parameter**           | **Description**                             |
| ----------------------- | ------------------------------------------- |
| Id                      | The transaction ID.                         |
| State                   | The current state of the transaction.       |
| BlockchainTransactionId | The blockchain transaction hash.            |
| CorrelationId           | Correlation ID for tracking.                |
| Type                    | Transaction type (e.g., "ActivateAsset").   |
| OnCreated               | Timestamp when the transaction was created. |
| OnUpdated               | Timestamp of last update.                   |
| OnSubmitted             | Timestamp when transaction was submitted.   |
| OnCommitted             | Timestamp when transaction was committed.   |
| OnConfirmed             | Timestamp when transaction was confirmed.   |
| OnRevokedByBlockchain   | Timestamp if revoked by blockchain.         |
| OnRevokedByUser         | Timestamp if revoked by user.               |
| OnRevokedByTxServer     | Timestamp if revoked by transaction server. |
| SignedBy                | Address of signer.                          |
| CreatedBy               | ID of the creator.                          |
| GasPrice                | Gas price for transaction.                  |
| GasUsed                 | Gas used for transaction.                   |
| DataAsJson              | Additional data in JSON format.             |
| SigningParametersAsJson | Signing parameters in JSON format.          |

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T12:09:45.821Z",
  "OnUpdated": "2025-10-01T12:09:45.821Z",
  "OnSubmitted": "2025-10-01T12:09:45.821Z",
  "OnCommitted": "2025-10-01T12:09:45.821Z",
  "OnConfirmed": "2025-10-01T12:09:45.821Z",
  "OnRevokedByBlockchain": "2025-10-01T12:09:45.821Z",
  "OnRevokedByUser": "2025-10-01T12:09:45.821Z",
  "OnRevokedByTxServer": "2025-10-01T12:09:45.821Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Codes:

| **Code** | **Description**                                        |
| -------- | ------------------------------------------------------ |
| 202      | The unit creation transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.    |
| 401      | Unauthorized                                           |

<br />
