# Invoice

TEOS API consumers can create invoice to get digital record for agreed obligation of payment and pay invoice to fulfil this obligation. Invoice is a time-stamped digital record for a payment agreement made between two parties.

Invoice object has following structure:

```json
  {
    "Id": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
    "Status": "Open",
    "UniqueAssetId": "0x096d45a5c311f13c97fca0001",
    "DesiredAmount": "100000",
    "TargetAddress": "0x0972b2d2a189225e6bbe8680283e5c62c2309819",
    "SenderAddress": "0x0972b2d2a189225e6bbe8680283e5c62c2309819",
    "Description": "string",
    "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
    "CreatedOn": "2022-05-06 13:28:57.990",
    "UpdatedOn": "2022-05-06 13:28:57.990",
    "DueOn": "2022-05-06 13:28:57.990",
    "TransactionId": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7"
  }
```

Main properties description:

* UniqueAssetId – unique asset id of the asset that is used for payment within the invoice
* DesiredAmount – amount of the asset in sparks
* TargetAddress – wallet address defined during invoice creation, this address will receive the paid DesiredAmount of UniqueAssetId sparks
* SenderAddress - wallet address which pays the invoice
* TransactionId - transaction which is created and associated with current invoice when invoice payment is triggered
* DueOn - due date for invoice validity, after this date invoice status will be changed to Expired
* Description (optional) - any comment provided by invoice creator

### Invoice status model

* Open – invoice is created with this default status
* Processing - transaction for transferring sparks was created
* Paid - TEOS API automatically checks whether the invoice is paid by corresponding transfer transaction, if there is a related successfully resulted transaction for transferring sparks and amount is not less than stated in desiredAmount, status is set to “Paid”
* Expired – TEOS API automatically checks whether currentDate >= dueDate of invoices with state “Open”, as soon as the condition is met, status is changed to “Expired”
* Cancelled – this status is set when TEOS API gets corresponding request
* Failed - this status is automatically set when transaction for transferring sparks fails

### Invoice operations

TEOS user can **create invoice** (invoice data such as uniqueAssetId, desiredAmount, targetAddress and dueDate has to be provided as an input)

TEOS user can **retrieve invoice details** by an array of invoiceIds. Set of required details and filters can be defined within request based on OData query concept.

TEOS user can **cancel invoice** by invoiceId – status of Invoice is set to “Cancelled”

TEOS user can **pay invoice.** This initiates a Transfer or WARP transaction for invoice payment:

* Transfer - a desired amount of sparks are transferred from sender to the target address
* [WARP ](warp.md)execution - user [searches ](../../overview/warp-search.md)for possible WARPs, chooses the preferred one (if any are found), takes its data needed for the invoice payment (InputAmount and SupplyIds) and pays the invoice
