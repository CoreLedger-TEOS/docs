# Retrieve a wallet by id

This endpoint retrieves the details of a specific wallet by its unique identifier (Id).

Each wallet record contains:

* Identifying information about the wallet
* The associated blockchain address
* Metadata describing its usage and permissions

📘 [Learn more](../../resources/using-the-teos-api/concepts/wallet.md) about wallets.

#### Request Endpoint

```http
GET /odata/v1.0/Wallets({key})
```

#### Supported OData Query Options

Expand, Select — allow clients to retrieve related entities or select specific fields in the response.

#### Parameters

| **Name** | **Type**      | **Description**                                                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| key      | string($uuid) | &lt;p&gt;Required. Unique identifier of the requested wallet.&lt;/p&gt;&lt;p&gt;Example: B5BB3E99-A8F8-4896-8D41-07920DFCDAEC&lt;/p&gt; |

#### Response Body

**Content type:** `application/json`— Returns a single wallet object.

| **Parameter**              | **Description**                                                        |
| -------------------------- | ---------------------------------------------------------------------- |
| Id                         | Unique identifier of the wallet within TEOS Platform.                  |
| Name                       | Human-readable name assigned to the wallet.                            |
| Description                | Optional description providing context or intended use of the wallet.  |
| EthereumAddress/ICPAddress | The blockchain address linked to this wallet.                          |
| UserId                     | Identifier of the user who owns this wallet.                           |
| Signable                   | Indicates whether the wallet supports signing blockchain transactions. |

#### Example Response Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Id": "346BD08F-8F95-4487-9FB4-17FA19B8A91D",
  "Name": "USD Token Wallet",
  "Description": "Used for payments",
  "EthereumAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8836",
  "UserId": "346BD08F-8F95-4487-9FB4-17FA19B8A91D",
  "Signable": true
}
```

#### Response Codes

| **Code** | **Description**                                                   |
| -------- | ----------------------------------------------------------------- |
| 200      | The wallet was successfully retrieved.                            |
| 401      | Unauthorized — authentication credentials are missing or invalid. |
| 403      | Forbidden — the requested wallet belongs to another user.         |
| 404      | Not Found — no wallet with the specified ID exists in the system. |

<br />
