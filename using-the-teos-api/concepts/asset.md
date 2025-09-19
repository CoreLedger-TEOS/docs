# Asset

**Every artifact, specific tangible value, on blockchain** within the CoreLedger TEOS platform is referred to a **"Digital asset" or** simply **"Asset"**.

Assets can be measurable if there is a need to operate with the units of the asset, for example, steel, man-hours or currencies.

Some assets are not supposed to have any quantity, for example, an audit report or a document notarized on blockchain does not need quantity, then it needs only a unique digital id - the unique asset id in TEOS platform.

Asset can be described in a very detailed way by filling its properties in TEOS platform with the help of TEOS API. These properties are categorized and placed within their categories (or sections) when forming a JSON structure to be saved in TEOS API. There are general and custom properties.

TEOS user can link assets and unlink them, change asset with the help of amendments written to blockchain, exchange them with the help of supplies. All of these operations are possible after asset is created and written to blockchain.

## Creating asset

### General properties

For EVM-compatible networks (e.g. Sparknet, Ethereum, and Polygon), the "Author" has 42 characters. In non-EVM networks, address length may be different. For example, on Internet Computer, the "Author" has 63 characters. Your developer identity will have a principal identifier in the format `itk7v-ihlxk-ktdrh-fcnst-vkoou-orj77-52ogl-jqwj5-zpfdv-az3lr-xqe`.

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
* SparkFactorModifier: {"type":"FORMULA","start":"{current-datetime}","t":"1d","f":"1"}
* AssetClassCode: "A017"

{% hint style="info" %}
**CurrencyCode definition rules**

In case asset is created with AssetClassCode = "A013", CurrencyCode is mandatory and UnitOfMeasureCode must be left blank

In case asset is created with any other AssetClassCode, CurrencyCode can't be set
{% endhint %}

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

| Id                    | <p>string<br>example: 0x5db616f7e9aaa6fce9b0001</p><p>The UniqueAssetId of the asset</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Author\*              | <p>string<br>example (Hex Address of the asset issuer): </p><p>-EVM-compatible networks (e.g. Sparknet, Ethereum, and Polygon): 0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1</p><p>-Internet Computer network: itk7v-ihlxk-ktdrh-fcnst-vkoou-orj77-52ogl-jqwj5-zpfdv-az3lr-xqe</p>                                                                                                                                                                                                                                                                                                                                                                                                   |
| Name\*                | <p>string<br>minLength: 1<br>example: Gold</p><p>Name of the asset.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Description\*         | <p>string<br>minLength: 1<br>example: 1oz Gold bars</p><p>Description of the asset.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| LanguageCode\*        | <p>string<br>maxLength: 2<br>minLength: 1<br>example: en</p><p>The default language code of the asset (ISO 2).</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| JurisdictionCode\*    | <p>string<br>maxLength: 5<br>minLength: 1<br>example: CH</p><p>The jurisdiction country code (ISO 2).</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| UnitOfMeasureCode     | <p>string<br>nullable: true<br>example: kg</p><p>The asset's unit of measure code.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CurrencyCode          | <p>string<br>maxLength: 3<br>nullable: true</p><p>Currency code in ISO 4217 format</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SparkFactor           | <p>string<br>nullable: true<br>example: 1000000</p><p>Defines how many Sparks equal 1 unit of measure.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| SparkFactorModifier   | <p>string<br>nullable: true<br>example: {"type":"FORMULA","start":"2021-08-12T14:01:52Z","t":"1d","f":"1"}</p><p>Defines Sparks Factor formula.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| AssetClassCode        | <p>string<br>nullable: true<br>example: "A017" - Document</p><p>Defines the class of asset.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CustomDefinitionItems | List of provided custom properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| AssetLinkIds          | List of the links to other assets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CreatedInBlockchainOn | <p>string($date-time)<br>nullable: true<br>example: 2021-05-18T15:23:12.5246259+02:00</p><p>The timestamp of the block, in which the asset was activated. null, if the asset is not yet created in blockchain</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| AmendedInBlockchainOn | <p>string($date-time)<br>nullable: true<br>example: 2021-05-18T15:23:12.5246259+02:00</p><p>The timestamp of the block of the last amendment of the asset. null, if the asset was never amended</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| BlockchainHash        | <p>string<br>nullable: true<br>example: </p><p>-EVM-compatible networks: 0x263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b</p><p>-ICP network: 015e80cd2db039cac2e0282764960330b709cd0a0656918ddc57d94822bc6965</p><p>Hash of the asset documentation, stored in blockchain</p>                                                                                                                                                                                                                                                                                                                                                                                   |
| DocumentDbHash        | <p>string<br>nullable: true<br>example: 263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b</p><p>Hash of the asset documentation, stored in TEOS</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TransactionId         | <p>string($uuid)<br>example: C0D34D73-6FD3-40F2-A7E1-08D9412448F7</p><p>The id of the transaction where the asset was written to blockchain</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Translations          | <p>[<br>nullable: true</p><p>Translations navigation property</p><p>{</p><table data-header-hidden><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>LanguageCode*</td><td><p>string<br>maxLength: 2<br>minLength: 1<br>example: en</p><p>language code of the asset translation (ISO 2).</p></td></tr><tr><td>Name</td><td><p>string<br>nullable: true<br>example: Gold</p><p>Name of the asset.</p></td></tr><tr><td>Description</td><td><p>string<br>nullable: true<br>example: 1oz Gold bars</p><p>Translated asset description</p></td></tr><tr><td>CustomDefinitionItems</td><td>list of definition items in the specific language</td></tr></tbody></table><p>}]</p> |
|                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| LanguageCode\*        | <p>string<br>maxLength: 2<br>minLength: 1<br>example: en</p><p>language code of the asset translation (ISO 2).</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Name                  | <p>string<br>nullable: true<br>example: Gold</p><p>Name of the asset.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Description           | <p>string<br>nullable: true<br>example: 1oz Gold bars</p><p>Translated asset description</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CustomDefinitionItems | list of definition items in the specific language                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Asset ids

* AssetId and LedgerId - assetId is unique within Blockchain network, combination of assetId and ledgerId is unique through all environments and Blockchain networks
* UniqueAssetId - unique asset id through all environments and Blockchain networks, we strongly recommend to use this id

## Asset translation

When asset is retrieved, it comes with asset default language in the root of the asset object. Default language is defined by TEOS user when the asset is created. In order to get the list of all available translations to all available languages which were added for the asset, section "Translations" must be retrieved. Check its description in the asset model [above](asset.md#after-asset-is-created). Following asset data can be translated to other languages:

* name
* description
* all custom properties (section CustomDefinitionItems), for some property types both values and property names can be translated, for some only property names
