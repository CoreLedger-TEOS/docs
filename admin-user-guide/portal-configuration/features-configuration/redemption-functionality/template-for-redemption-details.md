---
description: Layout, order properties
---

# Template for redemption details

Please, prepare a word document which will follow the rules described below. You should send this template to CL manager to apply it. Based on this template PDF with redemption details of each redemption will be generated and attached to the email sent to user.

### How to prepare layout

You can use any layout of the document. You can insert your company logo, any header and footer. All texts and images will be used exactly like you'll provide in the template except for the properties variables (described below).

All colors will be used as is. So do not put any color if you do not need it&#x20;

Any modification/extension of the template should be provided to CL.

### Properties variables

Using these variables, you will operate with the order specific data.

* Keywords (mapped to properties) are surrounded by <>.  Therefore, avoid using <> in the template except for mappings or if you open one “<” then close it by “>”. If the application cannot find a mapping for a found keyword between <>, it will not change it. &#x20;
* If two keywords are together (ex: \<ZIP>\<TOWN>) think of a white space between them unless you want them to be one word: 6300Zug&#x20;
* Some keywords are available depending on the redemption method

#### Available for all redemption methods

| \<referencecode>        | Redemption reference code                                                 |
| ----------------------- | ------------------------------------------------------------------------- |
| \<netamount>            | How much the user receives, taking into account all commissions           |
| \<grossamount>          | <p>Net amount - how much the user receives </p><p>excluding all fees </p> |
| \<currency>             | transfer currency                                                         |
| \<redeemedassetsparks>  | How much user pays in asset sparks                                        |
| \<redeemedassetunits>   | How much user pays in asset units                                         |
| \<asset.name>           | Name of the asset                                                         |
| \<asset.unitofmeasure>  | Unit of measurement of the asset (kg, m3, and so on)                      |
| \<redemptionmethod>     | Name of the selected redemption method                                    |

#### Bank details&#x20;

Available only for redemption by bank transfer. If some of the optional properties values will be empty, nothing will be added to PDF

| \<bank.name>                                                                                                                                                                                                                                                                               | Beneficiary's bank name                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| \<bank.country>                                                                                                                                                                                                                                                                            | Beneficiary’s bank country                                    |
| \<bank.stateOrRegion> (available from v0.14)                                                                                                                                                                                                                                               | Beneficiary’s bank state or region                            |
| \<bank.city>                                                                                                                                                                                                                                                                               | Beneficiary’s bank city                                       |
| \<bank.addressline>                                                                                                                                                                                                                                                                        | Beneficiary’s bank address                                    |
| \<bank.zipcode>                                                                                                                                                                                                                                                                            | Beneficiary’s bank zip code                                   |
| \<bank.iban>                                                                                                                                                                                                                                                                               | Beneficiary 's account                                        |
| \<bank.swift> (available from v0.14)                                                                                                                                                                                                                                                       | Beneficiary 's bank Swift code                                |
| \<bank.bic>                                                                                                                                                                                                                                                                                | Beneficiary 's bank BIC code (local bank identification code) |
| <p>Available from v0.14:<br>&#x3C;intermediaryBank.name>&#x3C;intermediaryBank.country>&#x3C;intermediaryBank.city>&#x3C;intermediaryBank.stateOrRegion> &#x3C;intermediaryBank.addressline> &#x3C;intermediaryBank.zipcode> &#x3C;intermediaryBank.iban>&#x3C;intermediaryBank.swift></p> | Intermediary (correspondent) bank details                     |

#### Beneficiary details&#x20;

Available for all redemption types.&#x20;

| \<beneficiary.firstname>    | Beneficiary's first name  |
| --------------------------- | ------------------------- |
| \<beneficiary.lastname>     | Beneficiary's last name   |
| \<beneficiary.country>      | Beneficiary's country     |
| \<beneficiary.city>         | Beneficiary's city        |
| \<beneficiary.addressline>  | Beneficiary's address     |
| \<beneficiary.zipcode>      | Beneficiary’s zip code    |

#### Beneficiary details&#x20;

Available for Bitcoin, Ethereum and ERC-20 redemptions&#x20;

| \<walletaddress>  | Beneficiary’s wallet address  |
| ----------------- | ----------------------------- |
