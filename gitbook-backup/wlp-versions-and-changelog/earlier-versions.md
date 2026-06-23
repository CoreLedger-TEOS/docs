# Earlier versions

## Version 0.15&#x20;

### June, 2023

We introduced the possibility to handle KYC processes without the integration with 3rd party service Shufti Pro and without the necessity to collect any info in the portal. Now admins can set "manual" KYC provider and handle KYC checks by any mean they prefer out of the portal. Read more how to set and handle manual KYC checks in [kyc-checks.md](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md "mention") and [#kyc-management](../admin-user-guide/admin-functionality.md#kyc-management "mention")

### April, 2023

As usual, with this version we've brought some UI improvements and couple of bug fixes. Apart from that, we introduced one feature for end users and made some significant changes in the configuration flow and WLP management.

**End users** can benefit from the possibility to define amount to pay or amount to receive as a payout within Redemption flow. WLP calculates all the fees and includes them automatically based on the [redemption method parameters](../admin-user-guide/portal-configuration/features-configuration/redemption-functionality/).

<figure><img src="../.gitbook/assets/Screenshot 2023-04-21 at 18.35.39.png" alt=""><figcaption></figcaption></figure>

With this version **WLP admins** can try following improvements:

:point\_right: New mode for secondary markets is introduced in the Tenant WLP configuration under Configuration management

When new setting "Use WLP direct links for redemption and purchase" is switched on, direct links to specific featured asset or specific redemption method can be used by end users. When they open portal by clicking this direct link, user will be able to see and start the flow only for that featured asset or redemption method which was specified in the link. Read more about this functionality [here](../admin-user-guide/portal-configuration/features-configuration/#use-wlp-direct-links-for-redemption-and-purchase)\


<figure><img src="../.gitbook/assets/Screenshot 2023-04-24 at 17.05.53.png" alt=""><figcaption><p>User view when user uses direct link to the redemption method when "Use WLP direct links for redemption and purchase" is enabled </p></figcaption></figure>

:point\_right: Due to the changes in the redemption flow for end users we removed "feesOnTop" configuration of redemption methods and moved minimum and maximum amount of asset to redeem to the "user pays" configuration section

{% hint style="info" %}
We've calculated all the values based on conversion rate, but we recommend to check current minAmountNet and maxAmountNet values anyway. Check detailed information about redemption configuration updates [here](../admin-user-guide/portal-configuration/features-configuration/redemption-functionality/)
{% endhint %}

:point\_right: Most of the asset configuration can be done with WLM&#x20;

Starting from this version most of the general asset configuration necessary for WLP can be defined with the help of WLM UI when asset is being setup by the admin. Admins should add these properties as additional ones from the collection "WLA\&WLP configuration". We've already prepared everything, just add this folder, fill the values of WLP properties and remove unnecessary ones. Check how to do it in [[White Label Management Tool](https://app.gitbook.com/o/ZaeNizhnU47lCcTSk7wB/s/tUL13xBnNCyueYnmUZV7/ "mention")](https://app.gitbook.com/s/tUL13xBnNCyueYnmUZV7/user-guide/create-asset#step-2-additional-properties-optional).&#x20;

Though, please, keep in mind that some of the asset properties for purchase and redemption features must be still configured in the json config file under Advanced management.\
Also, we are not asking you to replace the existing configuration of the existing assets used in WLP. We've moved all the properties from the config file to the WLP and saved it. But if you decide to change some of these properties, you should amend existing asset in the WLM and define all the WLP properties. For all new assets added to WLP, please, use new approach for asset definition described in [asset-configuration.md](../admin-user-guide/portal-configuration/asset-configuration.md "mention")

:point\_right: We have new recommendation for asset and redemption pictures

Please, use the square picture of file type PNG; recommended size: 400\*400 px.&#x20;

:point\_right: We've enriched validation rules for Advanced config management to make sure that you don't miss any important configuration parameters.

You won't see any difference unless you try to save updated config file without some mandatory values under Advanced config management.

For the future, please, don't modify the structure of the config file. Only reuse existing objects.

:point\_right: Now WLP uses unique asset id in the configuration under Advanced config management

You shouldn't care about differences between assetId and ledgerId anymore. Just use uniqueAssetId which is available in the Asset details page in WLM\


<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

## Version 0.14 in January, 2023

With this version WLP admins can try following improvements:

* now portal available languages and its currency can be adjusted with the help of UI instead of json config file. Check the updates under [tenant-configuration.md](../admin-user-guide/portal-configuration/tenant-configuration.md "mention")
* colors management became much more easier - now admin should define only 10 colors for different groups of UI elements described in the colors.json file which can be found in the Azure blob storage. Check the updates under [branding-management.md](../admin-user-guide/portal-configuration/branding-management.md "mention")
* exported data from orders and redemptions lists now contain all available data in the portal

This version brings significant changes for the end users too. We improved UX of the redemption request creation process including the flow for using saved bank accounts and crypto wallets. Check the updates under [#redemption](../how-your-users-interact-with-the-portal.md#redemption "mention")

## Version 0.13 in September, 2022

In this version we focused on redemption process refurbishment. We introduced following changes:

* now end-users will start receiving redemption details to their emails when redemption request is created
* all redemption requests are created with the redemption reference code. Admins are responsible for managing redemption reference code templates in configuration management, this is the same reference code template which is used for purchases, don't forget to adjust it to your needs as described here [#reference-code-template](../admin-user-guide/portal-configuration/features-configuration/#reference-code-template "mention")
* some refurbishments in the steps of redemption request creation flow to make it more user-friendly

Also we fixed some bugs and introduced some architectural changes to make our solution more stable and to improve user experience.

## Version 0.12 introduced in August, 2022

In this version we refurbished the order creation process to improve UX and introduced shopping cart edge cases processing to make sure you don't face any issues. Additionally we made purchase reference code available for all orders (it was available only for bank transfers till this version) and updated our recommendations how to define its template to make sure you will have around 11 mln unique codes. Now you can use it to support communication between you and your end users.

Also now admins can provide additional data necessary for your business cases for each order and redemption in order details and redemption details correspondingly.

Please, note: we renamed menu entries! Now navigation should be easier for you and your end users.

Also we fixed some bugs and introduced some design and architecture changes to improve user experience.

## Version 0.11 introduced on July, 19 2022

In this version we introduced integration with KYC provider [Shufti Pro](https://shuftipro.com/) to let admins define necessary KYC tiers and functionality available for them. Check how to [configure KYC functionality](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md). Your end-users will have to go through KYC checks to get access to the functionality according to defined tiers as described in [#kyc-checks](../how-your-users-interact-with-the-portal.md#kyc-checks "mention") and your admins will have to take care of approval of KYC tier upgrade requests as described in [#kyc-management](../admin-user-guide/admin-functionality.md#kyc-management "mention").

Starting from this version admins can [manage features available in the portal](../admin-user-guide/portal-configuration/features-configuration/), [list of admins of the portal](../admin-user-guide/portal-configuration/admin-users-management.md) and [configure WLA name](../admin-user-guide/portal-configuration/tenant-configuration.md#white-label-mobile-application-name) used with WLP using UI instead of configuration management file. We will keep replacing configuration management file entries by UI in the upcoming versions.

Also now you can configure disclaimer text for using New Ethereum wallet as a collection method. Check [#collection-methods-configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/#collection-methods-configuration "mention")

And as usual we fixed some bugs and introduced some design and architecture changes to improve user experience.

## Version 0.10 introduced on May, 31 2022

In this version we introduced possibility to switch languages which means that admins can set the list of available languages for portal (find how to configure them in [tenant-configuration.md](../admin-user-guide/portal-configuration/tenant-configuration.md "mention")) and users can easily select desired language among English, German, Spanish.

Starting from this version admins can define the list of bank identifiers they need for their bank transfers including adding specific local ids and intermediary bank details (find how to configure them in [features-configuration](../admin-user-guide/portal-configuration/features-configuration/ "mention")). Also now admins can check the invoice details and order details which were sent to the end user when order was placed in purchase details (purchase management view).

Also we fixed some bugs and introduced some design changes to improve user experience.

## Version 0.9 introduced on April, 22 2022

In this version we introduced some changes in purchasing process:\
Users can give crypto wallets names when saving them. Users can see and manage them in account details

1. Admins can provide different custom HTMLs for logged in and non-logged in users for featured asset for purchasing (check [features-configuration](../admin-user-guide/portal-configuration/features-configuration/ "mention"))
2. User can see how much time is left for finishing order and how long portal owner will wait for bank transfer payment

Also we fixed some bugs to make our solution more stable and improved UX.

## Version 0.8 introduced on March 10, 2022

In this version we made some changes in existing functionality, introduced some new features and fixed some bugs to improve UX and make solution more stable

#### New features:

* Imprint: Impressum/contact information can be provided by admin\
  Imprint section can be fully customized via a custom html
* Displaying the numbers with decimal and thousand separators based on the tenant language for English, German and Russian language. Spanish is still in our backlog.

#### Signup process changes

Now users can see when they were not approved by admin yet

#### Redemption process changes&#x20;

Now it is possible to use decimals in the desired amount to redeem

#### Purchasing process changes

* users are not forced to fill birthdate and nationality to complete the purchase. Also they won't see this data in bank accounts
* payment method "Bitcoin" was renamed to "Cryptocurrencies" because Coinify, with which our solution is integrated, provides a wide range of cryptocurrencies\
