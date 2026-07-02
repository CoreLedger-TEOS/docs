# Retrieve a current user wallets

This endpoint retrieves all wallets associated with the current authenticated user. It returns a paginated list of wallets, with each page containing up to 50 items by default.

:::note
API key authentication is not supported for this endpoint.
:::

📘 [Learn more](../../resources/using-the-teos-api/concepts/wallet.md) about wallets.

#### Request Endpoint

```http
GET /odata/v1.0/Wallets/My
```

**Supports OData query options:**

Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search.

#### Parameters

This endpoint does not accept any query or path parameters.

#### Request Body

No request body is required.

#### Response Body Example

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

#### Response Fields Description

| **Field**                  | **Type**      | **Description**                                     |
| -------------------------- | ------------- | --------------------------------------------------- |
| Id                         | string($uuid) | Unique identifier of the wallet.                    |
| Name                       | string        | Human-readable name of the wallet.                  |
| Description                | string        | Optional description of the wallet.                 |
| EthereumAddress/ICPAddress | string        | The blockchain address linked to this wallet.       |
| UserId                     | string($uuid) | Unique identifier of the user who owns this wallet. |
| Signable                   | boolean       | Indicates whether the wallet can sign transactions. |

#### Responses

| **Code** | **Description**                                                                               |
| -------- | --------------------------------------------------------------------------------------------- |
| 200      | Wallets successfully retrieved. The response includes a list of wallets for the current user. |
| 401      | Unauthorized — authentication credentials are missing or invalid.                             |

<br />
