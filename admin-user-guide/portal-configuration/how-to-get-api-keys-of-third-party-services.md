# How to get API keys of third party services

## Bank card payment provider - Payrexx

Login to your Payrexx account at [payrexx.com](https://www.payrexx.com/en/home/) and find following parameters:

1. Copy **Instance Name** from the URL bar after you login to your account \
   ![](<../../.gitbook/assets/Screenshot 2023-05-17 at 18.27.33.png>)\
   Remember, if your payment page URL is [https://example.payrexx.com](https://example.payrexx.com/) then **example** is your Instance Name.
2.  You can find **API key** in API\&Plugins section. It's better to create new integration and use it for portal integration to make sure you don't make any mistakes with other integrations' data.\


    <figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Put an integration name (only used by you) and click on the Add button. Now you can get your **API Key** here.\
Please, note that if you deactivate API key which you've provided, it has to be changed in the portal settings to keep the integration working.

Copy parameters above and configure integration to start using it in your WLP [#credit-card](features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md#credit-card "mention")

## Crypto payment provider - Coinify

Login to your Coinify account at [https://merchant.coinify.com/signup/now](https://merchant.coinify.com/signup/now) and go to Integration tools section. You need API keys tab where you can request API keys to be generated. You are the new client most likely, so go to the New API documentation. You'll need to contact Coinify API Support to request the key.&#x20;

{% hint style="info" %}
The API key has the following format: `<environment>_<uuid>`, where the environment is `sandbox` for testing environment and `production` for production usage.
{% endhint %}

Please, provide the received API key and the environment, for which the API key is used in Payment method - Cryptocurrency payment provider (for more details see [Cryptocurrency payment method configuration](features-configuration/purchase-assets-and-featured-asset/payment-methods-configuration.md#cryptocurrency-payment-method)).

<div align="left">

<figure><img src="../../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure>

</div>

<div align="right">

<figure><img src="../../.gitbook/assets/image (50).png" alt=""><figcaption></figcaption></figure>

</div>

## KYC provider - Shufti Pro

#### Generate API key

Login to your account at [https://backoffice.shuftipro.com](https://backoffice.shuftipro.com/) and go to "Settings -> "API keys". Generate new key or use existing one by copying **Client ID and Secret Key**, send them to CoreLedger project manager to start using this integration in your WLP.

{% hint style="info" %}
Please make sure that you use the account (test account or production account) which is expected to be applied to the portal integration with Shufti Pro. Use the toggl on the top to switch between test account and production account
{% endhint %}

![Shufti Pro portal](<../../.gitbook/assets/Shufti APi keys.png>)
