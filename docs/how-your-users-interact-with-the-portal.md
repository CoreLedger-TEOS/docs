---
description: WLP functionality available for end users
---

# How your users interact with the portal

<p className="doc-description">WLP functionality available for end users</p>

## KYC checks

If you enable KYC functionality, availability and visibility of functionality for user is defined by his current KYC tier. Functionality which is not available will be closed by "Get KYC tier N". Users will be forced to go through KYC checks to get required KYC tier.

:::info
All users automatically get tier 0 when they register

Users can't have several KYC cases opened
:::

![Example of unavailable functionality for current tier (same restrictions can be applied to redemption methods, payment methods and specific assets for purchasing)](/img/gitbook-assets/image-3.png)

![Notification to pass KYC checks](/img/gitbook-assets/image-22.png)

![Page with description of KYC process](/img/gitbook-assets/image-6-1.png)

#### Flow for the case when the integration with the KYC provider is configured for the portal

After clicking "Get tier N" user is redirected to KYC provider's page, verification process takes place on the provider's page.

After user passes all necessary checks he is redirected back to the portal. After he gets an admin's approval of KYC tier (process described in [#kyc-management](./admin-user-guide/admin-functionality.md#kyc-management)), all functionality configured for this tier will be available for him.

#### Flow without the integration with the KYC provider

In case you've decided to manage the KYC process fully by yourself, you're taking the responsibility of collecting all necessary data from users and providing all instructions how to go through the process.

## Shop

Under the section “Shop” all assets configured in the “Config Management” section are listed.

Clicking on “More details” opens the URL defined in the Asset description provided in WLM or asset description text is shown. Clicking on “Add to cart” allows to add some quantities of this asset to user's shopping cart as shown below.

![Shop section](/img/gitbook-assets/image-7-1.png)

By clicking on the shopping cart on top, the cart opens and shows all items. User can change the quantity of the selected items or remove them.

![](/img/gitbook-assets/image-48.png)

_Shopping cart_

Click on “Checkout” brings user to the collection method selection screen.

As next step user can select how he wants to receive the purchased items. The list of collection methods [can be configured](./admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/collection-methods-configuration.md) in the “Configuration Management” editor by admin.

When selecting method of types "Wallets created in mobile app" and "Wallets saved to portal directly or via other TEOS platform components", a QR code dialog opens. User can scan the QR code with his WLA to check if the correct wallet is used. This step is optional and can be skipped.

![](/img/gitbook-assets/image-13.png)

_Collection method selection_

After selecting the collection method, further requested details must be provided as shown in the picture below.

![](/img/gitbook-assets/image-14.png)

_Define invoice details_

The details of the order are shown for confirmation after clicking the “Continue” button in "Your Order" tab with all applied fees. For calculation details, user can hover over the corresponding tooltip and see the calculations for different fee types with variable and fixed fee parts.

![](/img/gitbook-assets/image-49.png)

_Order details_

If everything is fine, user goes to selecting the payment method he wants to use. Currently the methods “Bank Transfer”, “Credit Card” and “Bitcoin” are available as shown in the picture. Admin manages them [in cofig file](./admin-user-guide/portal-configuration/features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md).

![](/img/gitbook-assets/image-2.png)

_Payment method selections_

After providing payment method order details will be displayed again and sent to users email.

### Redemption

“Redemption” should be used to convert assets into e.g. Swiss Francs, Bitcoins, Ether, ERC20 Tokens or trigger a physical delivery.

First user needs to select the redeem method as shown below. For each method, a method fee [can be configured](./admin-user-guide/portal-configuration/features-configuration/redemption-functionality/index.md). Additionally, each method can be enabled or disabled by admin.

![](/img/gitbook-assets/image-17.png)

_Select redemption method_

Enter the requested redemption method details and submit the payout request. \
Amount can be defined both as amount to pay and amount to receive. All fees can comprise variable and fixed parts, are calculated automatically and included in the amounts. The pricing details are presented below. If user needs to see the details of the fee calculation, he can hover over the tooltip.

![](/img/gitbook-assets/image-56.png)

_Define the redeemed amount if step value is 0_

![](/img/gitbook-assets/image-57.png)

_Define the redeemed amount if step value is not 0_

![](/img/gitbook-assets/screenshot-2023-01-09-132437.png)

_Define the payout details (depends on the redemption method)_

![](/img/gitbook-assets/image-58.png)

_Define additional details requested within redemption flow_

A summary of the payout details is presented and can be confirmed after accepting the terms and conditions.

![](/img/gitbook-assets/image-59.png)

_Redemption details confirmation_

QR code should be scanned with WLA and the transaction must be confirmed. The sparks will be transferred from the account to the configured address and the respective amount.

![QR code for scanning by WLA and triggering transaction for transferring asset user wants to redeem](/img/gitbook-assets/image-15.png)

## Account

Here the user can define the information about his account, manage his saved crypto wallets and bank accounts, upgrade his KYC tier.
