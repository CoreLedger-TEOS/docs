# Warp Execution

This endpoint executes a previously identified warp, allowing TEOS users to trade sparks of offered assets for sparks of desired assets.

A warp is a chain of supplies automatically determined on-the-fly using a mathematical optimization algorithm, where the available supplies on the TEOS platform act as the chain links. The warp execution performs the chain of trades automatically, transferring the specified amount through the selected supplies.

📘 [Learn more](../../resources/using-the-teos-api/concepts/warp/index.md) about warps.

#### Request Endpoint

```http
POST /odata/v1.0/Warps/Execute
```

#### Parameters

No query parameters.

#### Request Body

**Content type:** `application/json`— Details of the warp execution.

| **Parameter** | **Type**       | **Description**                                                                                  | **Mandatory** |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------ | ------------- |
| signerAddress | string         | Public address of the wallet initiating the warp. Must have enough units of the offered asset.   | ✅             |
| targetAddress | string         | Public address of the wallet receiving the resulting assets.                                     | ✅             |
| inputAmount   | string         | Amount of sparks of the offered asset to spend.                                                  | ✅             |
| supplyIds     | array&lt;string&gt; | List of supply identifiers representing the warp chain. Each supply acts as a link in the chain. | ✅             |

#### Example Request Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address ("signerAddress", "targetAddress" and etc) is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "signerAddress": "0xa239d973e3622aeabee9b472056affd08f3abdda",
  "targetAddress": "0x791b84f90838ec3074813d2a9f556c7b4ed597bb",
  "inputAmount": "4",
  "supplyIds": [
    "0x827CB8534CFABA240CC90001C271BF2BEC1796539AB2000168E4D1DC000007C7",
    "0xC271BF2BEC1796539AB20001C271BF2BEC1796539CDE000168E4D1DC00000797"
  ]
}
```

#### Response Body

**Content type:** `application/json` — Returns the transaction details of the warp execution.

| **Parameter**           | **Description**                                                     |
| ----------------------- | ------------------------------------------------------------------- |
| Id                      | Unique identifier of the transaction created by the warp execution. |
| State                   | Current state of the transaction.                                   |
| BlockchainTransactionId | Blockchain transaction hash.                                        |
| Type                    | Type of transaction (e.g., ActivateAsset, Transfer).                |
| OnCreated               | Timestamp when the transaction was created.                         |
| OnUpdated               | Timestamp of the last update.                                       |
| OnSubmitted             | Timestamp when the transaction was submitted.                       |
| OnCommitted             | Timestamp when the transaction was committed on the blockchain.     |
| OnConfirmed             | Timestamp when the transaction was confirmed.                       |
| OnRevokedByBlockchain   | Timestamp if revoked by blockchain.                                 |
| OnRevokedByUser         | Timestamp if revoked by user.                                       |
| OnRevokedByTxServer     | Timestamp if revoked by transaction server.                         |
| SignedBy                | Public address that signed the transaction.                         |
| CreatedBy               | User ID who initiated the transaction.                              |
| GasPrice                | Gas price used for execution.                                       |
| GasUsed                 | Gas consumed during execution.                                      |
| DataAsJson              | Additional transaction data in JSON format.                         |
| SigningParametersAsJson | Signing parameters used in JSON format.                             |

#### Example Response Body

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-14T13:33:34.089Z",
  "OnUpdated": "2025-10-14T13:33:34.089Z",
  "OnSubmitted": "2025-10-14T13:33:34.089Z",
  "OnCommitted": "2025-10-14T13:33:34.089Z",
  "OnConfirmed": "2025-10-14T13:33:34.089Z",
  "OnRevokedByBlockchain": "2025-10-14T13:33:34.089Z",
  "OnRevokedByUser": "2025-10-14T13:33:34.089Z",
  "OnRevokedByTxServer": "2025-10-14T13:33:34.089Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Codes

| **Code** | **Description**                                         |
| -------- | ------------------------------------------------------- |
| 202      | The warp execution transaction was successfully placed. |
| 400      | The request is invalid. Error details are included.     |
| 401      | Unauthorized.                                           |

<br />
