# Payment methods configuration

Starting from v0.16  paymemnt methods can be configured via UI under "Configuration management" -> "Purchase configuration" -> "Payment methods".&#x20;

Currently the following three payment methods are available:&#x20;

* “Bank Transfer” - user pays via bank transfer based on the invoice details configured by admin
* “Credit Card”  - user pays with his debit or credit card
* “Cryptocurrencies” - user pays with the listed tokens

All methods can be enabled only if they are properly configured and can be disabled at any moment.

<figure><img src="../../../../.gitbook/assets/image (26).png" alt=""><figcaption><p>"Configuration management" -> "Purchase configuration" -> "Payment methods"</p></figcaption></figure>

{% hint style="info" %}
Please note that

* there must be at least one configured and enabled payment method to switch on  "Featured asset" and/or "Asset purchase" featured
* if the "Featured asset" or/and "Asset purchase" features are switched on you can't disable all payment methods: at least one collection method must be configured and enabled
{% endhint %}

### General characteristics for all payment methods

*   Description of the method in all available languages for the portal which will be shown to user in the checkout flow in Payment method's tile details\


    <div>

    <figure><img src="../../../../.gitbook/assets/image (27).png" alt=""><figcaption><p>Description definition in the Configuration management</p></figcaption></figure>

     

    <figure><img src="../../../../.gitbook/assets/image (30).png" alt=""><figcaption><p>Description is shown in the payment method's tile in user checkout flow</p></figcaption></figure>

    </div>
* You can define KYC tier which users must have for each payment method to be able to use it during checkout process. By default Tier 0 is applied [Read more about KYC configurations](../kyc-checks.md)\
  ![](<../../../../.gitbook/assets/image (28).png>)
* You can define purchase amount limit, which the user must not exceed to use the corresponding payment method, when creating order. The limit is set in the portal currency, and has a number value. If the user exceeds the payment method limit, the payment method will not be available.

<div align="left">

<figure><img src="../../../../.gitbook/assets/image (59).png" alt="" width="375"><figcaption><p>Purchase amount limit in Configuration management</p></figcaption></figure>

 

<figure><img src="../../../../.gitbook/assets/image (60).png" alt="" width="375"><figcaption><p>Purchase amount limits, displayed to the user</p></figcaption></figure>

</div>

### Additional characteristics of specific collection methods

#### Bank transfer payment method

Step 1. Configure bank transfer details

For the payment method “Bank Transfer” the bank details of the receiving account must be configured, they will be used in the invoice generated for the order. \
Descriptions for each field of the bank details are optional, in case you provide them, users will see them in info tooltip. Descriptions can be added in all languages available for the portal.&#x20;

<figure><img src="../../../../.gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

You can also add up to 3 additional bank ids (apart from SWIFT or BIC) in case your bank has some details apart from the regular ones. You have to provide name and value for each of them. And optionally you have possibility to add description in all languages available for the portal. We recommend to provide the description for such ids to make sure that users understand the purpose of them and make correct bank transfer.

<figure><img src="../../../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

You can also add details of intermediary bank in case you expect international payments and your bank has intermediary bank details for them. We recommend to add description for this section to explain to your users what it is. Optionally you can provide translations in all available languages.\


<figure><img src="../../../../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

Step 2. Prepare the template for invoice details

Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template for invoice details must be configured. Send it to your CoreLedger manager to apply it in your portal

#### Credit card payment method

Step 1. Configure credit card payment parameters

Apart from the [#general-characteristics-for-all-payment-methods](payment-methods-configuration.md#general-characteristics-for-all-payment-methods "mention") integration with cryptopayment provider must be configured to use this payment method.&#x20;

Currently integration with [Payrexx](https://www.payrexx.com/en/home/) is used for credit card payments.&#x20;

To use it productively you will have to provide your Payrexx account details:

* Payrexx account name (they also call it Instance Name in some documents)
* API secret&#x20;

Check [#bank-card-payment-provider-payrexx](../../how-to-get-api-keys-of-third-party-services.md#bank-card-payment-provider-payrexx "mention") to find integration parameters in your Payrexx account. Payrexx account configuration must be done separately according to Payrexx guidelines. Please, make sure that the portal currency is within the payment currencies configured for Payrexx.

<figure><img src="../../../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

For pilot project within Active Sandbox you can start without your own account, you are allowed to use CoreLedger test account. Discuss it with your CoreLedger manager.\


Step 2. Prepare the template for credit card purchase details

Purchase details based on this template are sent to the user when credit card is selected as a payment method. \
Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template must be configured. Send it to your CoreLedger manager to apply it in your portal.

#### Cryptocurrency payment method

Step 1. Configure credit card payment parameters

Apart from the [#general-characteristics-for-all-payment-methods](payment-methods-configuration.md#general-characteristics-for-all-payment-methods "mention") integration with cryptopayment provider must be configured to use this payment method.&#x20;

Currently integration with [Coinify ](https://www.coinify.com/)is used for cryptocurrency payments.

To use it productively you will have to provide your Coinify account details:

* API key
* The environment, for which the API key is used (Sandbox or Production)

Check [#crypto-payment-provider-coinify](../../how-to-get-api-keys-of-third-party-services.md#crypto-payment-provider-coinify "mention") to find integration parameters in your Coinify account. Coinify account configuration must be done separately according to Coinify guidelines.&#x20;

<figure><img src="../../../../.gitbook/assets/image (54).png" alt=""><figcaption></figcaption></figure>

For pilot project within Active Sandbox you can start without your own account, you are allowed to use CoreLedger test account. Discuss it with your CoreLedger manager.

Step 2. Prepare the template for cryptopayment purchase details

Purchase details based on this template are sent to the user when cryptopayment is selected as a payment method. \
Refer to [templates-for-purchase-details-and-invoice-details.md](templates-for-purchase-details-and-invoice-details.md "mention") to check how the template must be configured. Send it to your CoreLedger manager to apply it in your portal.
