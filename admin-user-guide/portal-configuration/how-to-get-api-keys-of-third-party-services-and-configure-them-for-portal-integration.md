# How to get API keys of third party services and configure them for portal integration

## Bank card payment provider - Payrexx

Login to your Payrexx account at [payrexx.com](https://www.payrexx.com/en/home/) and find following parameters:

1. Copy **Instance Name** from the URL bar after you login to your account \
   ![](<../../.gitbook/assets/Screenshot 2023-05-17 at 18.27.33.png>)\
   Remember, if your payment page URL is [https://example.payrexx.com](https://example.payrexx.com/) then **example** is your Instance Name.
2.  You can find **API key** in Webhooks & API section. It's better to create new integration and use it for portal integration to make sure you don't make any mistakes with other integrations.\


    <figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Put an integration name and click on the Add button. Now you can get your **API Key** here.\
Please, note that if you deactivate API key which you've provided, it has to be changed in the portal settings to keep the integration working.

Copy parameters above and send them to CoreLedger project manager to start using this integration in your WLP&#x20;

## Crypto payment provider - Coinify

Login to your Coinify account at [https://merchant.coinify.com/signup/now](https://merchant.coinify.com/signup/now) and go to Integration tools section. You need API keys tab where you can generate the API key. Please, copy both **API key and API secret** and send to CoreLedger project manage. Note that API secret is shown only during key generation process. Also, please, keep in mind that if you delete this API key, you will have to generate another one and provide its details one more time to keep the integration working

<figure><img src="../../.gitbook/assets/Screenshot 2023-05-17 at 18.31.33.png" alt=""><figcaption></figcaption></figure>

## KYC provider - Shufti Pro

#### Generate API key

Login to your account at [https://backoffice.shuftipro.com](https://backoffice.shuftipro.com/) and go to "Settings -> "API keys". Generate new key or use existing one by copying **Client ID and Secret Key**, send them to CoreLedger project manager to start using this integration in your WLP.

![Shufti Pro portal](<../../.gitbook/assets/Shufti APi keys.png>)

#### Configure redirect after user completes the KYC checks

After user submits all necessary data for KYC checks or after he cancels this procedure, user should be redirected back to the portal. Go to "Settings" -> "Callback\&Redirects URLs" and click "Add Domain", select type "Redirect" and enter your portal url into the field domain.

<div>

<figure><img src="../../.gitbook/assets/Screenshot 2023-07-10 at 16.52.41.png" alt=""><figcaption><p>Add redirect</p></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2023-07-10 at 17.01.12.png" alt=""><figcaption><p>Add redirect</p></figcaption></figure>

</div>
