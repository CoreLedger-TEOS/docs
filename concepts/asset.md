# Asset

Every artifact, specific tangible value, on blockchain within the CoreLedger TEOS platform is referred to a "Digital asset" or simply "Asset".

Assets can be measurable if there is a need to operate with the units of the asset, for example, steel, man-hours or currencies.

Some assets are not supposed to have any quantity, for example, an audit report or a document notarized on blockchain does not need quantity, then it needs only a unique digital id - the unique asset id in TEOS platform.

Asset can be described in a very detailed way by filling its properties in TEOS platform with the help of TEOS API. These properties are categorized and placed within their categories (or sections) when forming a JSON structure to be saved in TEOS. There are general and custom properties.

#### General properties

```json
{
  "Author": "0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1",
  "Name": "Gold",
  "Description": "1oz Gold bars",
  "LanguageCode": "en",
  "JurisdictionCode": "CH",
  "UnitOfMeasureCode": "kg",
  "CurrencyCode": "str",
  "SparkFactor": "1000000",
  "SparkFactorModifier": "{\"type\":\"FORMULA\",\"start\":\"2021-08-12T14:01:52Z\",\"t\":\"1d\",\"f\":\"1\"}",
  "AssetClassCode": "A017",
}


```

All of these properties must have a value. Some of them(Author, Name, Description, LanguageCode, JurisdictionCode) are mandatory and has to be filled in, others are optional and filled in with a default values when left empty. General properties are placed in the section called "General"

Default values for properties if not provided:

* UnitOfMeasureCode: "token"
* SparkFactor: "1"
* SparkFactorModifier: {"type":"FORMULA","start":"{current-datetime}","t":"1d","f":"1"}
* AssetClassCode: "A017"

{% hint style="info" %}
#### CurrencyCode definition rules

In case asset is created with AssetClassCode = "A013", CurrencyCode is mandatory and UnitOfMeasureCode must be left blank

In case asset is created with any other AssetClassCode = "A013", CurrencyCode can't be set
{% endhint %}

#### Custom Properties

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

Default values for optional properties(the rest are mandatory):

* Type: "STRING"
* SectionsPath: "\[General]"
* SectionsPathNames: "\[GENERAL]"

_SectionsPath_ define the path through the sections where the property(in API it is called "Custom definition item") is placed within the JSON document. For the example mentioned above, the property "apitutorial" is placed in a section "manuals", which in turn is placed in the section "documentation". _SectionsPathNames_ define labels for the sections.

Possible types of properties: \[ STRING, DECIMAL, BOOLEAN, NUMBER, VALUERANGE, DATE, DATETIME, ASSETCLASS, COUNTRY, CURRENCY, LANGUAGE, UNITOFMEASURE, TIME, TEXT, ADDRESS ]

#### Asset Classes

| ID   | (en)                     |
| ---- | ------------------------ |
| A013 | Cash and Cash equivalent |
| A103 | Commodity                |
| A104 | Intangible assets        |
| A022 | Financial products       |
| A031 | Services                 |
| A041 | Real estate              |
| A016 | Other assets             |
| A017 | Document                 |

#### Asset identificators

* AssetId and LedgerId - assetId is unique within Blockchain network, combination of assetId and ledgerId is unique through all environments and Blockchain networks
* UniqueAssetId - unique asset id through all environments and Blockchain networks, we strongly recommend to use this id
