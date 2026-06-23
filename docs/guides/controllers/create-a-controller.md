# Create a controller

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint creates a new controller. It allows you to specify the controller’s Name, Description, and Issuer Address, enabling the creation of a controller that can manage access permissions for assets on the blockchain.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
POST /odata/v1.0/Controllers/Create
```

**Parameters:**\
No query parameters.

#### Request Body:

`application/json`  — The model containing information for creating the controller.

#### Mandatory fields in body:

| **Parameter** | **Type** | **Description**                                                                | **Mandatory** |
| ------------- | -------- | ------------------------------------------------------------------------------ | ------------- |
| Name          | string   | Name of the controller                                                         | ✅             |
| IssuerAddress | string   | Blockchain address of the issuer                                               | ✅             |
| CreatedBy     | string   | ID of the user creating the controller (optional, used if API key is provided) | ❌             |
| Description   | string   | Description of the controller                                                  | ❌             |

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "IssuerAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Name": "Test name",
  "Description": "Test description",
  "IssuerAddress": "0x128363b39f249b615d88b9dd2115b134a3b042be",
  "CreatedBy": "70647697-15c6-454d-8b34-638c8f68c79f"
}

```

#### Response Body:

`application/json` — Returns the created controller with transaction details.

| **Parameter**           | **Type** | **Description**                                    |
| ----------------------- | -------- | -------------------------------------------------- |
| Id                      | string   | Controller ID                                      |
| State                   | string   | Transaction state                                  |
| BlockchainTransactionId | string   | ID of the transaction in blockchain                |
| Type                    | string   | Type of transaction                                |
| OnCreated               | datetime | Timestamp when transaction was created             |
| OnUpdated               | datetime | Timestamp when transaction was updated             |
| OnSubmitted             | datetime | Timestamp when transaction was submitted           |
| OnCommitted             | datetime | Timestamp when transaction was committed           |
| OnConfirmed             | datetime | Timestamp when transaction was confirmed           |
| OnRevokedByBlockchain   | datetime | Timestamp if transaction was revoked by blockchain |
| OnRevokedByUser         | datetime | Timestamp if transaction was revoked by user       |
| OnRevokedByTxServer     | datetime | Timestamp if transaction was revoked by TxServer   |
| SignedBy                | string   | Address of signer                                  |
| CreatedBy               | string   | ID of user who created the transaction             |
| GasPrice                | string   | Gas price used for transaction                     |
| GasUsed                 | string   | Gas used for transaction                           |
| DataAsJson              | string   | Transaction data in JSON format                    |
| SigningParametersAsJson | string   | Parameters used for signing in JSON format         |

#### Example Response Body:

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "State": "3",
  "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
  "Type": "ActivateAsset",
  "OnCreated": "2025-10-10T09:46:11.224Z",
  "OnUpdated": "2025-10-10T09:46:11.224Z",
  "OnSubmitted": "2025-10-10T09:46:11.224Z",
  "OnCommitted": "2025-10-10T09:46:11.224Z",
  "OnConfirmed": "2025-10-10T09:46:11.224Z",
  "OnRevokedByBlockchain": "2025-10-10T09:46:11.224Z",
  "OnRevokedByUser": "2025-10-10T09:46:11.224Z",
  "OnRevokedByTxServer": "2025-10-10T09:46:11.224Z",
  "SignedBy": "string",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "GasPrice": "string",
  "GasUsed": "string",
  "DataAsJson": "string",
  "SigningParametersAsJson": "string"
}
```

#### Responses:

| **Code** | **Description**                                                   |
| -------- | ----------------------------------------------------------------- |
| 201      | The controller was successfully created                           |
| 400      | The controller create data is invalid. Error details are included |
| 401      | Unauthorized                                                      |

<br />
