# Using Discovery Service

Discovery service of TEOS platform is a component, providing configurations to front-ends and mobile applications. It is necessary to support multi-tenancy approach, based on different FQDNs/Bundle IDs of applications of different tenants. The respective front-end FQDN or bundle ID is configured by CoreLedger during tenant set-up.

## Returns Front-End or Mobile Application configuration and endpoints

<mark style="color:blue;">`GET`</mark> `https://disco.coreledger.net/api/discovery/v1.0/config/{id}`

The structure of the returned json document differs from application to application and is based solely on the provided ID. Returned result can be single record or an array of records. In case of multiple configurations, returned by the endpoint the application should correspondingly handle them and e.g. offer a selection window to a user right after the start

#### Path Parameters

| Name                                 | Type   | Description                                                         |
| ------------------------------------ | ------ | ------------------------------------------------------------------- |
| id<mark style="color:red;">\*</mark> | String | Bundle ID or Front-End FQDN, e.g. "com.coreledger.txmobile.android" |

#### Query Parameters

| Name | Type    | Description                                                                                                               |
| ---- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| dev  | boolean | <p>If additional dev configurations should be returned. E.g. ?dev=true</p><p>Is relevant only for CoreLedger Support.</p> |

{% tabs %}
{% tab title="200: OK App configuration and endpoints" %}
Example of a single configuration response:

```
{
    "Name": "POA SparkNet",
    "BlockchainTechnology": "ETH",
    "NetworkId": "ETH",
    "Description": "Used for Active Sandbox, Pilot and Productive environments. The network runs without gas-costs and is not linked to the Ethereum Mainnet.",
    "GasSettingsAdjustmentAllowed": false,
    "Translations": "https://tenantalldevacc.blob.core.windows.net/translations/txmobile-production",
    "AuthConfig": {
      "ClientId": "prod.tx.app.v1",
      "Scopes": "openid prod.txapi_core prod.txapi_device profile offline_access"
    },
    "Position": 1,
    "Endpoints": {
      "AuthApi": "https://auth.coreledger.net",
      "TxApi": "https://txapi.coreledger.net/v1.0/api"
    }
  }
```

Example of an array of configurations:

```
[
  {
    "Name": "POA SparkNet",
    "BlockchainTechnology": "ETH",
    "NetworkId": "ETH",
    "Description": "Used for Active Sandbox, Pilot and Productive environments. The network runs without gas-costs and is not linked to the Ethereum Mainnet.",
    "GasSettingsAdjustmentAllowed": false,
    "Translations": "https://tenantalldevacc.blob.core.windows.net/translations/txmobile-production",
    "AuthConfig": {
      "ClientId": "prod.tx.app.v1",
      "Scopes": "openid prod.txapi_core prod.txapi_device profile offline_access"
    },
    "Position": 1,
    "Endpoints": {
      "AuthApi": "https://auth.coreledger.net",
      "TxApi": "https://txapi.coreledger.net/v1.0/api"
    }
  },
  {
    "Name": "Ethereum Mainnet",
    "BlockchainTechnology": "ETH",
    "NetworkId": "ETHM",
    "Description": "The Ethereum blockchain, for main productive purposes with the whole spectrum of assets.",
    "GasSettingsAdjustmentAllowed": true,
    "Translations": "https://tenantalldevacc.blob.core.windows.net/translations/txmobile-production",
    "AuthConfig": {
      "ClientId": "prod.tx.app.v1",
      "Scopes": "openid prod.txapi_core prod.txapi_device profile offline_access"
    },
    "Position": 2,
    "Endpoints": {
      "AuthApi": "https://auth.coreledger.net",
      "TxApi": "https://txapi.coreledger.net/v1.0/api"
    }
  }
]
```
{% endtab %}
{% endtabs %}
