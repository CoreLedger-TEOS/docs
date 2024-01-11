---
description: >-
  Under this section the collection methods can be enabled / disabled and
  configured
---

# Collection methods configuration

Starting from v0.16 collection methods can be configured via UI under "Configuration management" -> "Purchase configuration" -> "Collection methods"

Currently four collection methods “Token Card”, “Wallets created in mobile app", "Wallets saved to portal directly or via other TEOS platform components” and “One time wallet” are available:

* Token card - physical representation of the ownership of the asset
* Wallets created in mobile app - user can get the units of bought asset to the wallet which they create with the help of the app associated with the portal
* Wallets saved to portal directly or via other TEOS platform components - user can get the units of bought asset to the wallet which he or she saved in the portal (list of saved wallets can be found under Account management) or which were added via TEOS API with the help of WLM or your other apps integrated with TEOS via TEOS API
* One time wallet - user can get the units of bought asset to any external Ethereum wallet which is compatible with unlisted tokens. Please note, that not all external Ethereum wallets support unlisted tokens. Additionally, if the external Ethereum wallets support unlisted tokens, they might need to be configured separately.&#x20;

All methods can be enabled only if they are properly configured and can be disabled at any moment.

<figure><img src="../../../../.gitbook/assets/image (22).png" alt=""><figcaption><p> "Configuration management" -> "Purchase configuration" -> "Collection methods"</p></figcaption></figure>

{% hint style="info" %}
Please note that

* there must be at least one configured and enabled collection method to switch on  "Featured asset" and/or "Asset purchase" featured
* if the "Featured asset" or/and "Asset purchase" features are switched on you can't disable all collection methods: at least one collection method must be configured and enabled
{% endhint %}

### General characteristics for all collection methods

For each collection method you can define following characteristics:

*   Description of the method in all available languages for the portal which will be shown to user in the checkout flow under "More details" button of the collection method\


    <div>

    <figure><img src="../../../../.gitbook/assets/image (23).png" alt=""><figcaption><p>Description definition in the Configuration management</p></figcaption></figure>

     

    <figure><img src="../../../../.gitbook/assets/image (29).png" alt=""><figcaption><p>Description is shown under "More details" in user checkout flow</p></figcaption></figure>

    </div>
* Collection method fee which will be added on top to the order amount which end users will have to pay. Collection method fee consists of two parts: variable method fee (which is defined in percentage of order total amount) and fixed method fee (which is defined in portal currency). \
  Fee is a decimal number, with max 2 decimal places. Total collection method fee will be calculated as a sum of variable fee part and fixed fee part.&#x20;

<figure><img src="../../../../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

* Country fee which will be applied based on the selected country by the user and which will be added on top to the order amount which end users will have to pay. \
  Country fee consists of two parts: variable method fee (which is defined in percentage of order total amount) and fixed method fee (which is defined in portal currency).\
  You are supposed to specify the Fallback country fee for the cases when user selects the country out of the list for which you've defined the fees\
  Fee is a decimal number, with max 2 decimal places. Total country fee will be calculated as a sum of variable fee part and fixed fee part. \


<figure><img src="../../../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

### Additional characteristics of specific collection methods

*   For "One time wallet" you can define the text of the disclaimer in all available languages for the portal to make sure your users understand their responsibility of using correct address\


    <figure><img src="../../../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>
* For "Wallets saved to portal directly or via other TEOS platform components" you can define whether WLM wallets should be shown. In case your case uses WLM you may want to let your users use wallets from the list of the WLM addressbook in WLP. By default this possibility is switched off (normally end users of WLP don't use WLM)
