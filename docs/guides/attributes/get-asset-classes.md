# Get asset classes

This endpoint returns all asset classes available in the TEOS platform. Asset classes define the type of a digital asset and help structure its general and custom properties. You can optionally use OData query options to filter, select, order, or paginate results.

📘 [Learn more](../../resources/using-the-teos-api/concepts/asset.md) about assets.

#### Request Endpoint:

```http
GET /odata/v1.0/AssetClasses
```

#### Usage:

```http
GET /AssetClasses[odataQuery]
```

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json` — Returns a list of asset class objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "A016",
    "Name": "Other assets"
  }
]
```

#### Response Codes:

| **Code** | **Description**                       |
| -------- | ------------------------------------- |
| 200      | The result was successfully retrieved |
| 400      | Bad Request                           |
| 401      | Unauthorized.                         |

<br />
