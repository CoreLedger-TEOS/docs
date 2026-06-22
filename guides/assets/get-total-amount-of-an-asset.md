# Get total amount of an asset

An asset, often referred to as a **token,** represents a digital artifact on the TEOS platform that can be stored, managed, and verified on blockchain.

This endpoint returns both the total number of Sparks and the total number of natural units associated with the asset identified by the provided uniqueAssetId.

📘 [Learn more ](../../resources/using-the-teos-api/concepts/spark.md)about natural units of measure and Sparks.

#### Request Endpoint:

```http
GET /odata/v1.0/Assets({key})/TotalAmount
```

#### Parameters

| **Parameter** | **Type** | **Description**            | **Mandatory** |
| ------------- | -------- | -------------------------- | ------------- |
| key           | string   | UniqueAssetId of the asset | ✅             |

Example Request:

```http
GET /odata/v1.0/Assets('0x86766979FD04114E1F90001')/TotalAmount
```

#### Response Body:

`application/json` — Returns total Sparks and Units

| **Parameter** | **Type** | **Description**                             |
| ------------- | -------- | ------------------------------------------- |
| TotalSparks   | string   | Total number of Sparks for the asset        |
| TotalUnits    | string   | Total number of natural units for the asset |

#### Example Response:

```json
{
  "TotalSparks": "1000000",
  "TotalUnits": "1000"
}
```

#### Response Codes:

| **Code** | **Description**                                           |
| -------- | --------------------------------------------------------- |
| 200      | The asset's total amount was successfully retrieved.      |
| 400      | The request is invalid. Error details are included.       |
| 401      | Unauthorized.                                             |
| 404      | The asset was not found using the provided uniqueAssetId. |

<br>
