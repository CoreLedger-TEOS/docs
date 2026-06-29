---
description: Layout, order properties, purchased items table, bank transfer details
---

# Templates for purchase details and invoice details

<p className="doc-description">Layout, order properties, purchased items table, bank transfer details</p>

Please, prepare a word document which will follow the rules described below. You should send this template to CoreLedger manager to apply it. Based on this template PDF with order details of each order will be generated and attached to the email sent to user.

### How to prepare layout

You can use any layout of the document. You can insert your company logo, any header and footer. All texts and images will be used exactly like you'll provide in the template except for the properties variables (described below).

All colors will be used as is. So do not put any color if you do not need it

Any modification/extension of the template should be provided to CL.

### Properties variables

Using these variables, you will operate with the order specific data.

* Keywords (mapped to properties) are surrounded by \<\>.  Therefore, avoid using \<\> in the template except for mappings or if you open one “\<” then close it by “\>”. If the application cannot find a mapping for a found keyword between \<\>, it will not change it.
* If two keywords are together (ex: \<ZIP\>\<TOWN\>) think of a white space between them unless you want them to be one word: 6300Zug



| \<name\>              | First + Last names of the Invoice Address of a Purchase       |
| -------------------- | ------------------------------------------------------------- |
| \<addressline\>       | Address Line of the Invoice Address of a Purchase             |
| \<ZIP\>               | ZipCode of the Invoice Address of a Purchase                  |
| \<town\>              | City of the Invoice Address of a Purchase                     |
| \<country\>           | Country of the Invoice Address of a Purchase                  |
| \<paymentreference\>  | JSON\[“reference”] of Details property of a Purchase          |
| \<currentdate\>       | Current Date                                                  |
| \<duedate\>           | The current date + 30 days                                    |
| \<total\>             | Calculated total amount of all units of all purchased assets  |

### Purchased items table

*   You can use the table for listing the purchased items. The template document may have multiple tables. To find the appropriate one to list the purchased items, please set the description of the table to “Purchased Items”:


![](/img/wlp/admin-user-guide-portal-configuration-features-configuration-purchase-assets-and-featured-asset-templates-for-purchase-details-and-invoice-details-01.png)

_How to create the table for listing the purchased items_



* The first row of the table should be the table’s header in whatever language and it will not be touched.
* The second row will have mappings keywords\<-> props of purchased item and will be replaced by a real data.
* No third row is required
* Cell should contain only one keyword, nothing else
* Keywords to the properties of purchased item mappings:

| \<pos\>                | Index (ex. 1 2 3 etc..                                 |
| --------------------- | ------------------------------------------------------ |
| \<asset.name\>         | The name of the purchased asset                        |
| \<units\>              | The number of purchased units of the asset             |
| \<unit.price\>         | The price for a single unit of the asset               |
| \<units.total.price\>  | The total price for all units of the asset <br /> |

![](/img/wlp/admin-user-guide-portal-configuration-features-configuration-purchase-assets-and-featured-asset-templates-for-purchase-details-and-invoice-details-02.png)

_Example of the table_

### Bank Transfer details

* All fields related to Bank transfer details are filled in from [Portal configuration file](./payment-methods-configuration.md#bank-transfer-payment-method). You can use them in template or just provide static data.

| \<beneficiary.name\>         | Company name, mandatory field                       |
| --------------------------- | --------------------------------------------------- |
| \<beneficiary.bankname\>     | Beneficiary's bank name, mandatory field            |
| \<beneficiary.account\>      | IBAN or another local alternative, mandatory field  |
| \<beneficiary.bankaddress\>  | Beneficiary’s bank address, mandatory field         |
| \<beneficiary.bic\>          | Beneficiary 's bank BIC code, optional field        |
| \<beneficiary.swift\>        | Beneficiary 's bank Swift code, mandatory field     |
| \<intermediary.bankname\>    | Intermediary’s bank name, optional field            |
| \<intermediary.swift\>       | Intermediary’s bank Swift code, optional field      |
| \<intermediary.account\>     | Intermediary's account, optional field              |

You can use additional fields to describe the telephone number for consultation, the company's website and other data. Additional field names should not contain "\<\>" they will be added automatically
