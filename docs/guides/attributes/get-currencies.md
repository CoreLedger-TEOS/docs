# Get currencies

This endpoint returns all currencies available in the TEOS platform. You can optionally use OData query options to filter, select, order, or paginate results.

#### Request Endpoint:

```json
GET /odata/v1.0/Currencies
```

#### Usage:

```json
GET /Currencies[odataQuery]
```

#### Supported OData query options:

&#x20;Filter, Select, OrderBy, Top, Skip, Count.

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json`— Returns a list of currency objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "USD",
    "Name": "United States dollar"
  }
]
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The result was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |

<br />

<br />
