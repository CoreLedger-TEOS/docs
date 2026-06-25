# Add an existing controller

Controllers are blockchain-level entities that manage access rights to assets, allowing you to restrict who can buy, sell, or trade them.

This endpoint adds an existing controller to the system. It allows you to register a controller that already exists on the blockchain by providing its address and basic details, making it available for management within the TEOS platform.

📘 Learn more about [controllers](../../resources/using-the-teos-api/concepts/controllers.md).

#### Request Endpoint:

```http
POST /odata/v1.0/Controllers/AddExisting
```

**Parameters**\
No URL or query parameters.

#### Request Body:

`application/json`  — The model containing information to add an existing controller.

| **Parameter**     | **Type** | **Description**                      | **Mandatory** |
| ----------------- | -------- | ------------------------------------ | ------------- |
| Name              | string   | Name of the controller               | ✅             |
| ControllerAddress | string   | Address of the existing controller   | ✅             |
| CreatedBy         | string   | ID of the user adding the controller | ❌             |
| Description       | string   | Description of the controller        | ❌             |

#### Example Request Body:

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the "ControllerAddress" is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
{
  "Name": "Test",
  "Description": "My test controller",
  "ControllerAddress": "0x16a1b82873d90f3c3454d487a4fe7017eae9d424",
  "CreatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

#### Parameters Table (Body)

| **Parameter**     | **Type** | **Description**                                 |
| ----------------- | -------- | ----------------------------------------------- |
| Name              | string   | Name of the controller                          |
| Description       | string   | Description of the controller                   |
| ControllerAddress | string   | Blockchain address of the controller            |
| CreatedBy         | string   | ID of the user adding the controller (optional) |

#### Response Body Example:

`application/json`

In EVM-compatible networks (e.g., Sparknet, Ethereum, and Polygon), the  address ("IssuerAddress", "WhetelistAddress" and etc) is 42 characters long. In non-EVM networks, the address length may differ. For example, on Internet Computer, it is 63 characters.

```json
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
  "CreatedInBlockchainOn": "2025-10-10T09:08:50.544Z",
  "CreatedBy": "37514BE7-D096-4BB8-95DA-EDB03B723BB2",
  "CreatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedOn": "2022-07-21T09:40:23.263Z",
  "UpdatedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

#### Response Parameters Table

| **Parameter**                 | **Type**          | **Description**                                                 |
| ----------------------------- | ----------------- | --------------------------------------------------------------- |
| Id                            | string            | Unique identifier of the controller                             |
| Name                          | string            | Name of the controller                                          |
| Description                   | string            | Description of the controller                                   |
| EthereumAddress/ICPAddress    | string            | Ethereum address of the controller/ICPAddress of the controller |
| IssuerAddress                 | string            | Address of the entity that issued the controller                |
| WhitelistAddresses            | array             | List of whitelisted addresses with limits                       |
| WhitelistAddresses\[].Address | string            | Whitelisted blockchain address                                  |
| WhitelistAddresses\[].Limit   | string            | Limit for the whitelisted address                               |
| BlacklistAddresses            | array             | List of blacklisted addresses with reasons                      |
| BlacklistAddresses\[].Address | string            | Blacklisted blockchain address                                  |
| BlacklistAddresses\[].Reason  | number            | Reason code for blacklisting                                    |
| CreatedInBlockchainOn         | string (datetime) | Timestamp when controller was created on blockchain             |
| CreatedBy                     | string            | User ID who created the controller                              |
| CreatedOn                     | string (datetime) | Timestamp when controller was created in system                 |
| UpdatedOn                     | string (datetime) | Timestamp of last update                                        |
| UpdatedBy                     | string            | User ID who last updated the controller                         |

#### Responses

| **Code** | **Description**                                                 |
| -------- | --------------------------------------------------------------- |
| 201      | The controller was successfully added                           |
| 400      | Existing controller data is invalid. Error details are included |
| 401      | Unauthorized                                                    |

<br />
