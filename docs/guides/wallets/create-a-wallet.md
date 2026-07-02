# Create a wallet

This endpoint creates a new wallet for the current user. Each TEOS platform user can have one or more wallets. Wallets are used to store and manage sparks of assets owned by a user.

Each wallet consists of a public address and a private key:

* The public address identifies the wallet in all spark operations.
* The private key, securely stored on the user’s device, is used to sign transactions.

TEOS API consumers can create a wallet to securely manage the sparks of assets owned by a TEOS user.

📘 [Learn more](../../resources/using-the-teos-api/concepts/wallet.md) about wallets.

#### Request Endpoint

```http
POST /odata/v1.0/Wallets
```

#### Parameters

No query parameters.

#### Request Body

**Content type:** `application/json` — Wallet details to be created.

| **Parameter**              | **Type**      | **Description**                                                                                    | **Mandatory** |
| -------------------------- | ------------- | -------------------------------------------------------------------------------------------------- | ------------- |
| Name                       | string        | Human-readable name of the wallet. Used to identify it in UI or integrations.                      | ✅             |
| UserId                     | string (UUID) | Unique identifier of the user who owns this wallet.                                                | ✅             |
| Signable                   | boolean       | Indicates whether this wallet can sign transactions (true for active wallets managed by the user). | ✅             |
| EthereumAddress/ICPAddress | string        | The public blockchain address for this wallet                                                      | ✅             |
| Description                | string        | Optional description providing context about the wallet purpose.                                   | ❌             |

#### Example Request Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Address" and is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer (ICPAddress), it is 63 characters.

```json
{
  "Name": "Example",
  "Description": "This is an example of a wallet",
  "UserId": "e38d15e0-b26e-4f2e-b78c-991a46be0644",
  "Signable": true,
  "EthereumAddress": "0x9f114da25b61b77606d47eab414b9360f8783979"
}
```

#### Response Body

**Content type:** `application/json`— Returns the details of the created wallet.

| **Parameter**              | **Description**                                              |
| -------------------------- | ------------------------------------------------------------ |
| Id                         | Unique identifier of the wallet in TEOS Platform.            |
| Name                       | Wallet name as defined during creation.                      |
| Description                | Description text provided by the user.                       |
| EthereumAddress/ICPAddress | The public blockchain address for this wallet.               |
| UserId                     | Unique identifier of the wallet owner.                       |
| Signable                   | Indicates whether this wallet supports signing transactions. |

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

| **Code** | **Description**                                                  |
| -------- | ---------------------------------------------------------------- |
| 201      | The wallet was created successfully.                             |
| 400      | The provided wallet data is invalid. Error details are included. |
| 401      | Unauthorized.                                                    |

<br />
