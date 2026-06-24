# Retrieve linked assets

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

This endpoint retrieves all assets that are linked from the specified asset, returning their uniqueAssetIds and full asset details.

📘 Learn more about assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http
GET /odata/v1.0/Assets({key})/GetLinkedFromAssetIds
```

#### Parameters

No query parameters besides the path.

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | Path     | UniqueAssetId of the asset | ✅             |

**Example:**

```http
GET /Assets('0x86766979FD04114E1F90001')/GetLinkedFromAssetIds
```

#### Response Body:

`application/json` — Returns a list of linked assets.

#### Example Response Body:

```json
{
"value": [
"0x688f43fed0f67a7a1eb0001"
]
}
```

#### Response Codes:

| **Code** | **Description**                                               |
| -------- | ------------------------------------------------------------- |
| 200      | The list of linked assets was successfully retrieved.         |
| 400      | The request is invalid. Error details are included.           |
| 401      | Unauthorized.                                                 |
| 404      | The asset was not found using the provided uniqueAssetId key. |

<br />
