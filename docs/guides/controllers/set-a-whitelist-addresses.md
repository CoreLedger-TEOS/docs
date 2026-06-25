# Set a whitelist addresses

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint updates the whitelist addresses of a specific controller. It can add new addresses to the whitelist or update the limit for existing addresses. The operation modifies the blockchain-level controller, ensuring that access permissions are applied according to the updated whitelist.

📘 [Learn more](../../resources/using-the-teos-api/concepts/controllers.md) about controllers.

#### Request Endpoint:

```http
POST /odata/v1.0/Controllers({key})/SetWhitelistAddresses
```

#### Parameters

| Name | Type          | Description       | Mandatory |
| ---- | ------------- | ----------------- | --------- |
| key  | string($uuid) | The controller ID | ✅         |

#### Request Body:

`application/json`  — The object containing whitelist addresses to create or update.

**Mandatory fields in body:**

* whitelistAddresses — array of addresses to add/update
* Each item in whitelistAddresses must have:
* Address (string) — the blockchain address
* Limit (string or number) — the allowed limit for this address

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  "Address" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "whitelistAddresses": [
    {
      "Address": "0x128363b39f249b615d88b9dd2115b134a3b042be",
      "Limit": "10"
    },
    {
      "Address": "0x76f8b4f93cbc0468a35b258dc21331c409cc76a3",
      "Limit": "20000"
    }
  ]
}
```

#### Parameters Table (Body)

| **Parameter**                 | **Type**        | **Description**                                 |
| ----------------------------- | --------------- | ----------------------------------------------- |
| whitelistAddresses            | array           | List of whitelist addresses to create or update |
| whitelistAddresses\[].Address | string          | Blockchain address to whitelist                 |
| whitelistAddresses\[].Limit   | string / number | Limit for the address in transactions           |

#### Response Body Example:

`application/json`

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-10T09:03:11.922Z",
  "OnUpdated": "2025-10-10T09:03:11.922Z",
  "OnSubmitted": "2025-10-10T09:03:11.922Z",
  "OnCommitted": "2025-10-10T09:03:11.922Z",
  "OnConfirmed": "2025-10-10T09:03:11.922Z",
  "OnRevokedByBlockchain": "2025-10-10T09:03:11.922Z",
  "OnRevokedByUser": "2025-10-10T09:03:11.922Z",
  "OnRevokedByTxServer": "2025-10-10T09:03:11.922Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Parameters Table

| **Parameter**           | **Type**          | **Description**                                                |
| ----------------------- | ----------------- | -------------------------------------------------------------- |
| Id                      | string            | The unique identifier of the transaction                       |
| State                   | string            | Current state of the transaction                               |
| BlockchainTransactionId | string            | ID of the transaction on the blockchain                        |
| Type                    | string            | Type of transaction                                            |
| OnCreated               | string (datetime) | Timestamp when the transaction was created                     |
| OnUpdated               | string (datetime) | Timestamp when the transaction was last updated                |
| OnSubmitted             | string (datetime) | Timestamp when the transaction was submitted                   |
| OnCommitted             | string (datetime) | Timestamp when the transaction was committed to the blockchain |
| OnConfirmed             | string (datetime) | Timestamp when the transaction was confirmed on the blockchain |
| OnRevokedByBlockchain   | string (datetime) | Timestamp if transaction was revoked by blockchain             |
| OnRevokedByUser         | string (datetime) | Timestamp if transaction was revoked by user                   |
| OnRevokedByTxServer     | string (datetime) | Timestamp if transaction was revoked by TxServer               |
| SignedBy                | string            | Address that signed the transaction                            |
| CreatedBy               | string            | ID of the creator of the transaction                           |
| GasPrice                | string            | Gas price used for the transaction                             |
| GasUsed                 | string            | Gas used for the transaction                                   |
| DataAsJson              | string            | Transaction data in JSON format                                |
| SigningParametersAsJson | string            | Signing parameters in JSON format                              |

#### Responses

| **Code** | **Description** |
| -------- | --------------- |
| 202      | Accepted        |
| 400      | Bad Request     |
| 401      | Unauthorized    |

<br />
