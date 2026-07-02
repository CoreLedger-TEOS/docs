# Revoke a transaction

Revokes a blockchain transaction. Only the transaction initiator (or authorized signer) can revoke a transaction that has not yet been committed to the blockchain.

📘 [Learn more](../../resources/using-the-teos-api/concepts/transaction.md) about transactions.

#### Request Endpoint:

```http
POST /odata/v1.0/Transactions({key})/Revoke
```

#### Parameters

| **Parameter** | **Type**      | **Description**                                        | **Mandatory** |
| ------------- | ------------- | ------------------------------------------------------ | ------------- |
| key           | string (UUID) | The unique identifier of the transaction to be revoked | ✅             |

**Example:**

```json
301f8350-efcb-4a23-775a-08daa8492516
```

#### Request Body

**Media type:** `application/json`

Mandatory fields in body:

| **Parameter** | **Type** | **Description**                                                               | **Mandatory** |
| ------------- | -------- | ----------------------------------------------------------------------------- | ------------- |
| Signature     | string   | Digital signature of the revoking user to authenticate the revocation request | ✅             |

#### Example Value:

```json
{
  "Signature": "0xf675887e6d9c963db90a6fb0a0274bcdf084d2de0f3e1ca31c8aa63873c88fe2722804f04e325e48c0ad24a6ecd72154a03f4f3003664a6e7420d3bfa9a885601c"
}
```

#### Responses

| **Code** | **Description**                                                      |
| -------- | -------------------------------------------------------------------- |
| 204      | No Content. Transaction successfully revoked                         |
| 400      | Bad Request. Invalid transaction Id or signature                     |
| 401      | Unauthorized. Requester is not authorized to revoke this transaction |

