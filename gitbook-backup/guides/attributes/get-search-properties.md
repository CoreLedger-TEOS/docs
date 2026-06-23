# Get search properties

This endpoint returns all search properties available in the TEOS platform. Search properties are used to filter and find digital assets or related entities. You can optionally use OData query options to filter, select, order, or paginate results.

#### Request Endpoint:

```http
GET /odata/v1.0/SearchProperties
```

#### Usage:

```http
GET /SearchProperties[odataQuery]
```

#### Supported OData query options

Filter, Select, OrderBy, Top, Skip, Count.

#### Parameters

No query parameters.

#### Request Body:

None

#### Response Body:

`application/json` — Returns a list of search property objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "jurisdiction",
    "Name": "jurisdiction"
  }
]
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The result was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |
