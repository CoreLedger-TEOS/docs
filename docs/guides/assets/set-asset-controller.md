# Set asset controller

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

Controller is an entity that manages access rights to assets, allowing you to restrict who can buy, sell, or trade them. Controllers can only be created by the asset issuer.

This endpoint initiates a transaction to set a new controller for the specified asset. The source asset must exist, and the controller address provided must be valid. The transaction must be signed by the asset issuer to complete the action.

📘 Learn more about assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http

POST /odata/v1.0/Assets({key})/SetController
```

#### Parameters

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | string   | UniqueAssetId of the asset | ✅             |

#### Request Body:

`application/json`

| **Parameter**     | **Type** | **Description**                              | **Mandatory** |
| ----------------- | -------- | -------------------------------------------- | ------------- |
| controllerAddress | string   | The blockchain address of the new controller | ✅             |

#### Example Request:

```json
POST /odata/v1.0/Assets('0x5f1e6522bd3b65be880007')/SetController
{
    "controllerAddress":"0xec8d4700be44cb99f0a273af38b403f4759cbc4d"
}
```

#### Response Body:

`application/json` — Transaction details

#### Example Response:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T12:45:27.588Z",
  "OnUpdated": "2025-10-01T12:45:27.588Z",
  "OnSubmitted": "2025-10-01T12:45:27.588Z",
  "OnCommitted": "2025-10-01T12:45:27.588Z",
  "OnConfirmed": "2025-10-01T12:45:27.588Z",
  "OnRevokedByBlockchain": "2025-10-01T12:45:27.588Z",
  "OnRevokedByUser": "2025-10-01T12:45:27.588Z",
  "OnRevokedByTxServer": "2025-10-01T12:45:27.588Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Codes:

| **Code** | **Description**                                         |
| -------- | ------------------------------------------------------- |
| 200      | OK. Controller assignment executed.                     |
| 202      | The set controller transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.     |
| 401      | Unauthorized.                                           |
| 404      | The asset or controller address was not found.          |

\
\
<br />
