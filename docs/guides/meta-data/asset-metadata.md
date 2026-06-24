# Asset Metadata

This API allows you to get full **metadata** of a blockchain asset, including both **on-chain** information (data stored on the blockchain) and **off-chain** information (documents stored in DocumentDB). Metadata provides all the details needed to verify the authenticity and integrity of the asset.

The user can request metadata by providing the **unique asset ID**.

📘 [Learn more](./index.md) about meta data.

#### Endpoint

```
GET /assets/{uniqueAssetId}/metadata
```

#### Parameters

| **Parameter** | **Type**    | **Description**                | **Mandatory** |
| ------------- | ----------- | ------------------------------ | ------------- |
| uniqueAssetId | string(Hex) | Unique identifier of the asset | ✅             |

#### Response Structure

The method returns the following fields:

**General Asset Information**

| Parameter               | Type            | Description                                              |
| ----------------------- | --------------- | -------------------------------------------------------- |
| AssetName               | string          | Name of the asset                                        |
| BlockchainName          | string          | Name of the blockchain network where the asset is stored |
| IssuerAddress           | string (Hex)    | Address of the asset issuer                              |
| ContractAddress         | string (Hex)    | Smart contract address managing the asset                |
| UniqueAssetId           | string (Hex)    | Unique identifier of the asset                           |
| CreationBlockReference  | string          | Blockchain block number where the asset was registered   |
| BlockchainTransactionId | string (Hex)    | Hash of the registration transaction                     |
| OriginalDocumentHash    | string (Hex)    | Cryptographic hash of the original document              |
| OriginalDocumentData    | string (Base64) | Base64-encoded original document data                    |
| TransactionId           | string (GUID)   | TEOS transaction ID                                      |
| Amendments              | array           | List of amendments (can be empty)                        |

#### **Amendments (Changes)**

Each amendment has the following structure:

| Parameter               | Type            | Description                                              |
| ----------------------- | --------------- | -------------------------------------------------------- |
| AmendmentId             | string (Hex)    | Unique identifier of the amendment                       |
| BlockReference          | string          | Blockchain block number where the amendment was recorded |
| BlockchainTransactionId | string (Hex)    | Hash of the amendment transaction                        |
| TransactionId           | string (GUID)   | TEOS transaction ID                                      |
| Hash                    | string (Hex)    | Cryptographic hash of the amendment document             |
| Data                    | string (Base64) | Base64-encoded amendment document                        |

#### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |
