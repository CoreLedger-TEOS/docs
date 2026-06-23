# Destroy asset units

This endpoint allows you to destroy units for an existing asset on the blockchain. The amount of units can be provided either in natural units or in Sparks. The transaction is created for the address of the asset issuer (the Author field in the Asset model). The transaction must be signed by the asset issuer to complete this action.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

#### Preconditions:

* Asset with the provided uniqueAssetId exists.
* The amount of units is a positive integer.
* If the amount is provided in units, the Spark factor is defined in the asset description.
* The signer address has enough units of the asset.
* Amount should be provided as a string. It will be parsed to BigInteger during method execution.

#### Request Endpoint:

```http
POST /odata/v1.0/Assets({key})/DestroyUnits
```

#### Parameters

No query parameters.

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | Path     | UniqueAssetId of the asset | ✅             |

#### Request Body:

`application/json` - The units destruction object.

| **Parameter** | **Type** | **Description**                               | **Mandatory** |
| ------------- | -------- | --------------------------------------------- | ------------- |
| amount        | Body     | The amount of units to destroy, as a string.  | ✅             |
| type          | Body     | The type of amount provided: Sparks or Units. | ✅             |

#### Example Request Body:

```json
{
   "amount": "2000",
   "type": "Sparks"
}
```

#### Response Body:

`application/json`  — Returns the created transaction object.

| **Parameter**           | **Description**                                               |
| ----------------------- | ------------------------------------------------------------- |
| Id                      | The transaction ID.                                           |
| State                   | The transaction state.                                        |
| BlockchainTransactionId | Blockchain transaction hash.                                  |
| CorrelationId           | Correlation identifier.                                       |
| Type                    | Type of transaction.                                          |
| OnCreated               | Timestamp when transaction was created.                       |
| OnUpdated               | Timestamp when transaction was last updated.                  |
| OnSubmitted             | Timestamp when transaction was submitted.                     |
| OnCommitted             | Timestamp when transaction was committed.                     |
| OnConfirmed             | Timestamp when transaction was confirmed.                     |
| OnRevokedByBlockchain   | Timestamp when transaction was revoked by blockchain.         |
| OnRevokedByUser         | Timestamp when transaction was revoked by user.               |
| OnRevokedByTxServer     | Timestamp when transaction was revoked by transaction server. |
| SignedBy                | Address or user who signed the transaction.                   |
| CreatedBy               | ID of the creator.                                            |
| GasPrice                | Gas price used.                                               |
| GasUsed                 | Gas used in the transaction.                                  |
| DataAsJson              | Additional data as JSON.                                      |
| SigningParametersAsJson | Signing parameters as JSON.                                   |

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T12:13:07.107Z",
  "OnUpdated": "2025-10-01T12:13:07.107Z",
  "OnSubmitted": "2025-10-01T12:13:07.107Z",
  "OnCommitted": "2025-10-01T12:13:07.107Z",
  "OnConfirmed": "2025-10-01T12:13:07.107Z",
  "OnRevokedByBlockchain": "2025-10-01T12:13:07.107Z",
  "OnRevokedByUser": "2025-10-01T12:13:07.107Z",
  "OnRevokedByTxServer": "2025-10-01T12:13:07.107Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}

```

#### Response Codes:

| **Code** | **Description**                                           |
| -------- | --------------------------------------------------------- |
| 202      | The unit destruction transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.       |
| 401      | Unauthorized.                                             |

<br>
