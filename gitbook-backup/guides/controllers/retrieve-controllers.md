# Retrieve controllers

This endpoint retrieves all controllers or a filtered subset based on query parameters.

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them. They can include whitelist and blacklist addresses to control who can interact with specific blockchain assets or operations.\
Using this endpoint, you can retrieve all controllers or filter them based on name, associated whitelist or blacklist addresses, or other parameters.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
GET /odata/v1.0/Controllers
```

#### Parameters

No query parameters are required.

You can use OData query options to filter or sort results.

**Supported OData options:**\
Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, DeltaToken, Apply, Compute, Search

**Sample Requests:**

Filter controllers by name

```http
GET /Controllers?$filter=Name eq 'Test'
```

**Filter by whitelist address**

```http
GET /Controllers?$filter=WhitelistAddresses/any(address: address/Address eq '0x3c878fccdbae5915433e0ec859c781f1d07b3665')

```

**Filter by multiple blacklist addresses**

```http
GET /Controllers?$filter=BlacklistAddresses/any(blacklistAddress: blacklistAddress/Address in ('0x3c878fccdbae5915433e0ec859c781f1d07b3665','0x1977832755fb404b96ea7a1d95b67df2135e94f1')
```

**Filter controllers that have any addresses in whitelist or blacklist**

```http
GET /Controllers?$filter=WhitelistAddresses/$count gt 0 OR BlacklistAddresses/$count gt 0
```

#### Response Body:

`application/json`  — Returns a list of controller objects.

| **Parameter**              | **Type**      | **Description**                                                    |
| -------------------------- | ------------- | ------------------------------------------------------------------ |
| Id                         | string (UUID) | Unique identifier of the controller.                               |
| Name                       | string        | Name of the controller.                                            |
| Description                | string        | Description of the controller’s purpose or function.               |
| EthereumAddress/ICPAddress | string        | Blockchain address of the controller.                              |
| IssuerAddress              | string        | Address of the issuer that created the controller.                 |
| WhitelistAddresses         | array         | List of addresses allowed to interact with the controller.         |
| WhitelistAddresses.Address | string        | Whitelisted blockchain address.                                    |
| WhitelistAddresses.Limit   | string        | Optional limit parameter for a specific address.                   |
| BlacklistAddresses         | array         | List of addresses restricted from interacting with the controller. |
| BlacklistAddresses.Address | string        | Blacklisted blockchain address.                                    |
| BlacklistAddresses.Reason  | integer       | Reason code for blacklisting.                                      |
| CreatedInBlockchainOn      | datetime      | Date and time when the controller was created on the blockchain.   |
| CreatedBy                  | string (UUID) | Identifier of the user who created the controller.                 |
| CreatedOn                  | datetime      | Timestamp when the controller was created in the system.           |
| UpdatedOn                  | datetime      | Timestamp of the last update.                                      |
| UpdatedBy                  | string (UUID) | Identifier of the user who last updated the controller.            |

#### Example Response Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address ("IssuerAddress", "WhetelistAddress" and etc) is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
[
  {
    "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "Name": "Example Controller",
    "Description": "Controls access for specific asset operations",
    "EthereumAddress": "0xe0450ce1e2ef73b15514ae6a003b90d0ebac8836",
    "IssuerAddress": "0x1977832755fb404b96ea7a1d95b67df2135e94f1",
    "WhitelistAddresses": [
      {
        "Address": "0x3c878fccdbae5915433e0ec859c781f1d07b3665",
        "Limit": "1000"
      }
    ],
    "BlacklistAddresses": [
      {
        "Address": "0x1977832755fb404b96ea7a1d95b67df2135e94f1",
        "Reason": 1
      }
    ],
    "CreatedInBlockchainOn": "2025-10-10T07:06:39.413Z",
    "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
    "CreatedOn": "2022-07-21T09:40:23.263Z",
    "UpdatedOn": "2022-07-21T09:40:23.263Z",
    "UpdatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
]
```

#### Response Codes:

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 200      | The controllers were successfully retrieved.        |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized.                                       |

<br>
