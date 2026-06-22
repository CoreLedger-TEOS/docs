# Get languages

This endpoint returns all languages available in the TEOS platform. You can optionally use OData query options to filter, select, order, or paginate results.

#### Request Endpoint:

```http
GET /odata/v1.0/Languages
```

#### Usage:

```http
GET /Languages[odataQuery]
```

#### Supported OData query options:

&#x20;Filter, Select, OrderBy, Top, Skip, Count

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json` — Returns a list of language objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "en",
    "Name": "English"
  }
]
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The result was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |
