# Create a supply

This method allows a TEOS user to create a new supply. A supply is an offer to exchange a specific amount of sparks of an offered asset for a specific amount of sparks of a desired asset.

📘[ Learn more ](../../resources/using-the-teos-api/concepts/supply.md)about supplies.

#### Request Endpoint:

```http
POST/odata/v1.0/Supplies/Create
```

#### Sample Request

```http
POST /Supplies/Create
```

**Content-Type:** `application/json`&#x20;

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "OriginatorAddress" and "ReceiverAddress" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
    "OfferedAssetId" : "0x28fb9b1d9baf5cbf6aea0001",
    "DesiredAssetId" :"0x564f0ffb29de16fba6e00001",
    "OfferedSparksAmount" :"100",
    "ExchangeRate": "1",
    "OriginatorAddress" : "0xfa967924a46b687b27f9cb11dd6f7386f3b9a4ec",
    "ReceiverAddress" : "0xfa967924a46b687b27f9cb11dd6f7386f3b9a4ec",
    "TakeAll" : true,
    "ExpirationDate":"2024-02-15T23:25:24.295Z",
    "ExpirationBlock" : "84572310231845",
    "CreatedBy": "70647697-15c6-454d-8b34-638c8f68c79f"
}
```

#### Parameters

| **Name** | **Description**                             |
| -------- | ------------------------------------------- |
| None     | This method does not require URL parameters |

#### Request Body

| **Field**           | **Type** | **Description**                                                           | **Mandatory** |
| ------------------- | -------- | ------------------------------------------------------------------------- | ------------- |
| OfferedAssetId      | string   | Unique identifier of the offered asset                                    | ✅             |
| DesiredAssetId      | string   | Unique identifier of the desired asset                                    | ✅             |
| OfferedSparksAmount | string   | Amount of offered asset in sparks                                         | ✅             |
| ExchangeRate        | string   | Amount of desired asset per spark of offered asset                        | ✅             |
| OriginatorAddress   | string   | Address of the issuer                                                     | ✅             |
| ReceiverAddress     | string   | Address of the receiver                                                   | ✅             |
| CreatedBy           | string   | Identifier of the creator                                                 | ✅             |
| ExpirationDate      | datetime | Expiration date of the supply (mutually exclusive with ExpirationBlock)   | ❌             |
| ExpirationBlock     | string   | Block number when supply expires (mutually exclusive with ExpirationDate) | ❌             |
| TakeAll             | boolean  | Withdraw the whole amount at one iteration (default: false)               | ❌             |

#### Example Response Body

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-08T12:05:17.441Z",
  "OnUpdated": "2025-10-08T12:05:17.441Z",
  "OnSubmitted": "2025-10-08T12:05:17.441Z",
  "OnCommitted": "2025-10-08T12:05:17.441Z",
  "OnConfirmed": "2025-10-08T12:05:17.441Z",
  "OnRevokedByBlockchain": "2025-10-08T12:05:17.441Z",
  "OnRevokedByUser": "2025-10-08T12:05:17.441Z",
  "OnRevokedByTxServer": "2025-10-08T12:05:17.441Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Fields Description

| **Field**               | **Type** | **Description**                                            |
| ----------------------- | -------- | ---------------------------------------------------------- |
| Id                      | string   | Identifier of the transaction                              |
| State                   | string   | Current state of the transaction                           |
| BlockchainTransactionId | string   | ID of the transaction on blockchain                        |
| Type                    | string   | Type of the transaction                                    |
| OnCreated               | datetime | Timestamp when the transaction was created                 |
| OnUpdated               | datetime | Timestamp when the transaction was last updated            |
| OnSubmitted             | datetime | Timestamp when the transaction was submitted               |
| OnCommitted             | datetime | Timestamp when the transaction was committed               |
| OnConfirmed             | datetime | Timestamp when the transaction was confirmed               |
| OnRevokedByBlockchain   | datetime | Timestamp if transaction was revoked by blockchain         |
| OnRevokedByUser         | datetime | Timestamp if transaction was revoked by user               |
| OnRevokedByTxServer     | datetime | Timestamp if transaction was revoked by transaction server |
| SignedBy                | string   | Address or identifier of the signer                        |
| CreatedBy               | string   | Identifier of the creator                                  |
| GasPrice                | string   | Gas price used in blockchain transaction                   |
| GasUsed                 | string   | Gas consumed for transaction execution                     |
| DataAsJson              | string   | Additional data in JSON format                             |
| SigningParametersAsJson | string   | Signing parameters in JSON format                          |

#### Responses

| **Code** | **Description**                                               |
| -------- | ------------------------------------------------------------- |
| 200      | OK                                                            |
| 201      | The transaction was successfully created                      |
| 400      | The supply create data is invalid. Error details are included |
| 401      | Unauthorized                                                  |
| 404      | Not Found                                                     |

<br>
