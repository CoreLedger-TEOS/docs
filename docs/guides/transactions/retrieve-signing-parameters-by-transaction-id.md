# Retrieve signing parameters by transaction Id

Returns the signing parameters for a specific blockchain transaction. These parameters are required to sign the transaction using the private key of the signing address.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/transaction.md)about transactions.

#### Request Endpoint:

```http
GET /odata/v1.0/Transactions({key})/GetSigningParameters
```

#### Parameters

| **Parameter** | **Type**      | **Description**                                                                     | **Mandatory** |
| ------------- | ------------- | ----------------------------------------------------------------------------------- | ------------- |
| key           | string (UUID) | The unique identifier of the transaction for which signing parameters are requested | ✅             |

**Example:**

```json
91baa4d6-85af-4780-1de7-08daa77fbe04
```

#### Request Body

No request body required.

#### Response Body Example

**Media type:** `application/json`

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "TargetAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Amount": "string",
  "TargetAddress": "string",
  "Nonce": "string",
  "GasPrice": "string",
  "GasLimit": "string",
  "DataToSign": "string",
  "ChainId": "string"
}
```

#### Response Body Parameters:

| **Parameter** | **Type** | **Description**                                                       |
| ------------- | -------- | --------------------------------------------------------------------- |
| Amount        | string   | Amount of tokens/ethers involved in the transaction                   |
| TargetAddress | string   | Blockchain address that is the recipient or target of the transaction |
| Nonce         | string   | Transaction nonce used to prevent replay attacks                      |
| GasPrice      | string   | Gas price for the transaction in the blockchain network               |
| GasLimit      | string   | Maximum gas allowed for the transaction execution                     |
| DataToSign    | string   | The transaction payload that needs to be signed                       |
| ChainId       | string   | Blockchain chain ID where the transaction will be submitted           |

#### Responses

| **Code** | **Description**                                |
| -------- | ---------------------------------------------- |
| 200      | OK — signing parameters successfully retrieved |
| 401      | Unauthorized                                   |

<br />
