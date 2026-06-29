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

* Keywords (mapped to properties) are surrounded by &lt;&gt;.  Therefore, avoid using &lt;&gt; in the template except for mappings or if you open one “&lt;” then close it by “&gt;”. If the application cannot find a mapping for a found keyword between &lt;&gt;, it will not change it.
* If two keywords are together (ex: \&lt;ZIP&gt;\&lt;TOWN&gt;) think of a white space between them unless you want them to be one word: 6300Zug



| \&lt;name&gt;              | First + Last names of the Invoice Address of a Purchase       |
| -------------------- | ------------------------------------------------------------- |
| \&lt;addressline&gt;       | Address Line of the Invoice Address of a Purchase             |
| \&lt;ZIP&gt;               | ZipCode of the Invoice Address of a Purchase                  |
| \&lt;town&gt;              | City of the Invoice Address of a Purchase                     |
| \&lt;country&gt;           | Country of the Invoice Address of a Purchase                  |
| \&lt;paymentreference&gt;  | JSON\[“reference”] of Details property of a Purchase          |
| \&lt;currentdate&gt;       | Current Date                                                  |
| \&lt;duedate&gt;           | The current date + 30 days                                    |
| \&lt;total&gt;             | Calculated total amount of all units of all purchased assets  |

### Purchased items table

*   You can use the table for listing the purchased items. The template document may have multiple tables. To find the appropriate one to list the purchased items, please set the description of the table to “Purchased Items”:


![](/img/wlp/admin-user-guide-portal-configuration-features-configuration-purchase-assets-and-featured-asset-templates-for-purchase-details-and-invoice-details-01.png)

_How to create the table for listing the purchased items_



* The first row of the table should be the table’s header in whatever language and it will not be touched.
* The second row will have mappings keywords&lt;-> props of purchased item and will be replaced by a real data.
* No third row is required
* Cell should contain only one keyword, nothing else
* Keywords to the properties of purchased item mappings:

| \&lt;pos&gt;                | Index (ex. 1 2 3 etc..                                 |
| --------------------- | ------------------------------------------------------ |
| \&lt;asset.name&gt;         | The name of the purchased asset                        |
| \&lt;units&gt;              | The number of purchased units of the asset             |
| \&lt;unit.price&gt;         | The price for a single unit of the asset               |
| \&lt;units.total.price&gt;  | The total price for all units of the asset <br /> |

![](/img/wlp/admin-user-guide-portal-configuration-features-configuration-purchase-assets-and-featured-asset-templates-for-purchase-details-and-invoice-details-02.png)

_Example of the table_

### Bank Transfer details

* All fields related to Bank transfer details are filled in from [Portal configuration file](./payment-methods-configuration.md#bank-transfer-payment-method). You can use them in template or just provide static data.

| \&lt;beneficiary.name&gt;         | Company name, mandatory field                       |
| --------------------------- | --------------------------------------------------- |
| \&lt;beneficiary.bankname&gt;     | Beneficiary's bank name, mandatory field            |
| \&lt;beneficiary.account&gt;      | IBAN or another local alternative, mandatory field  |
| \&lt;beneficiary.bankaddress&gt;  | Beneficiary’s bank address, mandatory field         |
| \&lt;beneficiary.bic&gt;          | Beneficiary 's bank BIC code, optional field        |
| \&lt;beneficiary.swift&gt;        | Beneficiary 's bank Swift code, mandatory field     |
| \&lt;intermediary.bankname&gt;    | Intermediary’s bank name, optional field            |
| \&lt;intermediary.swift&gt;       | Intermediary’s bank Swift code, optional field      |
| \&lt;intermediary.account&gt;     | Intermediary's account, optional field              |

You can use additional fields to describe the telephone number for consultation, the company's website and other data. Additional field names should not contain "&lt;&gt;" they will be added automatically
