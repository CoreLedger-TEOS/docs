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

* Keywords (mapped to properties) are surrounded by &lt;&gt;.  Therefore, avoid using &lt;&gt; in the template except for mappings or if you open one “&lt;” then close it by “&gt;”. If the application cannot find a mapping for a found keyword between &lt;&gt;, it will not change it. &#x20;
* If two keywords are together (ex: \&lt;ZIP&gt;\&lt;TOWN&gt;) think of a white space between them unless you want them to be one word: 6300Zug&#x20;
* Some keywords are available depending on the redemption method

#### Available for all redemption methods

| \&lt;referencecode&gt;                   | Redemption reference code                                               |
| ---------------------------------- | ----------------------------------------------------------------------- |
| \&lt;netamountpayoutunits&gt;            | How much the user really receives, taking into account all commissions  |
| \&lt;grossamountpayoutunits&gt;          | Gross amount = net amount + fees                                        |
| \&lt;currency&gt;                        | transfer currency                                                       |
| \&lt;grossamountinredeemassetsparks&gt;  | How much user pays in asset sparks in total                             |
| \&lt;grossamountinredeemassetunits&gt;   | How much user pays in asset units in total                              |
| \&lt;asset.name&gt;                      | Name of the asset                                                       |
| \&lt;asset.unitofmeasure&gt;             | Unit of measurement of the asset (kg, m3, and so on)                    |
| \&lt;redemptionmethod&gt;                | Name of the selected redemption method                                  |

#### Bank details&#x20;

Available only for redemption by bank transfer. If some of the optional properties values will be empty, nothing will be added to PDF

| \&lt;bank.name&gt;                                                                                                                                                                                                               | Beneficiary's bank name                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| \&lt;bank.country&gt;                                                                                                                                                                                                            | Beneficiary’s bank country                                    |
| \&lt;bank.stateOrRegion&gt;                                                                                                                                                                                                      | Beneficiary’s bank state or region                            |
| \&lt;bank.city&gt;                                                                                                                                                                                                               | Beneficiary’s bank city                                       |
| \&lt;bank.addressline&gt;                                                                                                                                                                                                        | Beneficiary’s bank address                                    |
| \&lt;bank.zipcode&gt;                                                                                                                                                                                                            | Beneficiary’s bank zip code                                   |
| \&lt;bank.iban&gt;                                                                                                                                                                                                               | Beneficiary 's account                                        |
| \&lt;bank.swift&gt;                                                                                                                                                                                                              | Beneficiary 's bank Swift code                                |
| \&lt;bank.bic&gt;                                                                                                                                                                                                                | Beneficiary 's bank BIC code (local bank identification code) |
| \&lt;intermediaryBank.name&gt;\&lt;intermediaryBank.country&gt;\&lt;intermediaryBank.city&gt;\&lt;intermediaryBank.stateOrRegion&gt; \&lt;intermediaryBank.addressline&gt; \&lt;intermediaryBank.zipcode&gt; \&lt;intermediaryBank.iban&gt;\&lt;intermediaryBank.swift&gt; | Intermediary (correspondent) bank details                     |

#### Beneficiary details&#x20;

Available for all redemption types.&#x20;

| \&lt;beneficiary.firstname&gt;    | Beneficiary's first name  |
| --------------------------- | ------------------------- |
| \&lt;beneficiary.lastname&gt;     | Beneficiary's last name   |
| \&lt;beneficiary.country&gt;      | Beneficiary's country     |
| \&lt;beneficiary.city&gt;         | Beneficiary's city        |
| \&lt;beneficiary.addressline&gt;  | Beneficiary's address     |
| \&lt;beneficiary.zipcode&gt;      | Beneficiary’s zip code    |

#### Beneficiary details&#x20;

Available for Bitcoin, Ethereum and ERC-20 redemptions&#x20;

| \&lt;walletaddress&gt;  | Beneficiary’s wallet address  |
| ----------------- | ----------------------------- |
