# Get a single asset detail class

This endpoint returns a specific asset detail class available in the TEOS platform. Asset detail classes provide additional classification for digital assets and help define their properties in more detail. No OData query options are supported for this endpoint.

📘 Learn more about Assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http
GET /odata/v1.0/AssetDetailClasses(code={code},languageCode={languageCode})
```

#### Usage:

```http
GET /AssetDetailClasses(code='B002',languageCode='en')
```

| **Parameter** | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| code          | string   | Asset detail class code.                             |
| languageCode  | string   | Code of the language of the asset class name (ISO 2) |

#### Request Body:

None

#### Response Body:

`application/json`— Returns a single asset detail class object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "B002",
  "Name": "Cash on deposit"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |

