---
slug: /guides/spark-operations/spark-operations-page
---

# Spark operations

TEOS API consumers can search for spark operations associated with one or more blockchain addresses. This endpoint allows retrieving operations based on direction, asset, and pagination options.

&gt; Note: The multiple method signatures seen in the API documentation represent different combinations of optional parameters. In reality, this is **a single GET method** that supports flexible combinations of query parameters. The various signatures are simply different ways to call the same endpoint with different optional parameters.

A spark operation represents a transfer of a tokenized asset (a spark) between addresses, including information about the sender, receiver, transaction, and asset details.

📘 [Learn more](../../resources/using-the-teos-api/concepts/spark.md) about sparks.

#### **Request Endpoint**

`GET /odata/v1.0/SparkOperations/Search`

#### **Query Parameters**

| Name          | Type           | Description                                                               | Mandatory | Default |
| ------------- | -------------- | ------------------------------------------------------------------------- | --------- | ------- |
| addresses     | array\&lt;string&gt; | List of blockchain addresses to search operations for. Must not be empty. | ✅         | —       |
| direction     | string         | Filter operations by direction. Possible values: All, Received, Sent.     | ✅         | All     |
| uniqueAssetId | string         | Optional filter to limit operations by a specific asset ID.               | ❌         | —       |
| pageNumber    | integer        | Optional page number for pagination.                                      | ❌         | 1       |
| pageSize      | integer        | Optional page size for pagination.                                        | ❌         | 25      |

#### **Example Request**

```http
GET /odata/v1.0/SparkOperations/Search?
addresses=['0xa94f93dbfce5bb64603d245d4519e625c002fee5','0xeb9c947cbae36895b513a32755c18ab4eb6cf762']&
direction=All&
uniqueAssetId=0x237c8a00fee9024072cb0001&
pageNumber=1&
pageSize=10
```

#### **Response Body**

Content type: `application/json` — Returns a list of spark operations matching the query parameters.

| Parameter               | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| Sender                  | Blockchain address of the operation sender.          |
| Receiver                | Blockchain address of the operation receiver.        |
| SignedBy                | Address that signed the operation.                   |
| Sparks                  | Amount of sparks transferred.                        |
| Units                   | Quantity of asset units transferred.                 |
| BlockchainTransactionId | Identifier of the underlying blockchain transaction. |
| UniqueAssetId           | ID of the asset transferred.                         |
| AssetName               | Human-readable name of the asset.                    |
| UnitsOfMeasure          | Unit of measure for the asset quantity.              |
| DateTime                | Timestamp of the operation.                          |

#### **Example Response**

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "Sender", "Receiver", "SignedBy" are 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Sender": "0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1",
    "Receiver": "0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1",
    "SignedBy": "0xabe9e6c2b231ae427cd089b2b68be0a1dab565a1",
    "Sparks": "1000000000",
    "Units": "35",
    "BlockchainTransactionId": "0x748ac47e7226cae0e4e13373375f33ab9e4d43ef29d85d233162a7e7e913703b",
    "UniqueAssetId": "0x237c8a00fee9024072cb0001",
    "AssetName": "Iron",
    "UnitsOfMeasure": "kg",
    "DateTime": "2021-12-22T13:24:57"
  }
]
```

#### **Response Codes**

| Code | Description                              |
| ---- | ---------------------------------------- |
| 200  | Spark operations successfully retrieved. |
| 401  | Unauthorized.                            |
