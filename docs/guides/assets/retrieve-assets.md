# Retrieve assets

An asset, often referred to as a token, represents a digital artifact on the TEOS platform that can be stored, managed, and verified on the blockchain.

This endpoint retrieves a list of assets based on the provided query parameters. It supports forced pagination, with a maximum of 50 items per page, allowing clients to efficiently navigate through large sets of assets.

📘 [Learn more](../../resources/using-the-teos-api/concepts/asset.md) about assets.

#### Request Endpoint:

```http
GET /odata/v1.0/Assets
```

#### Parameters

No top-level parameters.\
Supports OData query options: $filter, $expand, $select, $orderby, $top, $skip, $count.

⚠️ Current limitations: The properties BlockchainHash, ControllerAddress, CreatedInBlockchainOn, AmendedInBlockchainOn, and State cannot be used in $filter.

#### **Example Queries**

```http
GET /Assets?$filter=Id eq '0x5f1e6522bd3b65be880007' or Id eq '0x86766979FD04114E1F90001'&$select=Name,Author
```

```http
GET /Assets?$filter=Id in ('0x5f1e6522bd3b65be880007','0x86766979FD04114E1F90001')
```

```http
GET /Assets?$count=true&$select=Name&$filter=startsWith(Name, 'k')&$skip=3
```

#### Response Body:

`application/json` — Returns a list of asset objects.

**Asset Object Fields**

| **Parameter**         | **Description**                                       |
| --------------------- | ----------------------------------------------------- |
| Id                    | The unique asset ID.                                  |
| Author                | The address of the asset creator.                     |
| Name                  | The name of the asset.                                |
| Description           | Description of the asset.                             |
| LanguageCode          | Default language code (ISO 2).                        |
| JurisdictionCode      | Jurisdiction country code (ISO 2).                    |
| UnitOfMeasureCode     | Unit of measure of the asset.                         |
| CurrencyCode          | Currency code (ISO 4217).                             |
| SparkFactor           | Number of Sparks per unit.                            |
| SparkFactorModifier   | Formula defining Spark factor.                        |
| AssetClassCode        | Class of the asset.                                   |
| CustomDefinitionItems | List of custom properties.                            |
| AssetLinkIds          | List of linked asset IDs.                             |
| CreatedInBlockchainOn | Timestamp when asset was activated in blockchain.     |
| AmendedInBlockchainOn | Timestamp of last blockchain amendment.               |
| BlockchainHash        | Blockchain hash of asset documentation.               |
| DocumentDbHash        | Hash of asset documentation in TEOS database.         |
| TransactionId         | Transaction ID where asset was written to blockchain. |
| ControllerAddress     | Controller address for the asset.                     |
| Translations          | List of asset translations by language.               |
| State                 | Current state of the asset<br /><br />          |

**CustomDefinitionItems Fields**

| **Parameter**     | **Description**                           |
| ----------------- | ----------------------------------------- |
| Key               | Unique identifier of the custom property. |
| Name              | Name of the custom property.              |
| Type              | Type of the custom property (e.g., TEXT). |
| Value             | Value of the property.                    |
| SectionsPath      | JSON path where property is located.      |
| SectionsPathNames | Labels for sections in JSON path.         |

**Translations Fields**

| **Parameter**         | **Description**                             |
| --------------------- | ------------------------------------------- |
| LanguageCode          | Language code of translation (ISO 2).       |
| Name                  | Translated asset name.                      |
| Description           | Translated asset description.               |
| CustomDefinitionItems | Custom properties in the specific language. |

#### Example Response Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Author" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, the "Author" has 63 characters.

```json
[
  {
    "Id": "0x5db616f7e9aaa6fce9b0001",
    "Author": "0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1",
    "Name": "Gold",
    "Description": "1oz Gold bars",
    "LanguageCode": "en",
    "JurisdictionCode": "CH",
    "UnitOfMeasureCode": "kg",
    "CurrencyCode": "str",
    "SparkFactor": "1000000",
    "SparkFactorModifier": "{\"type\":\"FORMULA\",\"start\":\"2021-08-12T14:01:52Z\",\"t\":\"1d\",\"f\":\"1\"}",
    "AssetClassCode": "\"A017\" - Document",
    "CustomDefinitionItems": [
      {
        "Key": "apitutorial",
        "Name": "API Tutorial",
        "Type": "TEXT",
        "Value": "My Private documentation: lorem ipsum",
        "SectionsPath": "[documentation][manuals]",
        "SectionsPathNames": "[Documentation][Manuals]"
      }
    ],
    "AssetLinkIds": ["string"],
    "CreatedInBlockchainOn": "2021-05-18T15:23:12.5246259+02:00",
    "AmendedInBlockchainOn": "2021-05-18T15:23:12.5246259+02:00",
    "BlockchainHash": "0x263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b",
    "DocumentDbHash": "263865a752660b9dd6b9377df57466d1348661aa9a49d5dde8e9d16dddddf69b",
    "TransactionId": "C0D34D73-6FD3-40F2-A7E1-08D9412448F7",
    "ControllerAddress": "string",
    "Translations": [
      {
        "LanguageCode": "en",
        "Name": "Gold",
        "Description": "1oz Gold bars",
        "CustomDefinitionItems": [
          {
            "Key": "apitutorial",
            "Name": "API Tutorial",
            "Type": "TEXT",
            "Value": "My Private documentation: lorem ipsum",
            "SectionsPath": "[documentation][manuals]",
            "SectionsPathNames": "[Documentation][Manuals]"
          }
        ]
      }
    ],
    "State": "CreatedInTeos"
  }
]
```

#### Response Codes

| **Code** | **Description**                |
| -------- | ------------------------------ |
| 200      | Assets successfully retrieved. |
| 400      | Bad Request.                   |
| 401      | Unauthorized.                  |

<br />
