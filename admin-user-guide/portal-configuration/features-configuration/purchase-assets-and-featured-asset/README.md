---
description: >-
  Settings in this section are relevant for purchasing functionality only. You
  can skip this part if you're not going to switch on feature "Purchase assets"
  or "Featured asset"
---

# Purchase assets and Featured asset

Full configuration of Shop and Featured asset functionality includes following steps:

1. Configure assets to sell in WLM [asset-configuration.md](../../asset-configuration.md "mention") and enrich with specific purchasing properties [#asset-configuration-for-purchasing](./#asset-configuration-for-purchasing "mention")
2. Set one of them as features if needed [#featured-asset](./#featured-asset "mention")
3. Configure collection methods [collection-methods-configuration.md](collection-methods-configuration.md "mention")
4. Configure payment methods [payment-methods-configuration.md](payment-methods-configuration.md "mention")
5. Prepare templates for sending invoice details and purchase details to users via the email [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention")
6. Also, don't forget to configure[ reference code template ](../#reference-code-template)which is used both for purchase reference codes and redemption reference codes

## Asset configuration for purchasing

The WLP can be used for selling a range of assets, just like a web shop for tokens. Additionally, the WLP can be configured for a custom purchase, where one token is highlighted and shown in a custom html page. Also, don't forget to configure[ reference code template ](../#reference-code-template)which is used both for purchase reference codes and redemption reference codes.

### Assets available in the shop

Assets sold in the WLP must first be created using WLM and afterwards be configured for WLP in the **“Advanced Config Management”** editor.

Each asset must be configured with the following parameters in order to be presented under "Purchase assets".

```
{
“uniqueAssetId”:”897131459254702105916269”,
“icon”:”icons/coreledger_200x150.jpg”,
“price”:”40”,
"maxAmount": 4000000000,
“issuerAddress”: “0xe509ceded28027b3d0d4c105700008c4f6530fbe”,
"kycTier": 1
},
```

* For each asset to be shown in WLP, the correct uniqueAssetId is needed to retrieve asset name, asset description, link to the publicly available asset webpage, ticker. [Read more here about asset definition for the portal](../../asset-configuration.md)
*   Any icon can be put to an asset (optional field). The icon must be available in the blob storage and the respective path must be entered in the config file.

    **Icon preparation:**

    * Asset icon should be the square picture of file type PNG; recommended size: 400\*400 px
    * Put the icon to the blob storage associated with your tenant to the folder "trading-app-configs/icons"
    * Copy the path to the file
* A price per Unit must be defined
* Maximum amount of sparks a user can purchase
* The issuer address of the asset must be defined. This is used for e.g. calculating the availability of the asset.
* KYC tier which users must have in order to buy this asset. For all other users possibility to buy this asset will be closed by "Get tier N" sign. [Read more about KYC configurations](../kyc-checks.md)

## Featured asset

Assets shown in the WLP custom purchase page must first be created using WLM and afterwards be configured for WLP in the “Advanced config management” editor.

Asset must be configured with the following parameters.

```
{
“uniqueAssetId”:”897131459254702105916269”,
“icon”:”icons/coreledger_200x150.jpg”,
“price”:”40”,
"maxAmount": 4000000000,
“issuerAddress”: “0xe509ceded28027b3d0d4c105700008c4f6530fbe”
"isFeaturedAsset": true,
"kycTier": 0,
},
```

In difference to the purchase assets there is one additional parameter to be set.

* “isFeaturedAsset” can be switched on and off, with “true” or “false”
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
