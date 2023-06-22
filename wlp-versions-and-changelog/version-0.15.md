# Version 0.15

## June, 2023

We introduced the possibility to handle KYC processes without the integration with 3rd party service Shufti Pro and without the necessity to collect any info in the portal. Now admins can set "manual" KYC provider and handle KYC checks by any mean they prefer out of the portal. Read more how to set and handle manual KYC checks in [kyc-checks.md](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md "mention") and [#kyc-management](../admin-user-guide/admin-functionality.md#kyc-management "mention")

## April, 2023

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

Starting from this version most of the general asset configuration necessary for WLP can be defined with the help of WLM UI when asset is being setup by the admin. Admins should add these properties as additional ones from the collection "WLA\&WLP configuration". We've already prepared everything, just add this folder, fill the values of WLP properties and remove unnecessary ones. Check how to do it in [[White Label Management Tool](http://localhost:5000/o/ZaeNizhnU47lCcTSk7wB/s/tUL13xBnNCyueYnmUZV7/ "mention")](http://localhost:5000/s/tUL13xBnNCyueYnmUZV7/user-guide/create-asset#step-2-additional-properties-optional).&#x20;

Though, please, keep in mind that some of the asset properties for purchase and redemption features must be still configured in the json config file under Advanced management.\
Also, we are not asking you to replace the existing configuration of the existing assets used in WLP. We've moved all the properties from the config file to the WLP and saved it. But if you decide to change some of these properties, you should amend existing asset in the WLM and define all the WLP properties. For all new assets added to WLP, please, use new approach for asset definition described in [asset-configuration.md](../admin-user-guide/portal-configuration/asset-configuration.md "mention")

:point\_right: We have new recommendation for asset and redemption pictures

Please, use the square picture of file type PNG; recommended size: 400\*400 px.&#x20;

:point\_right: We've enriched validation rules for Advanced config management to make sure that you don't miss any important configuration parameters.

You won't see any difference unless you try to save updated config file without some mandatory values under Advanced config management.

For the future, please, don't modify the structure of the config file. Only reuse existing objects.

:point\_right: Now WLP uses unique asset id in the configuration under Advanced config management

You shouldn't care about differences between assetId and ledgerId anymore. Just use uniqueAssetId which is available in the Asset details page in WLM\


<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>
