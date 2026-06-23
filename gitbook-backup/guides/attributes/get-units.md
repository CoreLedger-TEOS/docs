# Get units

&#x20;This endpoint returns all units available in the TEOS platform. Units are used to define the measurement for digital assets. You can optionally use OData query options to filter, select, order, or paginate results.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

#### Request Endpoint:

```http
GET /odata/v1.0/Units
```

#### Usage:

```http
GET /Units[odataQuery]
```

#### Supported OData query options:&#x20;

Filter, Select, OrderBy, Top, Skip, Count.

#### Parameters

No query parameters.

#### Request Body:

None.

#### Response Body:

`application/json` — Returns a list of unit objects.

#### Example Response Body:

```json
[
  {
    "LanguageCode": "en",
    "Code": "pcs",
    "Name": "pieces"
  }
]
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The result was successfully retrieved. |
| 400      | Bad Request.                           |
| 401      | Unauthorized.                          |

