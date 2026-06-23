# Restock a supply

This method allows a TEOS user to increase the available amount of an existing supply by adding additional sparks. The restocked amount is added to the RemainingAmount of the supply, making more units available for trades or warp executions.

📘[ Learn more ](../../resources/using-the-teos-api/concepts/supply.md)about supplies.

#### **Request Endpoint**

```http
POST
/odata/v1.0/Supplies({key})/Restock
```

**Preconditions:**

* The supply must exist.
* The supply must not be expired or deleted.

#### Sample value of message

```http
POST /Supplies('0x1EAEFD42D684567ABDC7000193A96C4653DE1314DB20000167242CB20000024E')/Restock
```

**Content-Type:**  `application/json`&#x20;

```json
{
  "additionalAmount": "10000"
}
```

#### Parameters

| **Name** | **Description**                         | **Mandatory** |
| -------- | --------------------------------------- | ------------- |
| key      | The identifier of the supply to restock | ✅             |

#### Request body

&#x20;`application/json`&#x20;

| **Field**        | **Type** | **Description**                                  | **Mandatory** |
| ---------------- | -------- | ------------------------------------------------ | ------------- |
| additionalAmount | string   | Number of additional sparks to add to the supply | ✅             |

**Media type**\
&#x20;`application/json`&#x20;

#### Example Response Value

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "CorrelationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-08T10:20:23.027Z",
  "OnUpdated": "2025-10-08T10:20:23.027Z",
  "OnSubmitted": "2025-10-08T10:20:23.027Z",
  "OnCommitted": "2025-10-08T10:20:23.027Z",
  "OnConfirmed": "2025-10-08T10:20:23.027Z",
  "OnRevokedByBlockchain": "2025-10-08T10:20:23.027Z",
  "OnRevokedByUser": "2025-10-08T10:20:23.027Z",
  "OnRevokedByTxServer": "2025-10-08T10:20:23.027Z",
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
| CorrelationId           | string   | Correlation identifier for tracking                        |
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
| CreatedBy               | string   | Identifier of the creator of the transaction               |
| GasPrice                | string   | Gas price used in blockchain transaction                   |
| GasUsed                 | string   | Gas consumed for transaction execution                     |
| DataAsJson              | string   | Additional data in JSON format                             |
| SigningParametersAsJson | string   | Signing parameters in JSON format                          |

#### Responses

| **Code** | **Description**                                                |
| -------- | -------------------------------------------------------------- |
| 201      | The transaction was successfully created                       |
| 202      | Accepted                                                       |
| 400      | The supply restock data is invalid. Error details are included |
| 401      | Unauthorized                                                   |

<br />
