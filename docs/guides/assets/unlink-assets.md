# Unlink assets

An asset, often referred to as a **token**, represents a digital artifact on the TEOS platform that can be stored, managed, and verified on the blockchain.

This endpoint unlinks one or more assets from a source asset. The transaction is created for the asset issuer’s address (the Author field in the Asset model) and must be signed by the asset issuer to complete this action.

**Preconditions:**

* Source asset with the provided uniqueAssetId exists.
* Source asset is created in the currently configured ledger.
* The user owns the source asset issuer's address.
* Target assets with the provided uniqueAssetIds exist and are currently linked.

📘 Learn more about assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http
POST /odata/v1.0/Assets({key})/UnlinkAssets
```

#### Parameters:

| **Parameter** | **Type** | **Description**                   | **Mandatory** |
| ------------- | -------- | --------------------------------- | ------------- |
| key           | string   | UniqueAssetId of the source asset | ✅             |

#### Request Body:

`application/json` — Encapsulates the list of target asset IDs to unlink.

| **Parameter**  | **Type** | **Description**                                                             |
| -------------- | -------- | --------------------------------------------------------------------------- |
| targetAssetIds | array    | Array of uniqueAssetIds of the assets to be unlinked from the source asset. |

#### Example Request:

```json
{
  "targetAssetIds": [
    "0xDB3A7821CE02A5E342080001",
    "0x3DE248A51D576D89EBCD0005"
  ]
}
```

#### Response Body:

`application/json` — Returns details of the unlink transaction.

#### Example Response:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T13:35:16.782Z",
  "OnUpdated": "2025-10-01T13:35:16.782Z",
  "OnSubmitted": "2025-10-01T13:35:16.782Z",
  "OnCommitted": "2025-10-01T13:35:16.782Z",
  "OnConfirmed": "2025-10-01T13:35:16.782Z",
  "OnRevokedByBlockchain": "2025-10-01T13:35:16.782Z",
  "OnRevokedByUser": "2025-10-01T13:35:16.782Z",
  "OnRevokedByTxServer": "2025-10-01T13:35:16.782Z",
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
| 202      | The unlink assets transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.    |
| 401      | Unauthorized.                                          |

<br />
