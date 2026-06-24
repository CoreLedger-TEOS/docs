# Create an asset

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

This endpoint creates a new asset by providing the required general properties, such as:

* **Author** – the creator of the asset
  * In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Author" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, the "Author" has 63 characters.
* **Name** – the asset name
* **Description** – a brief description of the asset
* **LanguageCode** – the language of the asset
  * An asset can be documented in multiple languages, and Asset.LanguageCode is used as the default language for the asset.\
    The supplied values must match the `Code` property of existing records returned by:
    * `/odata/vx.x/languages`
* **JurisdictionCode** – the legal jurisdiction related to the asset
  * The supplied values must match the `Code` property of existing records returned by:
    * `/odata/vx.x/countries`

Additionally, custom properties can be defined using CustomDefinitionItems to capture asset-specific information.

📘 Learn more about assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http
POST /odata/v1.0/Assets
```

#### Parameters

No query parameters.

#### Request Body:

&#x20;`application/json`  — The asset object to create.

| **Parameter**         | **Type** | **Description**                            | **Mandatory** |
| --------------------- | -------- | ------------------------------------------ | ------------- |
| Author                | Body     | The address of the asset creator.          | ✅             |
| Name                  | Body     | The name of the asset.                     | ✅             |
| Description           | Body     | The description of the asset.              | ✅             |
| LanguageCode          | Body     | Language code (ISO 2) of the asset.        | ✅             |
| JurisdictionCode      | Body     | Jurisdiction country code (ISO 2).         | ✅             |
| CustomDefinitionItems | Body     | A list of custom properties for the asset. | ❌             |

#### Example Request Body

```json
{
  "Author": "0xec0744c44d73ccca9c1266b44bef503802c57cac",
  "Name": "NotarDoc",
  "Description": "This is a blockchain record",
  "LanguageCode": "en",
  "JurisdictionCode": "EARTH",
  "CustomDefinitionItems": [
    {
      "Key": "data",
      "Name": "Data",
      "Type": "TEXT",
      "Value": "My Private documentation",
      "SectionsPath": "[documentation]",
      "SectionsPathNames": "[Documentation]"
    }
  ]
```

#### Response Body:

`application/json`  — Returns the asset creation transaction object.

| **Parameter**           | **Description**                                             |
| ----------------------- | ----------------------------------------------------------- |
| Id                      | The transaction ID.                                         |
| State                   | Current state of the transaction.                           |
| BlockchainTransactionId | Blockchain transaction identifier.                          |
| CorrelationId           | Correlation ID of the transaction.                          |
| Type                    | Transaction type (e.g., ActivateAsset).                     |
| OnCreated               | Timestamp when the transaction was created.                 |
| OnUpdated               | Timestamp when the transaction was updated.                 |
| OnSubmitted             | Timestamp when the transaction was submitted to blockchain. |
| OnCommitted             | Timestamp when the transaction was committed.               |
| OnConfirmed             | Timestamp when the transaction was confirmed.               |
| OnRevokedByBlockchain   | Timestamp if revoked by blockchain.                         |
| OnRevokedByUser         | Timestamp if revoked by user.                               |
| OnRevokedByTxServer     | Timestamp if revoked by transaction server.                 |
| SignedBy                | Account/address that signed the transaction.                |
| CreatedBy               | ID of the creator.                                          |
| GasPrice                | Gas price used.                                             |
| GasUsed                 | Amount of gas consumed.                                     |
| DataAsJson              | Transaction data in JSON format.                            |
| SigningParametersAsJson | Signing parameters in JSON format.                          |

#### Example Response Body

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-01T11:48:59.897Z",
  "OnUpdated": "2025-10-01T11:48:59.897Z",
  "OnSubmitted": "2025-10-01T11:48:59.897Z",
  "OnCommitted": "2025-10-01T11:48:59.897Z",
  "OnConfirmed": "2025-10-01T11:48:59.897Z",
  "OnRevokedByBlockchain": "2025-10-01T11:48:59.897Z",
  "OnRevokedByUser": "2025-10-01T11:48:59.897Z",
  "OnRevokedByTxServer": "2025-10-01T11:48:59.897Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Codes

| **Code** | **Description**                                         |
| -------- | ------------------------------------------------------- |
| 200      | The asset creation transaction was successfully placed. |
| 400      | The asset is invalid. Error details are included.       |
| 401      | Unauthorized.                                           |

\
<br />
