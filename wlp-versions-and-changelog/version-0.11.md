---
description: available from July, 19
---

# version 0.11

In this version we introduced integration with KYC provider [Shufti Pro](https://shuftipro.com/) to let admins define necessary KYC tiers and functionality available for them. Check how to [configure KYC functionality](../admin-user-guide/portal-configuration/features-configuration/kyc-checks.md). Your end-users will have to go through KYC checks to get access to the functionality according to defined tiers as described in [#kyc-checks](../how-your-users-interact-with-the-portal.md#kyc-checks "mention") and your admins will have to take care of approval of KYC tier upgrade requests as described in [#kyc-management](../admin-user-guide/admin-functionality.md#kyc-management "mention").

Starting from this version admins can [manage features available in the portal](../admin-user-guide/portal-configuration/features-configuration/), [list of admins of the portal](../admin-user-guide/portal-configuration/admin-users-management.md) and [configure WLA name](../admin-user-guide/portal-configuration/tenant-configuration.md#white-label-mobile-application-name) used with WLP using UI instead of configuration management file. We will keep replacing configuration management file entries by UI in the upcoming versions.

Also now you can configure disclaimer text for using New Ethereum wallet as a collection method. Check [#collection-methods-configuration](../admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset.md#collection-methods-configuration "mention")

And as usual we fixed some bugs and introduced some design and architecture changes to improve user experience.
