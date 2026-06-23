# Cancel invoices

This endpoint allows TEOS users to cancel one or more invoices. Only invoices that are in the Open status can be canceled. If any invoice ID in the request is not found, it will be ignored. Cancelling an invoice sets its status to Cancelled.

📘 Learn more about [invoices.](../../resources/using-the-teos-api/concepts/invoice.md)

#### **Request Endpoint**

```http
POST /odata/v1.0/Invoices/Cancel
```

#### **Parameters**

No query parameters.

#### **Request Body**

`application/json`  — Contains the list of invoice IDs to cancel.

| **Parameter** | **Type**       | **Description**                                                                                                                | **Mandatory** |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| invoiceIds    | array\[string] | List of invoice IDs to cancel. Only invoices with status Open will be processed; missing or non-open invoices will be ignored. | ✅             |

#### Example Request Body:

```json
{
  "invoiceIds": [
    "262fced5-70e0-41fa-3d70-08da3285184e",
    "af61d040-b1a9-4ab9-3d71-08da3285184e",
    "8283db96-c505-4d29-3d72-08da3285184e"
  ]
}
```

#### **Response Body**

`application/json`  — Returns details of the cancel transactions for the invoices.

| **Parameter**           | **Description**                                            |
| ----------------------- | ---------------------------------------------------------- |
| Id                      | Unique transaction ID                                      |
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
  "OnCreated": "2025-10-07T07:56:08.124Z",
  "OnUpdated": "2025-10-07T07:56:08.124Z",
  "OnSubmitted": "2025-10-07T07:56:08.124Z",
  "OnCommitted": "2025-10-07T07:56:08.124Z",
  "OnConfirmed": "2025-10-07T07:56:08.124Z",
  "OnRevokedByBlockchain": "2025-10-07T07:56:08.124Z",
  "OnRevokedByUser": "2025-10-07T07:56:08.124Z",
  "OnRevokedByTxServer": "2025-10-07T07:56:08.124Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### **Response Codes**

| **Code** | **Description**                                  |
| -------- | ------------------------------------------------ |
| 202      | Accepted. Cancel transaction successfully placed |
| 400      | Bad Request. The request data is invalid         |
| 401      | Unauthorized. The sender is not authorized       |

<br>
