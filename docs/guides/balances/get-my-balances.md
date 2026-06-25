# Get my balances

Retrieves all asset balances for the currently authenticated user.\
This endpoint returns the balances of all assets (tokens) associated with the user's wallets.

⚠️  API key authentication is not supported

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

Request Endpoint:

```http
GET /odata/v1.0/Balances/My
```

#### Parameters

This method does not require parameters in the path or body.\
You can optionally use OData query options to filter or paginate the results.

| **Parameter** | **Type** | **Description**                                                        |
| ------------- | -------- | ---------------------------------------------------------------------- |
| $filter       | string   | Optional. Filters the balances using supported operators (eq, in).     |
| $skip         | integer  | Optional. Skips a specified number of records (useful for pagination). |

#### Example Request:

```http
GET /Balances/My?$filter=UniqueAssetId eq '0x7bc575105b40df19721a0001'&$skip=10
```

#### Response Body

`application/json`  — Returns a list of balances for the user’s addresses and assets.

| **Parameter** | **Description**                                        |
| ------------- | ------------------------------------------------------ |
| Address       | The wallet address associated with the balance.        |
| UniqueAssetId | The unique identifier of the asset (token).            |
| Amount        | The amount of the specified asset held in the address. |

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Address": "0xc873ba6a2b45f7b2cd733c3983bd53ec6e2a05df",
    "UniqueAssetId": "0x7bc575105b40df19721a0001",
    "Amount": "25000"
  }
]
```

#### Response Codes

| **Code** | **Description**                              |
| -------- | -------------------------------------------- |
| 200      | Balances successfully retrieved.             |
| 401      | Unauthorized — user authentication required. |

<br />
