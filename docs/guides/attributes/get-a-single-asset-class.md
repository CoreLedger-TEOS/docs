# Get a single asset class

This endpoint returns a specific asset class available in the TEOS platform. Asset classes define the type of a digital asset and help structure its general and custom properties. No OData query options are supported for this endpoint.

📘 Learn more about Assets -[ link](../../resources/using-the-teos-api/concepts/asset.md)

#### Request Endpoint:

```http
GET /odata/v1.0/AssetClasses(code={code},languageCode={languageCode})
```

#### Usage:

```http
GET /AssetClasses(code='A016',languageCode='en')
```

| **Parameter** | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| code          | string   | Asset class code.                                    |
| languageCode  | string   | Code of the language of the asset class name (ISO 2) |

#### Request Body:

None

#### Response Body:

`application/json` — Returns a single asset class object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "A016",
  "Name": "Other assets"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request                            |
| 401      | Unauthorized.                          |
| 404      |  The record does not exist.            |

<br />
