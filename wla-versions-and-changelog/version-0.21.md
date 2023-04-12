---
description: Available from April, 2023
---

# Version 0.21

#### New features

We've made the process of the supplies search in the Market more stable and user-friendly:&#x20;

* results are sorted based on the exchange rate
* now any internet connection interruptions will be properly handled and your users will clearly see when some results may be not valid because of the network problems

We've added [new feature for signing generic texts](../how-your-users-interact-with-wla/my-wallet.md) with your wallet signature. You can sign any text and send this signature in hex or base64 format to prove the ownership of your wallet. This functionality is added as a separate [optional module for WLA-based apps](../admin-user-guide/wla-modules.md).

We've added the progress bar for the importing assets process. If there is more than one asset to be imported when scanning QR code with the private key, we show the progress bar to have cleat understanding on how many assets are still left.

We've added search and filters [for "My activity" screen](../how-your-users-interact-with-wla/assets-and-transactions.md#transactions-overview-and-signing-transaction). Now you can easily find the transaction which you were looking for.&#x20;

#### Configuration changes

We've removed "show\_all\_transactions\_in\_my\_activity" from the app config, you shouldn't observe any changes in the app behavior.

Starting from this version most of the asset configuration necessary for WLA can be defined with the help of WLM UI when asset is being setup by the admin. Admins should add these properties as additional ones from the collection "WLA\&WLP configuration". We've already prepared everything, just add this folder, fill the values of WLA properties and remove unnecessary ones. Check how to do it in [asset-configuration.md](../admin-user-guide/app-configuration/asset-configuration.md "mention"). Though, please, keep in mind that the asset list itself and asset icons must be still configured in "assets" json config file.\
Also, we are not asking you to replace the existing configuration of the existing asset used in WLA. You can keep and it will be still used. But for all new assets added to WLA, please, use new approach for asset definition described in [asset-configuration.md](../admin-user-guide/app-configuration/asset-configuration.md "mention")
