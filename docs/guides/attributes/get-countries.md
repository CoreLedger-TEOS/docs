# Get countries

This endpoint returns all countries available in the TEOS platform. You can optionally use OData query options to filter, select, order, or paginate results.

#### Request Endpoint:

```http
GET /odata/v1.0/Countries
```

#### Usage:

```http
GET /Countries[odataQuery]
```

#### Supported OData query options:

Filter, Select, OrderBy, Top, Skip, Count

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json` — Returns a list of country objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "CH",
    "Name": "Switzerland"
  }
]
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The result was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |

