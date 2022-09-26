---
description: >-
  Settings in this section are relevant for purchasing functionality only. You
  can skip this part if you're not going to switch on feature "Purchase assets"
  or "Featured asset"
---

# Purchase assets and Featured asset

Full configuration of Shop and Featured asset functionality includes following steps:

1. Configure assets to sell (described below [#asset-configurations](./#asset-configurations "mention"))
2. Set one of them as features if needed [#featured-asset](./#featured-asset "mention")
3. Configure collection methods [collection-methods-configuration.md](collection-methods-configuration.md "mention")
4. Configure payment methods [payment-methods-configuration.md](payment-methods-configuration.md "mention")
5. Prepare templates for sending invoice details and purchase details to users via the email [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention")
6. Also, don't forget to configure[ reference code template ](../#reference-code-template)which is used both for purchase reference codes and redemption reference codes

## Asset configurations

The WLP can be used for selling a range of assets, just like a web shop for tokens. Additionally, the WLP can be configured for a custom purchase, where one token is highlighted and shown in a custom html page. Also, don't forget to configure[ reference code template ](../#reference-code-template)which is used both for purchase reference codes and redemption reference codes.

### Assets available in the shop

Assets sold in the WLP must first be created using WLM and afterwards be configured for WLP in the **“Advanced Config Management”** editor.

Each asset must be configured with the following parameters in order to be presented under "Purchase assets".

:tada: Starting from v0.11 you can define KYC tier which users must have for each asset to be able to buy it (check below parameter "kycTier"). [Read more about KYC configurations](../kyc-checks.md)

```
{
“name”:”CoreLedger AG Share”,
“assetId”:”897131459254702105916269”,
“description”:”New future of finance by making investing as easy and transparent as possible for capital increase, shareholder agreements, etc.”,
“ledgerId”:”1”,
“ticker”:”CLAG”,
“icon”:”icons/coreledger_200x150.jpg”,
“price”:”40”,
“url”:”https://coreledger.net/”,
"maxAmount": 4000000000,
“issuerAddress”: “0xe509ceded28027b3d0d4c105700008c4f6530fbe”,
"kycTier": 1
},
```

* Any name can be put to an asset
* For each asset to be shown in WLP, the correct asset id is needed
* A description about the asset can be added (optional field)
* Ledger ID can be kept 1 for Pilot users
* Any ticker can be put to an asset (optional field)
* Any icon can be put to an asset (optional field). The icon must be available in the blob storage and the respective path must be entered in the config file.
* A price per Unit must be defined
* Any URL can be put to an asset, to show more information when the user clicks on it (optional field)
* Maximum amount of sparks a user can purchase
* The issuer address of the asset must be defined. This is used for e.g. calculating the availability of the asset.
* KYC tier which users must have in order to buy this asset. For all other users possibility to buy this asset will be closed by "Get tier N" sign

## Featured asset

Assets shown in the WLP custom purchase page must first be created using WLM and afterwards be configured for WLP in the “Advanced config management” editor.

Asset must be configured with the following parameters.

```
{
“name”:”CoreLedger AG Share”,
“assetId”:”897131459254702105916269”,
“description”:”New future of finance by making investing as easy and transparent as possible for capital increase, shareholder agreements, etc.”,
“ledgerId”:”1”,
“ticker”:”CLAG”,
“icon”:”icons/coreledger_200x150.jpg”,
“price”:”40”,
“url”:”https://coreledger.net/”,
"maxAmount": 4000000000,
“issuerAddress”: “0xe509ceded28027b3d0d4c105700008c4f6530fbe”
"isFeaturedAsset": true,
"kycTier": 0,
},
```

In difference to the purchase assets there is one additional parameter to be set.

* “isFeaturedAsset” can be switched on and off, with “true” or “false”

```
"features": {
"purchase": true,
"customPurchase": true,
"redeem": true,
"account": true
},
```

* In the customPurchaseSettings the name of the sidebarLink can be defined

```
"customPurchaseSettings": {
"sidebarLink": "Webshop",
"customHtmlSourcePath": "custom-html/template-nonloggedin.html",
"customHtmlSourcePathLoggedIn": "custom-html/template-loggedin.html"
},
```

* The custom html must be uploaded in the blob storage in the wlp-config folder/custom-html. Then, under “customHtmlSourcePath” the link to the custom html page can be entered. Check [here how to prepare custom HTML](../../how-to-prepare-custom-html.md)

You can use different custom HTML pages for logged in and non-logged in users. In case you don't want to differentiate them, you can provide only one HTML and set source path to it in the entry "customHtmlSourcePath".
