# Update a controller (PATCH)

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint updates off-chain data of a controller. It allows modifying only the Name and Description fields. All other fields, such as WhitelistAddresses, or BlacklistAddresses, are ignored.

Unlike the PUT method, PATCH updates only the fields specified in the request body, leaving all other fields unchanged. This endpoint provides a way to modify descriptive metadata without affecting the blockchain-level data.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
PATCH /odata/v1.0/Controllers({key})
```

**Supported OData query options:**\
Filter, Expand, Select, OrderBy, Top, Skip, Count, Format, SkipToken, Apply, Compute, Search

#### Parameters

| **Name** | **Type**      | **Description**                                    |
| -------- | ------------- | -------------------------------------------------- |
| key      | string (UUID) | The unique identifier of the controller to update. |

#### Request Body:

`application/json`  — Object containing the fields to update. Only included fields will be updated.

| **Parameter** | **Type** | **Description**                    | **Mandatory**                        |
| ------------- | -------- | ---------------------------------- | ------------------------------------ |
| Name          | string   | New name of the controller.        | ❌ Optional (update only if included) |
| Description   | string   | New description of the controller. | ❌ Optional (update only if included) |

#### Example Request Body:

```json
{
  "Name": "Test"
}
```

or

```json
{
  "Description": "My test controller"
}
```

#### Response Body:

`application/json` — Returns the updated controller object with all current fields, including blockchain-related data.

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
  "Name": "Test",
  "Description": "My test controller",
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
  "CreatedInBlockchainOn": "2025-10-10T07:53:18.201Z",
  "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
  "CreatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

#### Response Codes:

| **Code** | **Description**                            |
| -------- | ------------------------------------------ |
| 200      | The controller was successfully updated.   |
| 400      | Bad Request. The provided data is invalid. |
| 401      | Unauthorized.                              |

<br>
