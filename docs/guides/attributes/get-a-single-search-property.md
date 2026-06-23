# Get a single search property

This endpoint returns a specific search property available in the TEOS platform. Search properties are used to filter and find digital assets or related entities. No OData query options are supported for this endpoint.

#### Request Endpoint:

```http
GET /odata/v1.0/SearchProperties(code={code},languageCode={languageCode})
```

#### Usage:

```http
GET /SearchProperties(Code='jurisdiction',LanguageCode='en')
```

| **Parameter** | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| code          | string   | Search property code.                                |
| languageCode  | string   | Code of the language of the asset class name (ISO 2) |

#### Request Body:

None

#### Response Body:

`application/json` — Returns a single search property object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "jurisdiction",
  "Name": "jurisdiction"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request                            |
| 401      | Unauthorized.                          |
| 404      |  The record does not exist.            |

\
<br />
