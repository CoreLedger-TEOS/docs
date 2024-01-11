# Version 0.17

As usual, with this version we've brought some UI improvements and a couple of bug fixes. Apart from that, we've introduced features for end users and made some changes in the configuration flow of WLP.

With this version **WLP admins and users** can try the following improvements:&#x20;

:point\_right: Admin can now limit the amount which can be paid via corresponding payment method. The limit can be set in the configured payment method. In case the limit has been set up and user creates an order with the invoice amount more than the defined limit value, this payment method won't be available for the order. Read more in [Payment methods configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md).

:point\_right: We've updated API setup for Coinify integration, which doesn't require API secret to be provided from you anymore. However, a new API key must be generated and an environment for which API key is used needs to be provided. Read more in [Payment methods configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md).

:point\_right: Users can now receive emails in their language, available in the portal, if the translations for emails have been provided by the admin. If no translation has been provided, the emails will be sent in the default language.

:point\_right: In Purchase configuration admin can now differentiate between two types of fees: **fixed fee** (which is set in portal currency and has a stable value) and **variable fee** (which is set in the percentage of the purchased amount). The fees can be configured for both method and country fee. Country fee configuration for fixed and variable parts can be set up separately for each selected and default country. \
If configured, the total fee will be calculated in the following way: variable part (in percent of the purchased amount) is added to fixed part on top. Both parts can be left empty if no fee needs to be applied.  \
If fees are configured, the user will clearly see the calculations for total fee: how and why the final amount was applied in the following way. Read more in [Collection methods configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/collection-methods-configuration.md).

<div align="left">

<figure><img src="../.gitbook/assets/image (45).png" alt=""><figcaption><p>Method and country fee configuration in Purchase configuration</p></figcaption></figure>

</div>

<div align="right">

<figure><img src="../.gitbook/assets/image (46).png" alt=""><figcaption><p>Display of fees calculation for user (purchase flow)</p></figcaption></figure>

</div>

:point\_right: For Redemption configuration in Advanced config management admin can now set two parts for each fee: **fixed fee** (which is set in portal currency and has a stable value) and **variable fee** (which is set in the percentage of the payout amount). The fees can be configured for issuerFee, methodFee and countryFees correspondingly. Country fee configuration for fixed and variable parts can be set up separately for each selected country and fallbackCountryFee. \
If configured, the total fee for each fee type will be calculated in the following way: variable part (in percent of the redeemed amount) is added to fixed part on top. Both parts can be left empty if no fee needs to be applied.  \
If fees are configured, the user will clearly see the calculations for total fee: how and why the final amount was applied in the following way. Read more in [Redemption functionality](../admin-user-guide/portal-configuration/features-configuration/redemption-functionality/).

<figure><img src="../.gitbook/assets/image (51).png" alt=""><figcaption><p>Display of fees calculation for user (redemption flow)</p></figcaption></figure>

:point\_right: We've added "Go to My orders"/"Go to My redemptions" buttons to the final pages of Payment/Redemption flow. When clicked, the users will be redirected to their Account page and see Orders/Redemption history tables.

:point\_right: It will not be possible for users to add crypto wallets and bank accounts, unless the corresponding redemption or collection method is enabled by the admin.

:point\_right: We've updated the view of redemption management table, which has become more clear.

**We've fixed:**

:point\_right: Several color-related bugs.&#x20;

:point\_right: Text display on Purchase configuration page in section for minimum KYC tier for German, French and Spanish languages, which will not be cut off now.

:point\_right: Search bar in Order and Redemption management section, which will display more accurate hints for search options.

:point\_right: Sorting of redemption list by GROSS amount, where you will not face an error anymore.

:point\_right: Searching for KYC case by ID option, where you will be able to enter first 3 characters and already see some results of the search.
