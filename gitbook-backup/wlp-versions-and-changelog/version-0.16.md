# Version 0.16

As usual, with this version we've brought some UI improvements and couple of bug fixes. Apart from that, we introduced one feature for end users and made some significant changes in the configuration flow of WLP.

With this version **WLP admins** can try following improvements:

:point\_right: We've introduced "Purchase configuration" section under "Configuration management". Now [collection methods](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/collection-methods-configuration.md) and [payment methods](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md) can be configured via UI. Read more in Purchase assets and Featured asset configuration details

:point\_right: Now admin can adjust KYC settings and define whether tenant needs KYC cases to be automatically closed (approved/declined) based on the verification status received from KYC provider (note: valid only for integration with KYC provider, if "Manual" provider is used, all KYC cases must be closed manually). Read more in [KYC checks settings](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md#step-5.-let-portal-close-kyc-cases-automatically-if-verification-is-made-by-third-party-kyc-service)

:point\_right: Now admin can customize redemption functionality even more by defining the menu item name which is currently called "Redemption" and defining whether tenant needs additional details within redemptions. Read more in [Redemption general settings](../admin-user-guide/portal-configuration/features-configuration/redemption-functionality/#step-1.-configure-general-redemption-settings)

:point\_right: Admin can define the step value between minimum and maximum amounts which can be selected as redemption amounts. User will be able to use step values to select desired amount. Still admin can leave step value = 0, then any value between minimum and maximum value can be selected. Read more about [redemption configuration updates](../admin-user-guide/portal-configuration/features-configuration/redemption-functionality/#step-2.-configure-redemption-methods)

<figure><img src="../.gitbook/assets/image (42).png" alt=""><figcaption><p>New step values controls in case step value is defined by the admin</p></figcaption></figure>

:point\_right: We've introduced French language in WLP! Now you can configure WLP to use it among available languages for your end users

