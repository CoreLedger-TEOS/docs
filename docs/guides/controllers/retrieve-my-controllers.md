# Retrieve my controllers

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint retrieves all controllers associated with the current user. Controllers operate on the blockchain level and can restrict specific operations on certain data types.

The endpoint returns a paginated list of user controllers, with a maximum of 50 items per page. API key authentication is not supported for this endpoint.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
GET /odata/v1.0/Controllers/My
```

**Parameters:**\
No query parameters.

**Supported OData query options:**\
Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search

#### Response Body:

`application/json`  — Returns a list of user controllers with their details.

| **Parameter**                 | **Type** | **Description**                                     |
| ----------------------------- | -------- | --------------------------------------------------- |
| Id                            | string   | Controller ID                                       |
| Name                          | string   | Name of the controller                              |
| Description                   | string   | Description of the controller                       |
| EthereumAddress/ICPAddress    | string   | Blockchain address associated with the controller   |
| IssuerAddress                 | string   | Blockchain address of the issuer                    |
| WhitelistAddresses            | array    | List of whitelist addresses and their limits        |
| WhitelistAddresses\[].Address | string   |  Whitelisted blockchain address                     |
| WhitelistAddresses\[].Limit   | string   | Limit assigned to this address                      |
| BlacklistAddresses            | array    | List of blacklist addresses and their reasons       |
| BlacklistAddresses\[].Address | string   | Blacklisted blockchain address                      |
| BlacklistAddresses\[].Reason  | integer  | Reason code for blacklisting                        |
| CreatedInBlockchainOn         | datetime | Timestamp when controller was created in blockchain |
| CreatedBy                     | string   | ID of the user who created the controller           |
| CreatedOn                     | datetime | Timestamp when controller record was created        |
| UpdatedOn                     | datetime | Timestamp when controller record was last updated   |
| UpdatedBy                     | string   | ID of the user who last updated the controller      |

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address ("IssuerAddress", "WhetelistAddress" and etc) is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Name": "string",
    "Description": "string",
    "EthereumAddress": "string",
    "IssuerAddress": "string",
    "WhitelistAddresses": [
      {
        "Address": "string",
        "Limit": "string"
      }
    ],
    "BlacklistAddresses": [
      {
        "Address": "string",
        "Reason": 0
      }
    ],
    "CreatedInBlockchainOn": "2025-10-10T09:50:48.870Z",
    "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
    "CreatedOn": "2022-07-21T09:40:23.263Z",
    "UpdatedOn": "2022-07-21T09:40:23.263Z",
    "UpdatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
]
```

#### Responses:

| **Code** | **Description**                    |
| -------- | ---------------------------------- |
| 200      | Controllers successfully retrieved |
| 401      | Unauthorized                       |

<br />
