# Submit a transaction

Submits a prepared and signed blockchain transaction to the TEOS Platform for processing. After submission, the transaction status will change according to the TEOS transaction states.

📘 [Learn more](../../resources/using-the-teos-api/concepts/transaction.md) about transactions.

#### Request Endpoint:

```http
POST /odata/v1.0/Transactions({key})/Submit
```

#### Parameters

| **Parameter** | **Type**      | **Mandatory** | **Description**                                    |
| ------------- | ------------- | ------------- | -------------------------------------------------- |
| key           | string (UUID) | ✅             | The unique identifier of the transaction to submit |

**Example:**

```json
301f8350-efcb-4a23-775a-08daa8492516
```

#### Request Body

**Media type:** `application/json`

#### Mandatory fields in body:

| **Parameter**     | **Type** | **Description**                                               | **Mandatory** |
| ----------------- | -------- | ------------------------------------------------------------- | ------------- |
| SignerAddress     | string   | Blockchain address of the signer submitting the transaction   | ✅             |
| SignedTransaction | string   | The signed transaction data to be submitted to the blockchain | ✅             |
| Description       | string   | Optional text describing the transaction purpose              | ✅             |

#### Example Value:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "SignerAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "SignerAddress": "0x0696e6b1c2415665e03d857e7337a75d132af6c8",
  "SignedTransaction": "f8e980846b49d20083027ce2943c58627cda92d8b045813dac4dcf0d0f9e3a5c7180b88427fd282d000000000000000000000000000000000000000000009da6d7a532f4daf03fcd7cc610f58f56c2283b6f00c3c1b5362f54374dd8ff89ccea41aa987e3109abc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ca0158a74960e69d9dc21e04997a53d4817ecdfc3c7ee80398753948a93d3bc3d49a01518fc4d73556b5f773df1b070cb76366e9638b768b270d8c09321e47ad779a6",
  "Description": "Submit activate asset transaction"
}
```

#### Responses

| **Code** | **Description**                                                       |
| -------- | --------------------------------------------------------------------- |
| 202      | Accepted.  Transaction successfully submitted                         |
| 400      | Bad Request. Invalid transaction Id or malformed signed transaction   |
| 401      | Unauthorized.  Requester is not authorized to submit this transaction |

<br />
