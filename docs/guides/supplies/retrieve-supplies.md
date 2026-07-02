# Retrieve supplies

Retrieve a list of supply offers available in the TEOS Platform. A Supply represents an offer created by a user to exchange a specific amount of sparks of one asset for a desired amount of sparks of another asset. Supplies can be consumed by other users during trades or warp executions.

📘 [Learn more](../../resources/using-the-teos-api/concepts/supply.md) about supplies.

#### Request Endpoint:

```http
GET /v1.0/v1.0/Supplies
```

#### Parameters

No parameters

Supported OData query options: Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "OriginatorAddress" and "ReceiverAddress" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Id": "string",
    "ExtReference": "string",
    "OriginatorAddress": "string",
    "ReceiverAddress": "string",
    "UniqueAssetIdOffered": "string",
    "UniqueAssetIdDesired": "string",
    "TotalAmount": "string",
    "RemainingAmount": "string",
    "ExchangeRate": "string",
    "TakeAll": true,
    "ExpiryBlock": "string",
    "ExpiryTime": "2025-10-08T09:13:33.353Z",
    "CreatedOnBlock": "string",
    "CreatedInBlockchainOn": "2025-10-08T09:13:33.353Z",
    "CreatedOn": "2025-10-08T09:13:33.353Z",
    "UpdatedOn": "2025-10-08T09:13:33.353Z"
  }
]
```

#### Response Variables Description:

| **Field**             | **Type** | **Description**                                                         |
| --------------------- | -------- | ----------------------------------------------------------------------- |
| Id                    | string   | Unique identifier of the supply.                                        |
| ExtReference          | string   | Optional external reference for the supply.                             |
| OriginatorAddress     | string   | Wallet address of the issuer/originator of the supply.                  |
| ReceiverAddress       | string   | Wallet address of the receiver of the desired asset.                    |
| UniqueAssetIdOffered  | string   | ID of the asset offered for exchange.                                   |
| UniqueAssetIdDesired  | string   | ID of the asset desired in exchange.                                    |
| TotalAmount           | string   | Total amount of the offered asset in sparks.                            |
| RemainingAmount       | string   | Remaining amount of the offered asset available for exchange.           |
| ExchangeRate          | string   | Amount of desired asset received per 1 spark of offered asset.          |
| TakeAll               | boolean  | Indicates if the whole offered amount should be taken in one iteration. |
| ExpiryBlock           | string   | Blockchain block number when the supply expires.                        |
| ExpiryTime            | string   | Date and time when the supply expires.                                  |
| CreatedOnBlock        | string   | Blockchain block number when the supply was created.                    |
| CreatedInBlockchainOn | string   | Timestamp when the supply was written to blockchain.                    |
| CreatedOn             | string   | Timestamp when the supply was created in the TEOS platform.             |
| UpdatedOn             | string   | Timestamp of the last update of the supply.                             |

#### Response Codes:

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 200      | Supplies successfully retrieved.                    |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized                                        |

<br />
