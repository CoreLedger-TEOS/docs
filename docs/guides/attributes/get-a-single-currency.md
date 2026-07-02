# Get a single currency

This endpoint returns a specific currency available in the TEOS platform. No OData query options are supported for this endpoint.

#### Request Endpoint:

```http
GET /odata/v1.0/Currencies(code={code},languageCode={languageCode})
```

#### Usage:

```http
GET /Currencies(code='USD',languageCode='en')
```

| **Parameter** | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| code          | string   | Currency code.                                       |
| languageCode  | string   | Code of the language of the asset class name (ISO 2) |

#### Request Body:

None.

#### Response Body:

`application/json` — Returns a single currency object.

#### Example Response Body:

```json
{
  "LanguageCode": "en",
  "Code": "USD",
  "Name": "United States dollar"
}
```

#### Response Codes:

| **Code** | **Description**                        |
| -------- | -------------------------------------- |
| 200      | The record was successfully retrieved. |
| 400      | Bad Request                            |
| 401      | Unauthorized.                          |
| 404      |  The record does not exist.            |

<br />
