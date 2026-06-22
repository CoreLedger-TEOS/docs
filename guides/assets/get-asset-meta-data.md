# Get asset meta data

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

This endpoint returns metadata stored on-chain and in the system for a given asset, including blockchain details, original document data, and amendment history.

📘 Learn more about assets -[ link](https://app.gitbook.com/o/ZaeNizhnU47lCcTSk7wB/s/8Gkk33l0DIIchfRT86LP/~/changes/1/resources/using-the-teos-api/concepts/asset)

#### Request Endpoint:

```http
GET /odata/v1.0/Assets({key})/MetaData
```

#### Parameters

| **Parameter** | **Type** | **Description**                                | **Mandatory** |
| ------------- | -------- | ---------------------------------------------- | ------------- |
| key           | string   | The requested asset identifier (UniqueAssetId) | ✅             |

#### Example Request:

```http
GET /odata/v1.0/Assets('0x86766979FD04114E1F90001')/MetaData
```

#### Response Body:

`application/json` — Asset metadata object

#### Example Response:

<pre class="language-json"><code class="lang-json"><strong>{
</strong>  "UniqueAssetId": "string",
  "AssetName": "string",
  "BlockchainName": "string",
  "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "BlockchainTransactionId": "string",
  "OriginalDocumentData": "string",
  "OriginalDocumentHash": "string",
  "ContractAddress": "string",
  "IssuerAddress": "string",
  "CreationBlockReference": "string",
  "Amendments": [
    {
      "AmendmentId": {
        "AssetId": "string",
        "CountValue": "string",
        "Value": "string"
      },
      "BlockReference": "string",
      "TransactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "BlockchainTransactionId": "string",
      "Hash": "string",
      "Data": "string"
    }
  ]
}
</code></pre>

#### Response Codes:

| **Code** | **Description**                                         |
| -------- | ------------------------------------------------------- |
| 200      | The asset meta data was successfully retrieved.         |
| 400      | The request is invalid. Error details are included.     |
| 401      | Unauthorized.                                           |
| 404      | The asset was not found for the provided uniqueAssetId. |

<br>
