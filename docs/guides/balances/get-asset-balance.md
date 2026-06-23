# Get asset balance

Retrieves the balance of a specific asset for a given blockchain address.\
This endpoint allows you to check how many units (or Sparks) of a particular asset are held on a specific address.\
It is not limited by the currently authenticated user — meaning you can query the balance of any address.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

#### Request Endpoint:

```http
GET /odata/v1.0/Balances(address={address},uniqueAssetId={uniqueAssetId})
```

#### Parameters

| **Parameter** | **Type** | **Description**                                                             | **Mandatory** |
| ------------- | -------- | --------------------------------------------------------------------------- | ------------- |
| address       | string   | The blockchain address to check the balance on.                             | ✅             |
| uniqueAssetId | string   | The unique identifier (UniqueAssetId) of the asset to check the balance of. | ✅             |

#### Example Request:

```http
GET /Balances(address='0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835',uniqueAssetId='0x2D053211AE0C49EBFB720001')
```

#### Response Body

`application/json` — Returns the balance information for the requested address and asset.

| **Parameter** | **Description**                                               |
| ------------- | ------------------------------------------------------------- |
| Address       | The blockchain address for which the balance was requested.   |
| UniqueAssetId | The unique identifier of the asset whose balance was queried. |
| Amount        | The total balance amount of the asset held on this address.   |

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Address": "0xc873ba6a2b45f7b2cd733c3983bd53ec6e2a05df",
  "UniqueAssetId": "0x7bc575105b40df19721a0001",
  "Amount": "25000"
}
```

#### Response Codes

| **Code** | **Description**                                                    |
| -------- | ------------------------------------------------------------------ |
| 200      | OK . The balance data was successfully retrieved.                  |
| 401      | Unauthorized — Authentication is required to access this endpoint. |

<br />
