# Retrieve asset DocumentDb record

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

This endpoint retrieves the document stored in the DocumentDB for a given asset, referenced by its uniqueAssetId. The document contains the structured JSON representing the asset, including its general and custom properties.

📘 [Learn more](../../resources/using-the-teos-api/concepts/asset.md) about assets.

#### Request Endpoint:

```http
GET /odata/v1.0/Assets({key})/DocumentDbRecord
```

#### Parameters

No query parameters.

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | Path     | UniqueAssetId of the asset | ✅             |

**Example:**

```http
GET /Assets('0x5f1e6522bd3b65be880007')/DocumentDbRecord
```

#### Response Body:

`application/json`— Returns the asset document as a JSON string.

Example Response Body:

```http
"string"
```

#### Response Codes:

| **Code** | **Description**                                   |
| -------- | ------------------------------------------------- |
| 200      | The DocumentDB record was successfully retrieved. |
| 401      | Unauthorized.                                     |
| 404      | The DocumentDB record does not exist.             |

<br />
