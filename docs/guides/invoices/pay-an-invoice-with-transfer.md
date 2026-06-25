# Pay an invoice with transfer

Pays a specific Invoice using a direct transfer of the specified asset from the sender's address. The invoice represents a digital record of payment obligation, and this operation transfers the required asset amount (in sparks) to the invoice's target address.

📘 Learn more about [invoices.](../../resources/using-the-teos-api/concepts/invoice.md)

#### **Request Endpoint**

```http
POST /odata/v1.0/Invoices({key})/PayWithTransfer
```

#### **Parameters**

| **Parameter** | **Type**      | **Description**                              | **Mandatory** |
| ------------- | ------------- | -------------------------------------------- | ------------- |
| key           | string($uuid) | The unique identifier of the invoice to pay. | ✅             |

#### **Request Body**

Content type: `application/json`  — Specifies the sender address initiating the payment.

| **Parameter** | **Type** | **Description**                                                                 | **Mandatory** |
| ------------- | -------- | ------------------------------------------------------------------------------- | ------------- |
| senderAddress | string   | Wallet address which will pay the invoice. Must have enough units of the asset. | ✅             |

#### **Example Request**

```http
POST /Invoices(68c6abdb-0650-46d5-7d33-08da44a68d8c)/PayWithTransfer
```

**Content-Type**: `application/json`

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "SenderAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "senderAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8835"
}
```

#### **Response Body**

Content type: `application/json` — Returns details of the blockchain transaction created for invoice payment.

| **Parameter**           | **Description**                                             |
| ----------------------- | ----------------------------------------------------------- |
| Id                      | Transaction ID in TEOS system.                              |
| State                   | State of the transaction.                                   |
| BlockchainTransactionId | ID of the transaction on the blockchain.                    |
| CorrelationId           | Correlation ID for tracking across services.                |
| Type                    | Type of the transaction (e.g., ActivateAsset).              |
| OnCreated               | Timestamp when transaction was created.                     |
| OnUpdated               | Timestamp when transaction was last updated.                |
| OnSubmitted             | Timestamp when transaction was submitted to blockchain.     |
| OnCommitted             | Timestamp when transaction was committed on blockchain.     |
| OnConfirmed             | Timestamp when transaction was confirmed on blockchain.     |
| OnRevokedByBlockchain   | Timestamp if transaction was revoked by blockchain.         |
| OnRevokedByUser         | Timestamp if transaction was revoked by user.               |
| OnRevokedByTxServer     | Timestamp if transaction was revoked by transaction server. |
| SignedBy                | Entity that signed the transaction.                         |
| CreatedBy               | ID of the user who created the transaction.                 |
| GasPrice                | Gas price used for the blockchain transaction.              |
| GasUsed                 | Gas used by the blockchain transaction.                     |
| DataAsJson              | Additional transaction data in JSON format.                 |
| SigningParametersAsJson | JSON containing parameters used for signing.                |

#### **Example Response Body**

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-07T07:48:55.206Z",
  "OnUpdated": "2025-10-07T07:48:55.206Z",
  "OnSubmitted": "2025-10-07T07:48:55.206Z",
  "OnCommitted": "2025-10-07T07:48:55.206Z",
  "OnConfirmed": "2025-10-07T07:48:55.206Z",
  "OnRevokedByBlockchain": "2025-10-07T07:48:55.206Z",
  "OnRevokedByUser": "2025-10-07T07:48:55.206Z",
  "OnRevokedByTxServer": "2025-10-07T07:48:55.206Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### **Response Codes**

| **Code** | **Description**                                          |
| -------- | -------------------------------------------------------- |
| 202      | Invoice payment transaction accepted.                    |
| 400      | Bad request, invalid data or insufficient asset balance. |
| 401      | Unauthorized.                                            |
| 404      | Invoice not found.                                       |

<br />
