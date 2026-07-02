# Retrieve invoices

Retrieves a list of Invoices based on optional OData filters. Invoices represent digital records of payment obligations between two parties on the blockchain. This endpoint allows fetching details such as invoice status, amount, target and sender addresses, due date, and associated transactions.

📘 [Learn more](../../resources/using-the-teos-api/concepts/invoice.md) about invoices.

#### **Request Endpoint**

```http
GET /odata/v1.0/Invoices
```

#### **Parameters**

No query parameters are required. Filtering, sorting, and selection can be applied using supported OData query options.

Supported OData query options: Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search.

#### **Example Request**

```http

GET /Invoices?$filter=Id in (5bb41f13-4787-4d1e-3d47-08d90ae7f815, c34deab0-6d6f-4dff-3d48-08d90ae7f815, 7a1003d7-59b6-4fd4-35f2-08d9121995a3)

```

#### **Response Body**

Content type: `application/json`  — Returns an array of invoice objects.

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
[
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
]
```

#### **Response Codes**

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 200      | The invoices were successfully retrieved.           |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized.                                       |

<br />
