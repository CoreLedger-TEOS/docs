# Get a single language

This endpoint returns a specific language available in the TEOS platform. No OData query options are supported for this endpoint.

#### Request Endpoint:

```http
GET /odata/v1.0/Languages(code={code},languageCode={languageCode})
```

#### Usage:

```http
GET /Languages(code='en',languageCode='en')
```

| **Parameter** | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| code          | string   |  Language code.                                      |
| languageCode  | string   | Code of the language of the asset class name (ISO 2) |

#### Request Body:

None

#### Response Body:

`application/json` — Returns a single language object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "en",
  "Name": "English"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request                            |
| 401      | Unauthorized.                          |
| 404      | The record does not exist.             |

\
<br />
