# Get multiple asset balances

Retrieves balances for multiple blockchain addresses and multiple assets in a single request.\
This endpoint allows you to efficiently query the balance of several wallet addresses across multiple assets at once.\
It is not limited by the currently authenticated user — meaning you can retrieve balances for any combination of addresses and assets.

📘 [Learn more](../../resources/using-the-teos-api/concepts/spark.md) about natural units of measure and Sparks.

#### Request Endpoint:

```http

GET /odata/v1.0/Balances/GetAssetsBalances(addresses={addresses},uniqueAssetIds={uniqueAssetIds})
```

#### Parameters

| **Parameter**  | **Type**       | **Description**                                                                          | **Mandatory** |
| -------------- | -------------- | ---------------------------------------------------------------------------------------- | ------------- |
| addresses      | array\[string] | List of wallet addresses whose balances should be checked.                               | ✅             |
| uniqueAssetIds | array\[string] | List of unique asset identifiers (UniqueAssetIds) for which balances should be returned. | ✅             |

#### Example Request:

```http
GET /Balances/GetAssetsBalances(
  Addresses=['0x9f114da25b61b77606d47eab414b9360f8783979','0xd9d18f6979473f8bdc6290ad772000c53bd5c907'],
  UniqueAssetIds=['0x0fc6e610b23b09fae00e10001','0x5b80da7d2d7acd8e4a1e0001','0x0fb125f4b5f45b0b0ff7c0001']
)
```

#### Response Body

`application/json`  — Returns a list of balances for each requested address and asset combination.

| **Parameter** | **Description**                                                  |
| ------------- | ---------------------------------------------------------------- |
| Address       | The blockchain address for which the balance was retrieved.      |
| UniqueAssetId | The unique identifier of the asset associated with this balance. |
| Amount        | The balance amount of the asset held on the specified address.   |

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Address": "0xc873ba6a2b45f7b2cd733c3983bd53ec6e2a05df",
    "UniqueAssetId": "0x7bc575105b40df19721a0001",
    "Amount": "25000"
  },
  {
    "Address": "0xd9d18f6979473f8bdc6290ad772000c53bd5c907",
    "UniqueAssetId": "0x0fc6e610b23b09fae00e10001",
    "Amount": "1200"
  }
]
```

#### Response Codes

| **Code** | **Description**                                                    |
| -------- | ------------------------------------------------------------------ |
| 200      | OK . The balances were successfully retrieved.                     |
| 401      | Unauthorized — Authentication is required to access this endpoint. |

<br />
