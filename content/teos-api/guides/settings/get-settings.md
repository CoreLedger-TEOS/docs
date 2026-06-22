# Get Settings

This endpoint provides configuration parameters related to supplies and controllers.

This method is read-only and provides a snapshot of configuration parameters at the time of the request. Accessing these settings helps users and integrators understand the operational constraints of the TEOS system and ensure that transactions and supply management comply with system rules.

#### **Request Endpoint**

```http
GET /odata/v1.0/Settings
```

#### **Supported OData Query Options**

None.

#### **Parameters**

None.

#### **Example Response**

```json
{
  "Supplies": {
    "MaxSupplyExpirationBlock": "string",
    "MaxSupplyEndDate": "2025-10-08T08:58:06.678Z"
  },
  "Controllers": {
    "MaxAddressesPerTransaction": 0
  }
}
```

#### **Response Fields**

| **Field**                              | **Type**           | **Description**                                          |
| -------------------------------------- | ------------------ | -------------------------------------------------------- |
| Supplies.MaxSupplyExpirationBlock      | string             | The maximum expiration block for a supply.               |
| Supplies.MaxSupplyEndDate              | string (date-time) | The maximum end date allowed for a supply.               |
| Controllers.MaxAddressesPerTransaction | integer            | The maximum number of addresses allowed per transaction. |

#### **Responses**

| **Code** | **Description**                                            |
| -------- | ---------------------------------------------------------- |
| 200      | OK. The current TEOS settings were successfully retrieved. |
| 401      | Unauthorized. The request is not authorized.               |

<br>
