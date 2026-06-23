# Retrieve wallets

This endpoint retrieves a list of wallets associated with users on the TEOS platform.

Each wallet represents a pair of public blockchain address and private key, which is used to manage sparks of assets owned by the user.

The endpoint supports standard OData query options and pagination, allowing clients to efficiently navigate through large wallet datasets.

📘 [Learn more](../../resources/using-the-teos-api/concepts/wallet.md) about wallets.

#### Request Endpoint

```http
GET /odata/v1.0/Wallets
```

This endpoint has default pagination — each page contains up to 50 items.

#### Supported OData Query Options

Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search.

These options allow clients to refine, sort, and filter wallet results efficiently.

#### Parameters

No query parameters.

#### Response Body

**Content type:** `application/json` — Returns a list of wallet objects.

| **Parameter**              | **Description**                                                      |
| -------------------------- | -------------------------------------------------------------------- |
| Id                         | Unique identifier of the wallet within TEOS Platform.                |
| Name                       | User-defined name of the wallet, used for identification.            |
| Description                | Optional description that provides context for the wallet’s purpose. |
| EthereumAddress/ICPAddress | The public blockchain address associated with this wallet.           |
| UserId                     | Unique identifier of the user who owns the wallet.                   |
| Signable                   | Indicates whether the wallet can be used to sign transactions.       |

#### Example Response Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Id": "346BD08F-8F95-4487-9FB4-17FA19B8A91D",
    "Name": "USD Token Wallet",
    "Description": "Used for payments",
    "EthereumAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8836",
    "UserId": "346BD08F-8F95-4487-9FB4-17FA19B8A91D",
    "Signable": true
  }
]
```

#### Response Codes

| **Code** | **Description**                      |
| -------- | ------------------------------------ |
| 200      | Wallets were successfully retrieved. |
| 204      | No wallets were found.               |
| 401      | Unauthorized.                        |

<br />
