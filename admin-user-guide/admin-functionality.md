# Admin functionality

## KYC management

As administrator you have access to the KYC Management section of WLP. Here you can access the data, which users have provided during KYC process.

#### Process of KYC checks

{% hint style="info" %}
All users automatically get tier 0 when they register

Users can't have several KYC cases opened
{% endhint %}

Step 1. User goes through KYC checks if he wants to upgrade his tier. Process is described here [#kyc-checks](../how-your-users-interact-with-the-portal.md#kyc-checks "mention")and provides to KYC provider (Shufti Pro) all necessary data as configured for the requested tier.&#x20;

Step 2. Admin makes a decision whether to approve requested tier. Results of verification by KYC provider are available for admins in the KYC case. If KYC provider's verification result is "Declined", "Cancelled" or "Error", KYC case is automatically closed and gets status "Declined". If KYC provider's verification result is "Accepted" then admin can decide either to **approve** requested tier for the user or to **decline** it. User will have to start another case after his current case is declined.

Step 3. If tier upgrade was approved for user, user can start using functionality available for this tier. User will get a corresponding notification via email.

![All cases are filtered by status = "Open" by default, remove filter to check all cases](<../.gitbook/assets/image (17).png>)

![Example of positive verification results (KYC request status is Accepted), admin can either Approve or Decline KYC case](<../.gitbook/assets/image (4).png>)

## Order management

As the administrator you have access to the “Order Management” section of WLP. This section shows you a list of orders made by users. By clicking onto a row, the details of the selected purchase open. You also have the possibility to manually update the status of the purchase transaction.

## Redemption management

As the administrator you have access to the “Redemption Management” section of WLP. This section shows you a list of redemptions made by the users. By clicking onto a row, the details of the selected redemption request open. You also have the possibility to manually update the status of the redemption transaction.
