# Transfer units of an asset

An asset, often referred to as a **token**, represents a digital artifact on the TEOS platform that can be stored, managed, and verified on the blockchain.

This endpoint transfers units of an asset from one address to another. The amount can be specified in either natural units or Sparks. The transaction is created for the asset issuer’s address (the Author field in the Asset model) and must be signed by the asset issuer to be completed.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

#### Request Endpoint:

```http
POST /odata/v1.0/Assets({key})/TransferUnits
```

#### Parameters

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | string   | UniqueAssetId of the asset | ✅             |

#### Request Body:

`application/json` — Encapsulates parameters for the transfer.

| **Parameter** | **Type** | **Description**                                             |
| ------------- | -------- | ----------------------------------------------------------- |
| amount        | string   | Amount of units to transfer. Will be parsed to BigInteger.  |
| type          | string   | "Sparks" or "Units". Specifies the unit type of the amount. |
| senderAddress | string   | Address from which the units are sent.                      |
| targetAddress | string   | Address to which the units are transferred.                 |

#### Example Request:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "senderAddress" and "targetAddress" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
    "amount": "100",
    "type": "Sparks",
    "senderAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
    "targetAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8836"
}
```

#### Response Body:

`application/json` — Returns transaction details of the transfer.

#### Example Response:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T13:33:14.204Z",
  "OnUpdated": "2025-10-01T13:33:14.204Z",
  "OnSubmitted": "2025-10-01T13:33:14.204Z",
  "OnCommitted": "2025-10-01T13:33:14.204Z",
  "OnConfirmed": "2025-10-01T13:33:14.204Z",
  "OnRevokedByBlockchain": "2025-10-01T13:33:14.204Z",
  "OnRevokedByUser": "2025-10-01T13:33:14.204Z",
  "OnRevokedByTxServer": "2025-10-01T13:33:14.204Z",
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
| 202      | The unit transfer transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.    |
| 401      | Unauthorized.                                          |

<br />
