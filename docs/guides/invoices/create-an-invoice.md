# Create an invoice

TEOS API consumers can create an invoice to get a digital record for agreed obligation of payment and pay invoice to fulfil this obligation. Invoice is a time-stamped digital record for a payment agreement made between two parties.\
An invoice defines the obligation of a sender to transfer a specified amount of an asset (in sparks) to a target address before the due date.\
Once created, the invoice remains in the Open status until it is either paid, expired, canceled, or fails.

📘 Learn more about [invoices.](../../resources/using-the-teos-api/concepts/invoice.md)

#### **Request Endpoint**

```http
POST /odata/v1.0/Invoices
```

#### **Parameters**

No query parameters.

#### **Request Body**

Content type: `application/json`  — Invoice details to be created.

| **Parameter** | **Type**          | **Description**                                                                                                    | **Mandatory** |
| ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- |
| UniqueAssetId | string            | Unique ID of the asset to be used for the payment.                                                                 | ✅             |
| TargetAddress | string            | Wallet address that will receive the payment. Must be a valid blockchain address (length depends on network type). | ✅             |
| DesiredAmount | string            | Amount of the asset (in sparks) to be transferred when the invoice is paid.                                        | ✅             |
| DueOn         | string (ISO date) | Due date for the invoice validity. After this date, status automatically changes to Expired.                       | ✅             |
| Description   | string            | Optional text or JSON description of the invoice purpose.                                                          | ❌             |

#### **Example Request Body**

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "TargetAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "UniqueAssetId": "0x96d45a5c311f13c97fca0001",
  "TargetAddress": "0x71ea8b6b06b5a832817eb574b4fed3defb41046e",
  "DesiredAmount": "10000000",
  "DueOn": "2022-05-10T13:30:00Z",
  "Description": "Some description or json"
}
```

#### **Response Body**

Content type: `application/json`  — Returns the created invoice details.

| **Parameter** | **Description**                                                                       |
| ------------- | ------------------------------------------------------------------------------------- |
| Id            | Unique identifier of the created invoice.                                             |
| Status        | Current status of the invoice (Open, Processing, Paid, Expired, Cancelled, Failed).   |
| UniqueAssetId | Asset ID used for the invoice payment.                                                |
| DesiredAmount | Amount of sparks specified for payment.                                               |
| TargetAddress | Wallet address that will receive the payment.                                         |
| SenderAddress | Wallet address responsible for paying the invoice (empty until payment is initiated). |
| Description   | Optional description of the invoice.                                                  |
| CreatedBy     | ID of the user who created the invoice.                                               |
| CreatedOn     | Date and time when the invoice was created.                                           |
| UpdatedOn     | Date and time when the invoice was last updated.                                      |
| DueOn         | Date and time after which the invoice expires if unpaid.                              |
| TransactionId | Identifier of the transaction created when the invoice is paid.                       |

#### **Example Response Body**

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "TargetAddress"and   "SenderAddress" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

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

| **Code** | **Description**                                                   |
| -------- | ----------------------------------------------------------------- |
| 201      | The invoice was created successfully.                             |
| 400      | The provided invoice data is invalid. Error details are included. |
| 401      | Unauthorized.                                                     |

<br />
