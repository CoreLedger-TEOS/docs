# Get a single country

This endpoint returns a specific country available in the TEOS platform. No OData query options are supported for this endpoint.

#### Request Endpoint:

```json
GET /odata/v1.0/Countries(code={code},languageCode={languageCode})
```

#### Usage:

```json
GET /Countries(code='CH',languageCode='en')
```

#### Parameters:

* code (string, path) — Country code.
* languageCode (string, path) — Code of the language of the country name (ISO 2).

#### Request Body:

None

#### Response Body:

`application/json` — Returns a single country object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "CH",
  "Name": "Switzerland"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request                            |
| 401      | Unauthorized.                          |
| 404      |  The record does not exist.            |

