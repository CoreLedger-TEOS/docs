# Earlier versions

### Version 0.14 in January, 2023

With this version WLP admins can try following improvements:

* now portal available languages and its currency can be adjusted with the help of UI instead of json config file. Check the updates under [tenant-configuration.md](../admin-user-guide/portal-configuration/tenant-configuration.md "mention")
* colors management became much more easier - now admin should define only 10 colors for different groups of UI elements described in the colors.json file which can be found in the Azure blob storage. Check the updates under [branding-management.md](../admin-user-guide/portal-configuration/branding-management.md "mention")
* exported data from orders and redemptions lists now contain all available data in the portal

This version brings significant changes for the end users too. We improved UX of the redemption request creation process including the flow for using saved bank accounts and crypto wallets. Check the updates under [#redemption](../how-your-users-interact-with-the-portal.md#redemption "mention")

### Version 0.13 in September, 2022

In this version we focused on redemption process refurbishment. We introduced following changes:

* now end-users will start receiving redemption details to their emails when redemption request is created
* all redemption requests are created with the redemption reference code. Admins are responsible for managing redemption reference code templates in configuration management, this is the same reference code template which is used for purchases, don't forget to adjust it to your needs as described here [#reference-code-template](../admin-user-guide/portal-configuration/features-configuration/#reference-code-template "mention")
* some refurbishments in the steps of redemption request creation flow to make it more user-friendly

Also we fixed some bugs and introduced some architectural changes to make our solution more stable and to improve user experience.

### Version 0.12 introduced in August, 2022

In this version we refurbished the order creation process to improve UX and introduced shopping cart edge cases processing to make sure you don't face any issues. Additionally we made purchase reference code available for all orders (it was available only for bank transfers till this version) and updated our recommendations how to define its template to make sure you will have around 11 mln unique codes. Now you can use it to support communication between you and your end users.

Also now admins can provide additional data necessary for your business cases for each order and redemption in order details and redemption details correspondingly.

Please, note: we renamed menu entries! Now navigation should be easier for you and your end users.

Also we fixed some bugs and introduced some design and architecture changes to improve user experience.

### Version 0.11 introduced on July, 19 2022

In this version we introduced integration with KYC provider [Shufti Pro](https://shuftipro.com/) to let admins define necessary KYC tiers and functionality available for them. Check how to [configure KYC functionality](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md). Your end-users will have to go through KYC checks to get access to the functionality according to defined tiers as described in [#kyc-checks](../how-your-users-interact-with-the-portal.md#kyc-checks "mention") and your admins will have to take care of approval of KYC tier upgrade requests as described in [#kyc-management](../admin-user-guide/admin-functionality.md#kyc-management "mention").

Starting from this version admins can [manage features available in the portal](../admin-user-guide/portal-configuration/features-configuration/), [list of admins of the portal](../admin-user-guide/portal-configuration/admin-users-management.md) and [configure WLA name](../admin-user-guide/portal-configuration/tenant-configuration.md#white-label-mobile-application-name) used with WLP using UI instead of configuration management file. We will keep replacing configuration management file entries by UI in the upcoming versions.

Also now you can configure disclaimer text for using New Ethereum wallet as a collection method. Check [#collection-methods-configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/#collection-methods-configuration "mention")

And as usual we fixed some bugs and introduced some design and architecture changes to improve user experience.

### Version 0.10 introduced on May, 31 2022

In this version we introduced possibility to switch languages which means that admins can set the list of available languages for portal (find how to configure them in [tenant-configuration.md](../admin-user-guide/portal-configuration/tenant-configuration.md "mention")) and users can easily select desired language among English, German, Spanish.

Starting from this version admins can define the list of bank identifiers they need for their bank transfers including adding specific local ids and intermediary bank details (find how to configure them in [features-configuration](../admin-user-guide/portal-configuration/features-configuration/ "mention")). Also now admins can check the invoice details and order details which were sent to the end user when order was placed in purchase details (purchase management view).

Also we fixed some bugs and introduced some design changes to improve user experience.

### Version 0.9 introduced on April, 22 2022

In this version we introduced some changes in purchasing process:\
Users can give crypto wallets names when saving them. Users can see and manage them in account details

1. Admins can provide different custom HTMLs for logged in and non-logged in users for featured asset for purchasing (check [features-configuration](../admin-user-guide/portal-configuration/features-configuration/ "mention"))
2. User can see how much time is left for finishing order and how long portal owner will wait for bank transfer payment

Also we fixed some bugs to make our solution more stable and improved UX.

### Version 0.8 introduced on March 10, 2022

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
