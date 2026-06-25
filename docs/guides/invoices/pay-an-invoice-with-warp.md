# Pay an invoice with WARP

This endpoint allows TEOS users to pay an invoice using the WARP mechanism. A WARP is a chain of supplies that enables exchanging sparks of offered assets for sparks of desired assets based on available offers in the TEOS Platform.

Users can execute a WARP to pay the invoice even if they do not hold the exact asset required, as long as they have enough of the offered asset in the WARP chain.

**Preconditions:**

* The sender address has enough units of the WARP offered asset to cover the transaction.

📘 Learn more about [invoices.](../../resources/using-the-teos-api/concepts/invoice.md)

#### **Request Endpoint**

```http
POST /odata/v1.0/Invoices({key})/PayWithWarpTransfer
```

#### **Parameters**

| **Parameter** | **Type**      | **Description** | **Mandatory** |
| ------------- | ------------- | --------------- | ------------- |
| key           | string($uuid) | Invoice ID      | ✅             |

#### **Request Body**

`application/json` — Contains the payment details for executing the WARP.

| **Parameter** | **Type**       | **Description**                                            | **Mandatory** |
| ------------- | -------------- | ---------------------------------------------------------- | ------------- |
| senderAddress | string         | Wallet address that will pay the invoice using the WARP    | ✅             |
| inputAmount   | string         | Amount of the offered asset to spend in sparks             | ✅             |
| supplyIds     | array\[string] | List of WARP supply IDs that define the chain of exchanges | ✅             |

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "SenderAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "senderAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835",
  "inputAmount": "100500",
  "supplyIds": [
    "0x827CB8534CFABA240CC90001C271BF2BEC1796539AB2000168E4D1DC000007C7",
    "0xC271BF2BEC1796539AB20001C271BF2BEC1796539CDE000168E4D1DC00000797"
  ]
}

```

#### **Response Body**

`application/json`  — Returns details of the WARP transaction for invoice payment.

| **Parameter**           | **Description**                                            |
| ----------------------- | ---------------------------------------------------------- |
| Id                      | The unique ID of the transaction                           |
| State                   | Current state of the transaction                           |
| BlockchainTransactionId | Blockchain transaction hash                                |
| CorrelationId           | Correlation ID for tracking                                |
| Type                    | Type of transaction (e.g., ActivateAsset)                  |
| OnCreated               | Timestamp of transaction creation                          |
| OnUpdated               | Timestamp of last update                                   |
| OnSubmitted             | Timestamp when transaction was submitted                   |
| OnCommitted             | Timestamp when transaction was committed                   |
| OnConfirmed             | Timestamp when transaction was confirmed on the blockchain |
| OnRevokedByBlockchain   | Timestamp if revoked by blockchain                         |
| OnRevokedByUser         | Timestamp if revoked by user                               |
| OnRevokedByTxServer     | Timestamp if revoked by transaction server                 |
| SignedBy                | Address or entity that signed the transaction              |
| CreatedBy               | ID of the entity that created the transaction              |
| GasPrice                | Gas price used (if applicable)                             |
| GasUsed                 | Gas used (if applicable)                                   |
| DataAsJson              | Additional transaction data                                |
| SigningParametersAsJson | Signing parameters in JSON                                 |

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-07T07:53:09.540Z",
  "OnUpdated": "2025-10-07T07:53:09.540Z",
  "OnSubmitted": "2025-10-07T07:53:09.540Z",
  "OnCommitted": "2025-10-07T07:53:09.540Z",
  "OnConfirmed": "2025-10-07T07:53:09.540Z",
  "OnRevokedByBlockchain": "2025-10-07T07:53:09.540Z",
  "OnRevokedByUser": "2025-10-07T07:53:09.540Z",
  "OnRevokedByTxServer": "2025-10-07T07:53:09.540Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### **Response Codes**

| **Code** | **Description**                                        |
| -------- | ------------------------------------------------------ |
| 202      | Accepted. WARP payment transaction successfully placed |
| 400      | Bad Request. The request data is invalid               |
| 401      | Unauthorized. The sender is not authorized             |
| 404      | Not Found.                                             |

<br />
