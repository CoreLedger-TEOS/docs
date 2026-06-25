# Retrieve a controller by id

This endpoint retrieves a specific controller by its unique identifier (Id).

Controllers on the TEOS platform are blockchain-level entities that define restrictions and permissions for specific operations with blockchain data types.

A controller may include whitelisted and blacklisted addresses, which determine which wallets or users can interact with the associated assets.\
This endpoint returns full details of a controller, including its metadata and address lists, by providing its unique ID.

📘 [Learn more](../../resources/using-the-teos-api/concepts/controllers.md) about controllers.

#### Request Endpoint:

```http
GET /odata/v1.0/Controllers({key})
```

Retrieves the controller object identified by the specified \{key\} (UUID).\
You can optionally use OData query options to expand related entities or select specific fields.

**Supported OData query options:**\
Expand, Select

#### Parameters

| **Name** | **Type**      | **Description**                                    |
| -------- | ------------- | -------------------------------------------------- |
| key      | string (UUID) | The unique identifier of the requested controller. |

#### Example Request:

```http
GET /Controllers(6046ab4b-c4c8-4839-7f1c-08da318afc96)
```

#### Response Body:

`application/json`  — Returns the details of the requested controller.

| **Parameter**              | **Type**      | **Description**                                                    |
| -------------------------- | ------------- | ------------------------------------------------------------------ |
| Id                         | string (UUID) | Unique identifier of the controller.                               |
| Name                       | string        | Name of the controller.                                            |
| Description                | string        | Description of the controller.                                     |
| EthereumAddress/ICPAddress | string        | The blockchain address associated with the controller.             |
| IssuerAddress              | string        | Address of the issuer that created the controller.                 |
| WhitelistAddresses         | array         | List of addresses allowed to interact with this controller.        |
| WhitelistAddresses.Address | string        | Whitelisted blockchain address.                                    |
| WhitelistAddresses.Limit   | string        | Optional transaction or interaction limit for the address.         |
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
{
  "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "Name": "Example Controller",
  "Description": "Defines whitelist and blacklist for controlled asset operations",
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
  "CreatedInBlockchainOn": "2025-10-10T07:15:44.565Z",
  "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
  "CreatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}

```

#### Response Codes:

| **Code** | **Description**                                     |
| -------- | --------------------------------------------------- |
| 200      | The controller was successfully retrieved.          |
| 400      | The request is invalid. Error details are included. |
| 401      | Unauthorized.                                       |
| 404      | The controller does not exist.                      |

<br />
