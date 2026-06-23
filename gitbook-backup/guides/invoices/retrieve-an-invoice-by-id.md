# Retrieve an invoice by id

Retrieves a single Invoice by its unique identifier. An invoice represents a digital record of a payment obligation between two parties on the blockchain. This endpoint returns all details of the invoice, including status, amount, target and sender addresses, due date, and associated transaction.

📘 Learn more about [invoices.](../../resources/using-the-teos-api/concepts/invoice.md)

#### **Request Endpoint**

```http
GET /odata/v1.0/Invoices({key})
```

#### **Parameters**

| **Parameter** | **Type**      | **Description**                                   | **Mandatory** |
| ------------- | ------------- | ------------------------------------------------- | ------------- |
| key           | string($uuid) | The unique identifier of the invoice to retrieve. | ✅             |

Supported OData query options: Expand, Select.

#### **Example Request**

```http
GET /Invoices(6046ab4b-c4c8-4839-7f1c-08da318afc96)
```

#### **Response Body**

Content type: `application/json` — Returns a single invoice object.

| **Parameter** | **Description**                                                                     |
| ------------- | ----------------------------------------------------------------------------------- |
| Id            | Unique identifier of the invoice.                                                   |
| Status        | Current status of the invoice (Open, Processing, Paid, Expired, Cancelled, Failed). |
| UniqueAssetId | Asset ID used for payment in this invoice.                                          |
| DesiredAmount | Amount of the asset in sparks.                                                      |
| TargetAddress | Wallet address that will receive the payment.                                       |
| SenderAddress | Wallet address responsible for paying the invoice.                                  |
| Description   | Optional comment or JSON provided during invoice creation.                          |
| CreatedBy     | ID of the user who created the invoice.                                             |
| CreatedOn     | Timestamp when the invoice was created.                                             |
| UpdatedOn     | Timestamp when the invoice was last updated.                                        |
| DueOn         | Due date for invoice validity.                                                      |
| TransactionId | Transaction associated with the invoice payment, if any.                            |

#### **Example Response Body**

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "TargetAddress" and "SenderAddress" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
  "Status": "Open",
  "UniqueAssetId": "0x096d45a5c311f13c97fca0001",
  "DesiredAmount": "100000",
  "TargetAddress": "0x0972b2d2a189225e6bbe8680283e5c62c2309819",
  "SenderAddress": "0x0000000000000000000000000000000000000000",
  "Description": "string",
  "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
  "CreatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedOn": "2022-07-21T09:40:23.263Z",
  "DueOn": "2023-08-04T09:40:22.32Z",
  "TransactionId": "00000000-0000-0000-0000-000000000000"
}
```

#### **Response Codes**

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 200      | The invoice was successfully retrieved.             |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized.                                       |
| 404      | The invoice does not exist.                         |

<br>
