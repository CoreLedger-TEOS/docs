# Get asset detail classes

This endpoint returns all asset detail classes available in the TEOS platform. Asset detail classes provide additional classification for digital assets and help define their properties in more detail. You can optionally use OData query options to filter, select, order, or paginate results.

#### Request Endpoint:

```http
GET /odata/v1.0/AssetDetailClasses
```

#### Usage:

```http
GET /AssetDetailClasses[odataQuery]
```

#### Supported OData query options:

Filter, Select, OrderBy, Top, Skip, Count.

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json` — Returns a list of asset detail class objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "B002",
    "Name": "Cash on deposit"
  }
]

```

#### Response Codes:

| **Code** | **Description**                       |
| -------- | ------------------------------------- |
| 200      | The result was successfully retrieved |
| 400      | Bad Request                           |
| 401      | Unauthorized.                         |

