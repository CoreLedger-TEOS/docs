# Admin functionality

## KYC management

As administrator you have access to the KYC Management section of WLP. Here you can access the data of the KYC cases and make a decision about declining or approving KYC tier request.

#### Process of KYC checks

{% hint style="info" %}
All users automatically get tier 0 when they register

Users can't have several KYC cases opened
{% endhint %}

**Step 1.** User goes through KYC checks if he wants to upgrade his tier. Process is described here [#kyc-checks](../how-your-users-interact-with-the-portal.md#kyc-checks "mention").\
In case you've configured the integration of the portal with KYC provider (ShuftiPro), user  provides all necessary data to KYC provider as configured for the requested tier.\
:bangbang: In case you've decided to manage the KYC process fully by yourself (provider "manual" is set for all tiers), you're taking the responsibility of collecting all necessary data from users. Here in the portal you can only approve or decline the requested KYC tier within the KYC case.

**Step 2.** Admin makes a decision whether to approve requested tier.&#x20;

Results of verification by KYC provider are available for admins in the KYC case if the portal is configured to have the integration with KYC provider. If KYC provider's verification result is "Declined", "Cancelled" or "Error", KYC case is automatically closed and gets status "Declined". If KYC provider's verification result is "Accepted" then admin can decide either to **approve** requested tier for the user or to **decline** it. User will have to start another case after his current case is declined.

Admin can adjust KYC settings and define whether you want KYC cases to be automatically closed (approved/declined) based on the verification status received from KYC provider:

* approved if verification result is "Accepted"
* declined if verification result is "Declined"

This setting can be changed even when KYC checks functionality is already switched on. This setting is valid only for integration with KYC provider, if "Manual" provider is used, all KYC cases must be closed manually.\


<figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption><p>KYC cases status settings: when WLP must close cases automatically based on verification results received from the KYC provider</p></figcaption></figure>

**Step 3.** If tier upgrade was approved for user, user can start using functionality available for this tier. User will get a corresponding notification via email.

![All cases are filtered by status = "Open" by default, remove filter to check all cases](<../.gitbook/assets/image (11).png>)

![Example of positive verification results (KYC request status is Accepted), admin can either Approve or Decline KYC case](<../.gitbook/assets/image (4).png>)

## Order management

As the administrator you have access to the “Order Management” section of WLP. This section shows you a list of orders made by users. By clicking onto a row, the details of the selected purchase open. You also have the possibility to manually update the status of the purchase transaction.

By clicking "Export" you can download all purchases with all data stored in the portal in XLSX format. You can use it for further automation of your business processes.

## Redemption management

As the administrator you have access to the “Redemption Management” section of WLP. This section shows you a list of redemptions made by the users. By clicking onto a row, the details of the selected redemption request open. You also have the possibility to manually update the status of the redemption transaction.

By clicking "Export" you can download all redemptions with all data stored in the portal in XLSX format. You can use it for further automation of your business processes.
