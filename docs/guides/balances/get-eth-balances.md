# Get ETH balances

Retrieves the ETH balances for one or multiple wallet addresses.\
This endpoint allows you to check how much Ether (ETH) each specified blockchain address holds.

📘 [Learn more](../../resources/using-the-teos-api/concepts/spark.md) about natural units of measure and Sparks.

Request Endpoint:

```http
GET /odata/v1.0/Balances/GetEthBalances(addresses={addresses})
```

#### Parameters

| **Parameter** | **Type**       | **Description**                                                    | **Mandatory** |
| ------------- | -------------- | ------------------------------------------------------------------ | ------------- |
| addresses     | array\[string] | List of wallet addresses for which ETH balances will be retrieved. | ✅             |

#### Example Request:

```http
GET /Balances/GetEthBalances(
  addresses=['0x5833bbfd8ce0192cf3bb4e7501148d9cd47f5c91','0x9f114da25b61b77606d47eab414b9360f8783979']
)
```

#### Response Body

`application/json`  — Returns a list of ETH balances for the requested addresses.

| **Parameter** | **Description**                                               |
| ------------- | ------------------------------------------------------------- |
| Address       | The blockchain address for which the ETH balance is returned. |
| Amount        | The ETH balance held at the specified address.                |

#### Example Response Body:

```json
[
  {
    "Address": "0x5833bbfd8ce0192cf3bb4e7501148d9cd47f5c91",
    "Amount": "0.5421"
  },
  {
    "Address": "0x9f114da25b61b77606d47eab414b9360f8783979",
    "Amount": "12.0315"
  }
]
```

#### Response Codes

| **Code** | **Description**                  |
| -------- | -------------------------------- |
| 200      | Balances successfully retrieved. |
| 401      | Unauthorized.                    |

<br />
