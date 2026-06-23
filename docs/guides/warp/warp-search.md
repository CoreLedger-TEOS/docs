# Warp Search

This endpoint initiates a warp search, returning a search identifier that can be used to retrieve possible chains of supplies for exchanging sparks between offered and desired assets.

A warp is a chain of supplies automatically determined on-the-fly using a mathematical optimization algorithm, where the available supplies on the TEOS platform act as the chain links.

📘 [Learn more](../../resources/using-the-teos-api/concepts/warp/index.md) about warps.

#### Request Endpoint

```http
POST /odata/v1.0/Warps/Search
```

#### Parameters

No query parameters.

#### Request Body

**Content type:** `application/json` — Parameters defining the warp search.

| **Parameter**  | **Type** | **Description**                                                                                             | **Mandatory** |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| offeredAssetId | string   | Unique identifier of the asset being offered for exchange.                                                  | ✅             |
| offeredAmount  | string   | Amount of sparks of the offered asset to pay. Only one of offeredAmount or desiredAmount should be set.     | ✅             |
| desiredAssetId | string   | Unique identifier of the asset desired in exchange.                                                         | ✅             |
| desiredAmount  | string   | Amount of sparks of the desired asset to receive. Only one of offeredAmount or desiredAmount should be set. | ✅             |
| signerAddress  | string   | Public address of the wallet initiating the search.                                                         | ✅             |
| targetAddress  | string   | Public address of the wallet that will receive the resulting assets.                                        | ✅             |

#### Example Request Body

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address ("signerAddress", "targetAddress" and etc) is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "offeredAssetId": "0x827CB8534CFABA240CC90001",
  "offeredAmount": "4",
  "desiredAssetId": "0x86766979FD04114E1F90001",
  "desiredAmount": "0",
  "signerAddress": "0x336302d2f6f14d440837009724a9145e6103d6c7",
  "targetAddress": "0xa239d973e3622aeabee9b472056affd08f3abdda"
```

#### Response Body

**Content type:** `application/json` — Returns the warp search identifier.

| **Parameter** | **Description**                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| string        | Unique identifier of the initiated warp search. This ID can be used to track the warp search results or execution. |

#### Example Response Body

```json
"3fa85f64-5717-4562-b3fc-2c963f66afa6"
```

#### Response Codes

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 202      | The warp search was successfully initiated.         |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized.                                       |

<br />
