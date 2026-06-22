# Change a supply exchange rate

This method allows a TEOS user to update the exchange rate of an existing supply. Supply represents an offer created by a user to trade a specific amount of one asset for a specific amount of another asset. By changing the exchange rate, the user can adjust the amount of desired asset received per unit of offered asset for that supply.

📘[ Learn more ](../../resources/using-the-teos-api/concepts/supply.md)about supplies.

#### Request Endpoint:

```http
POST
/odata/v1.0/Supplies({key})/ChangeExchangeRate
```

#### Parameters

| **Name** | **Description**                                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| key      | string (path) — The unique identifier of the supply to update. Example: 0x1EAEFD42D684567ABDC7000193A96C4653DE1314DB20000167242CB20000024E |

#### Request Body

`application/json`&#x20;

| **Field**    | **Type** | **Description**                                                                                              |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------ |
| exchangeRate | string   | The new exchange rate for the supply, representing the amount of desired asset per 1 spark of offered asset. |

#### Example Request

```http
POST /Supplies('0x1EAEFD42D684567ABDC7000193A96C4653DE1314DB20000167242CB20000024E')/ChangeExchangeRate
```

**Content-Type:** `application/json`&#x20;

```json
{
  "exchangeRate": "1"
}
```

#### Example Response Body

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-08T09:36:47.978Z",
  "OnUpdated": "2025-10-08T09:36:47.978Z",
  "OnSubmitted": "2025-10-08T09:36:47.978Z",
  "OnCommitted": "2025-10-08T09:36:47.978Z",
  "OnConfirmed": "2025-10-08T09:36:47.978Z",
  "OnRevokedByBlockchain": "2025-10-08T09:36:47.978Z",
  "OnRevokedByUser": "2025-10-08T09:36:47.978Z",
  "OnRevokedByTxServer": "2025-10-08T09:36:47.978Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Response Body Fields Description

| **Field**               | **Type** | **Description**                                                 |
| ----------------------- | -------- | --------------------------------------------------------------- |
| Id                      | string   | Transaction ID of the exchange rate update.                     |
| State                   | string   | Current state of the transaction.                               |
| BlockchainTransactionId | string   | ID of the transaction on blockchain.                            |
| CorrelationId           | string   | Correlation ID for tracking the transaction.                    |
| Type                    | string   | Type of the transaction.                                        |
| OnCreated               | datetime | Timestamp when the transaction was created.                     |
| OnUpdated               | datetime | Timestamp when the transaction was last updated.                |
| OnSubmitted             | datetime | Timestamp when the transaction was submitted.                   |
| OnCommitted             | datetime | Timestamp when the transaction was committed.                   |
| OnConfirmed             | datetime | Timestamp when the transaction was confirmed.                   |
| OnRevokedByBlockchain   | datetime | Timestamp if the transaction was revoked by blockchain.         |
| OnRevokedByUser         | datetime | Timestamp if the transaction was revoked by user.               |
| OnRevokedByTxServer     | datetime | Timestamp if the transaction was revoked by transaction server. |
| SignedBy                | string   | Identifier of the signer.                                       |
| CreatedBy               | string   | Identifier of the creator.                                      |
| GasPrice                | string   | Gas price used in the transaction.                              |
| GasUsed                 | string   | Gas used by the transaction.                                    |
| DataAsJson              | string   | Additional transaction data in JSON.                            |
| SigningParametersAsJson | string   | Parameters used for signing the transaction.                    |

#### Responses

| **Code** | **Description**                                                         |
| -------- | ----------------------------------------------------------------------- |
| 201      | The transaction was successfully created.                               |
| 202      | Accepted. The exchange rate change transaction has been submitted.      |
| 400      | The supplied exchange rate data is invalid. Error details are included. |
| 401      | Unauthorized.                                                           |

<br>
