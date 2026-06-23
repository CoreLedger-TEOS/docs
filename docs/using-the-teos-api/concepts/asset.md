# Asset

**Every artifact, specific tangible value, on blockchain** within the CoreLedger TEOS platform is referred to a **"Digital asset" or** simply **"Asset"**.

Assets can be measurable if there is a need to operate with the units of the asset, for example, steel, man-hours or currencies.

Some assets are not supposed to have any quantity, for example, an audit report or a document notarized on blockchain does not need quantity, then it needs only a unique digital id - the unique asset id in TEOS platform.

Asset can be described in a very detailed way by filling its properties in TEOS platform with the help of TEOS API. These properties are categorized and placed within their categories (or sections) when forming a JSON structure to be saved in TEOS API. There are general and custom properties.

TEOS user can link assets and unlink them, change asset with the help of amendments written to blockchain, exchange them with the help of supplies. All of these operations are possible after asset is created and written to blockchain.

## Creating asset

### General properties

For EVM-compatible networks (e.g. Sparknet, Ethereum, and Polygon), the "Author" has 42 characters. In non-EVM networks, address length may be different. For example, on Internet Computer, the "Author" (principal identifier) has 63 characters.&#x20;

```json
{
  "Author": "itk7v-ihlxk-ktdrh-fcnst-vkoou-orj77-52ogl-jqwj5-zpfdv-az3lr-xqe",
  "Name": "Gold",
  "Description": "1oz Gold bars",
  "LanguageCode": "en",
  "JurisdictionCode": "CH",
  "UnitOfMeasureCode": "kg",
  "CurrencyCode": "",
  "SparkFactor": "1000000",
  "SparkFactorModifier": "{\"type\":\"FORMULA\",\"start\":\"2021-08-12T14:01:52Z\",\"t\":\"1d\",\"f\":\"1\"}",
  "AssetClassCode": "A017",
}
```

All of these properties must have a value. Some of them (Author, Name, Description, LanguageCode, JurisdictionCode) are mandatory and has to be filled in, others are optional and filled in with a default values when left empty. General properties are placed in the section called "General"

Default values for properties if not provided:

* UnitOfMeasureCode: "token"
* SparkFactor: "1"
* SparkFactorModifier: &#123;"type":"FORMULA","start":"&#123;current-datetime&#125;","t":"1d","f":"1"&#125;
* AssetClassCode: "A017"

:::info
**CurrencyCode definition rules**

In case asset is created with AssetClassCode = "A013", CurrencyCode is mandatory and UnitOfMeasureCode must be left blank

In case asset is created with any other AssetClassCode, CurrencyCode can't be set
:::

#### Asset Classes

<table><thead><tr><th width="164.5">ID</th><th>(en)</th></tr></thead><tbody><tr><td>A013</td><td>Cash and Cash equivalent</td></tr><tr><td>A103</td><td>Commodity</td></tr><tr><td>A104</td><td>Intangible assets</td></tr><tr><td>A022</td><td>Financial products</td></tr><tr><td>A031</td><td>Services</td></tr><tr><td>A041</td><td>Real estate</td></tr><tr><td>A016</td><td>Other assets</td></tr><tr><td>A017</td><td>Document</td></tr></tbody></table>

### Custom properties

```json
{
    "Key": "apitutorial",
    "Name": "API Tutorial",
    "Type": "TEXT",
    "Value": "My Private documentation: lorem ipsum",
    "SectionsPath": "[documentation][manuals]",
    "SectionsPathNames": "[Documentation][Manuals]"
}
```

Default values for optional properties (the rest are mandatory):

* Type: "STRING"
* SectionsPath: "\[General]"
* SectionsPathNames: "\[GENERAL]"

_SectionsPath_ define the path through the sections where the property (in TEOS API it is called "Custom definition item") is placed within the JSON document. For the example mentioned above, the property "apitutorial" is placed in a section "manuals", which in turn is placed in the section "documentation". _SectionsPathNames_ define labels for the sections.

Possible types of properties: \[ STRING, DECIMAL, BOOLEAN, NUMBER, VALUERANGE, DATE, DATETIME, ASSETCLASS, COUNTRY, CURRENCY, LANGUAGE, UNITOFMEASURE, TIME, TEXT, ADDRESS ]

## After asset is created

After asset is created in the TEOS Platform and finally in the blockchain, it gets the list of additional technical properties which help to deal with this asset.

| Id                    | &lt;p&gt;string&lt;br /&gt;example: 0x5db616f7e9aaa6fce9b0001&lt;/p&gt;&lt;p&gt;The UniqueAssetId of the asset&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Author\*              | &lt;p&gt;string&lt;br /&gt;example (Hex Address of the asset issuer): &lt;/p&gt;&lt;p&gt;-EVM-compatible networks (e.g. Sparknet, Ethereum, and Polygon): 0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1&lt;/p&gt;&lt;p&gt;-Internet Computer network: itk7v-ihlxk-ktdrh-fcnst-vkoou-orj77-52ogl-jqwj5-zpfdv-az3lr-xqe&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                   |
| Name\*                | &lt;p&gt;string&lt;br /&gt;minLength: 1&lt;br /&gt;example: Gold&lt;/p&gt;&lt;p&gt;Name of the asset.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Description\*         | &lt;p&gt;string&lt;br /&gt;minLength: 1&lt;br /&gt;example: 1oz Gold bars&lt;/p&gt;&lt;p&gt;Description of the asset.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| LanguageCode\*        | &lt;p&gt;string&lt;br /&gt;maxLength: 2&lt;br /&gt;minLength: 1&lt;br /&gt;example: en&lt;/p&gt;&lt;p&gt;The default language code of the asset (ISO 2).&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| JurisdictionCode\*    | &lt;p&gt;string&lt;br /&gt;maxLength: 5&lt;br /&gt;minLength: 1&lt;br /&gt;example: CH&lt;/p&gt;&lt;p&gt;The jurisdiction country code (ISO 2).&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| UnitOfMeasureCode     | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: kg&lt;/p&gt;&lt;p&gt;The asset's unit of measure code.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CurrencyCode          | &lt;p&gt;string&lt;br /&gt;maxLength: 3&lt;br /&gt;nullable: true&lt;/p&gt;&lt;p&gt;Currency code in ISO 4217 format&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SparkFactor           | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: 1000000&lt;/p&gt;&lt;p&gt;Defines how many Sparks equal 1 unit of measure.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| SparkFactorModifier   | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: &#123;"type":"FORMULA","start":"2021-08-12T14:01:52Z","t":"1d","f":"1"&#125;&lt;/p&gt;&lt;p&gt;Defines Sparks Factor formula.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| AssetClassCode        | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: "A017" - Document&lt;/p&gt;&lt;p&gt;Defines the class of asset.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CustomDefinitionItems | List of provided custom properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| AssetLinkIds          | List of the links to other assets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CreatedInBlockchainOn | &lt;p&gt;string($date-time)&lt;br /&gt;nullable: true&lt;br /&gt;example: 2021-05-18T15:23:12.5246259+02:00&lt;/p&gt;&lt;p&gt;The timestamp of the block, in which the asset was activated. null, if the asset is not yet created in blockchain&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| AmendedInBlockchainOn | &lt;p&gt;string($date-time)&lt;br /&gt;nullable: true&lt;br /&gt;example: 2021-05-18T15:23:12.5246259+02:00&lt;/p&gt;&lt;p&gt;The timestamp of the block of the last amendment of the asset. null, if the asset was never amended&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| BlockchainHash        | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: &lt;/p&gt;&lt;p&gt;-EVM-compatible networks: 0x263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b&lt;/p&gt;&lt;p&gt;-ICP network: 015e80cd2db039cac2e0282764960330b709cd0a0656918ddc57d94822bc6965&lt;/p&gt;&lt;p&gt;Hash of the asset documentation, stored in blockchain&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                   |
| DocumentDbHash        | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: 263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b&lt;/p&gt;&lt;p&gt;Hash of the asset documentation, stored in TEOS&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TransactionId         | &lt;p&gt;string($uuid)&lt;br /&gt;example: C0D34D73-6FD3-40F2-A7E1-08D9412448F7&lt;/p&gt;&lt;p&gt;The id of the transaction where the asset was written to blockchain&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Translations          | &lt;p&gt;[&lt;br /&gt;nullable: true&lt;/p&gt;&lt;p&gt;Translations navigation property&lt;/p&gt;&lt;p&gt;&#123;&lt;/p&gt;&lt;table data-header-hidden&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;LanguageCode*&lt;/td&gt;&lt;td&gt;&lt;p&gt;string&lt;br /&gt;maxLength: 2&lt;br /&gt;minLength: 1&lt;br /&gt;example: en&lt;/p&gt;&lt;p&gt;language code of the asset translation (ISO 2).&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;&lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: Gold&lt;/p&gt;&lt;p&gt;Name of the asset.&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Description&lt;/td&gt;&lt;td&gt;&lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: 1oz Gold bars&lt;/p&gt;&lt;p&gt;Translated asset description&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;CustomDefinitionItems&lt;/td&gt;&lt;td&gt;list of definition items in the specific language&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&#125;]&lt;/p&gt; |
|                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| LanguageCode\*        | &lt;p&gt;string&lt;br /&gt;maxLength: 2&lt;br /&gt;minLength: 1&lt;br /&gt;example: en&lt;/p&gt;&lt;p&gt;language code of the asset translation (ISO 2).&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Name                  | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: Gold&lt;/p&gt;&lt;p&gt;Name of the asset.&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Description           | &lt;p&gt;string&lt;br /&gt;nullable: true&lt;br /&gt;example: 1oz Gold bars&lt;/p&gt;&lt;p&gt;Translated asset description&lt;/p&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CustomDefinitionItems | list of definition items in the specific language                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Asset ids

* AssetId and LedgerId - assetId is unique within Blockchain network, combination of assetId and ledgerId is unique through all environments and Blockchain networks
* UniqueAssetId - unique asset id through all environments and Blockchain networks, we strongly recommend to use this id

## Asset translation

When asset is retrieved, it comes with asset default language in the root of the asset object. Default language is defined by TEOS user when the asset is created. In order to get the list of all available translations to all available languages which were added for the asset, section "Translations" must be retrieved. Check its description in the asset model [above](./asset.md#after-asset-is-created). Following asset data can be translated to other languages:

* name
* description
* all custom properties (section CustomDefinitionItems), for some property types both values and property names can be translated, for some only property names
