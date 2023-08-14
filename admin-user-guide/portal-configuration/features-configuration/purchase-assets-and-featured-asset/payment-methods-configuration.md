# Payment methods configuration

The payment methods used to purchase products can be configured in this section. Currently the following three payment methods available: “Bank Transfer”, “Credit Card” and “Cryptocurrencies”.

Each method can be enabled / disabled (“enabled”) and a description can be defined (“description”).

You can define KYC tier which users must have for each asset to be able to use it during checkout process (check below parameter "kycTier"). [Read more about KYC configurations](../kyc-checks.md)

### Bank transfer

Step 1. Configure bank transfer details

For the payment method “Bank Transfer” the bank details of the receiving account must be configured, descriptions for each field of bank details are optional, in case you provide them, users will see them in info tooltip.

```
“paymentMethods”: {
“bankTransfer”: {
“enabled”: true,
“kycTier”: 1,
"description": "Transfer from account to account.",

"beneficiaryName": {
  "value": "CoreLedger AG",
  "description": "Name of the beneficiary (company name)"
},

"beneficiaryAccount": {
  "value": "CH3908704016075473007",
  "description": "IBAN or an alternative of the beneficiary"
},

"beneficiaryBankName": {
  "value": "Zürcher Kantonalbank",
  "description": "Bank name of the beneficiary"
},

"beneficiaryBankAddress": {
  "value": "Dorfstrasse 18, 0000 Dorf, CH",
  "description": "Bank name of the beneficiary"
},

"beneficiaryBic": {
  "value": "",
  "description": "BIC (bank code) of the beneficiary, optional field"
},

"beneficiarySwift": {
  "value": "CH397",
  "description": "SWIFT (international bank code) of the beneficiary, optional field"
},
```

You can also add up to 3 additional bank ids (apart from SWIFT or BIC) in case your bank has them. You have to provide name and value for each of them and you have possibility to add optional description.

```
"beneficiaryAdditionalBankIdentifiers": [
  {
    "name": "Mandatory name",
    "value": "Mandatory value",
    "description": "Optional description"
  },
],
```

:tada: Starting from v0.10 you can add details of intermediary bank in case your bank has it for international payments.

```
"intermediary": {
  "bankName": "Central Bank",
  "swift": "CHXX XXX XXX",
  "account": "CHXXX XXXX XXX XXX XX"
}
```

Step 2. Prepare the template for invoice details

Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template for invoice details must be configured. Send it to your CoreLedger manager to apply it in your portal

### Credit card

Step 1. Configure credit card payment parameters

For using credit card payment via [Payrexx](https://www.payrexx.com/en/home/) productively you will have to provide your Payrexx account details to our project manager, enable this method and customize its look and feel. For pilot project with Active Sandbox you can start without your own account, we let you use CoreLedger test account.

```
“creditcard”: {
“enabled”: true,
“kycTier”: 0,
“description”: “Use Payrexx to checkout.”
},
```

Step 2. Prepare the template for credit card purchase details

Purchase details based on this template are sent to the user when credit card is selected as a payment method. \
Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template must be configured. Send it to your CoreLedger manager to apply it in your portal.

### Cryptopayment

Step 1. Configure crypto payment parameters

For using cryptocurrencies payment via [Coinify ](https://www.coinify.com/)productively you will have to provide your Coinify account details to our project manager, enable this method and customize its look and feel. For pilot project with Active Sandbox you can start without your own account, we let you use CoreLedger test account.

```
“bitcoin”: {
“enabled”: true,
“kycTier”: 2,
“description”: “Use Coinify to pay with Bitcoin.”
}
```

Step 2. Prepare the template for cryptopayment purchase details

Purchase details based on this template are sent to the user when cryptopayment is selected as a payment method. \
Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template must be configured. Send it to your CoreLedger manager to apply it in your portal.
