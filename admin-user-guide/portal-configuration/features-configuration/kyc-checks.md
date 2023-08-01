---
description: >-
  Settings in this section are relevant for KYC functionality only. You can skip
  this part if you're not going to switch on feature "KYC checks"
---

# KYC checks

Go to **"Advanced config management"** in order to configure settings for KYC checks using json editor.

## Step 1. Decide how many tiers are necessary for your business case and describe them

You are welcome to set as many tiers as you need.&#x20;

{% hint style="info" %}
All users automatically get tier 0 when they register
{% endhint %}

Each tier must have following parameters:

* number - will be used for processing and also will be displayed to user and admin
* name - will be displayed to user under KYC description page
* description - optional, but we highly recommend to provide it, you can briefly explain your end-users the purpose of this tier and documents which they will need to submit to get it
* KYC providers configuration (starting from tier 1)\
  You can set one of the following options for name: "Manual" or "ShuftiPro" (note that register is important here). "config" value depends on the way you're going to handle the KYC checks.\
  :bangbang:Note that all tiers must have the same provider name.

### Manual KYC checks (no integration with 3rd party services)

If you are NOT interested in the [Shufti Pro integration](https://shuftipro.com/identity-verification/) for KYC process, you can use "Manual" as a provider's "name" and leave "config" parameter empty ("") which means that you're taking the responsibility for:

* instructing users of how they can go through KYC checks (you can send emails for this purpose),&#x20;
* collecting all necessary data from users (by email or via phone calls or any other method which you prefer),
* verifying the validity of the provided data.

You can use portal for receiving the tier requests in the form of KYC cases and managing the results of the verification by approving or declining the requested KYC tier.

### ShuftiPro KYC provider integration &#x20;

If you are interested in setting up the [Shufti Pro integration](https://shuftipro.com/identity-verification/), you are supposed to use "ShuftiPro" as a provider's "name" and define the "config" parameter for each tier.\
ShuftiPro config settings are described in the next step.&#x20;

```
 "kycTiersDescription": [
    {
      "number": 0,
      "name": "basic",
      "description": "It's a basic basic tier, you don't have to pass KYC checks, you already have it."
    },
    {
      "number": 1,
      "name": "advanced",
      "description": "You will have to provide your selfie, scan of passport or driving license to get this tier.",
      "providers": [
        {
          "name": "ShuftiPro",
          "config": "{\"language\":\"EN\", \"redirect_url\":\"https://wlp-uat.onteos.net\",\"verification_mode\":\"any\",\"document\":{\"supported_types\":[\"id_card\",\"driving_license\",\"passport\"],\"dob\":\"\",\"name\":{\"first_name\":\"\",\"middle_name\":\"\",\"last_name\":\"\",\"full_name\":\"\"},\"gender\":\"\",\"fetch_enhanced_data\":\"1\"}}"
        }
      ]
    },
    {
      "number": 2,
      "name": "professional",
      "description": "It's tier for professional traders",
      "providers": [
        {
          "name": "ShuftiPro",
          "config": "{\"language\":\"EN\", \"redirect_url\":\"http://wlp-uat.onteos.net\",\"verification_mode\":\"any\",\"document\":{\"supported_types\":[\"id_card\",\"driving_license\",\"passport\"],\"dob\":\"\",\"name\":{\"first_name\":\"\",\"middle_name\":\"\",\"last_name\":\"\",\"full_name\":\"\"},\"gender\":\"\",\"fetch_enhanced_data\":\"1\"}}"
        }
      ]
    }
  ],
```

## Step 2. Define KYC provider settings for each tier > 0

### Manual KYC checks (no integration with 3rd party services)

"config" parameter can be empty (set as ""), it will be ignored anyway

### ShuftiPro KYC provider integration &#x20;

If you use Active Sandbox product and run pilot project you are welcome to use CoreLedger test account for KYC provider, no need in any additional configuration.&#x20;

In order to use KYC functionality with Shufti Pro integration productively you will need to create your own productive account with [Shufti Pro](https://shuftipro.com/) and take following steps:

* Generate **API keys** for integration and send them to your CoreLedger project manager. Check how to [get them here](../how-to-get-api-keys-of-third-party-services-and-configure-them-for-portal-integration.md).&#x20;
* Configure **redirect URL** which will be used in integration parameters. This is the page to which user should be redirected after he or she completes the KYC checks in Shufti. Make a screenshot of the configured URL in Shufti Pro's account and send it to your CoreLedger project manager. [#how-to-configure-redirect-url-after-user-completes-the-kyc-checks](kyc-checks.md#how-to-configure-redirect-url-after-user-completes-the-kyc-checks "mention")
* Configure **integration parameters.** We use Onsite verification with OCR for integration with Shufti Pro. All parameters which can be set are described in [Shufti Pro's documentation in Verification Request section](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification). You will need to configure it by yourself or send screenshots described in [#how-to-define-kyc-configuration-and-test-the-kyc-flow-in-shufti-pro](kyc-checks.md#how-to-define-kyc-configuration-and-test-the-kyc-flow-in-shufti-pro "mention") and send them to your CoreLedger project manager together with all previous parameters.

{% hint style="info" %}
You can configure and define settings by yourself if you're familiar enough with json structure and integration parameters. If you have some problems, we can help you to configure Shufti Pro integration. You will have to provide screenshots with the selected parameters for your desired KYC flows for each tier > 0 (please note that we will need screenshots of each step: enabled services, each service parameters and common parameters) to your CoreLedger manager. Check info in [#how-to-define-kyc-configuration-and-test-the-kyc-flow-in-shufti-pro](kyc-checks.md#how-to-define-kyc-configuration-and-test-the-kyc-flow-in-shufti-pro "mention") to get necessary screenshots
{% endhint %}

{% hint style="danger" %}
Please, note that you have to decide based on your business case which checks are necessary and define configuration settings of these checks.&#x20;
{% endhint %}

Example which we use in our CoreLedger Active Sandbox (you can find it in KYC tier 1 settings in the example above) looks like this:

```
"config": "{
--language of Shufti Pro interface--
\"language\":\"EN\", 

--URL to which user will be redirected after KYC process in Shufti is over. You can put here any WLP page--
\"redirect_url\":\"https://wlp-uat.onteos.net\",

--required verification mode: online, offline or any--
\"verification_mode\":\"any\",

--settings of the required services, here service "document" is configured--
\"document\":
{\"supported_types\":[\"id_card\",\"driving_license\",\"passport\"],
\"dob\":\"\",
\"name\":{\"first_name\":\"\",\"middle_name\":\"\",\"last_name\":\"\",\"full_name\":\"\"},
\"gender\":\"\",
\"fetch_enhanced_data\":\"1\"}
}"
```

{% hint style="info" %}
"Config" parameter is a string made of json for technical reasons. Please, don't forget to use **\\** sign inside "config" parameter before each quotation sign **"**
{% endhint %}

In our example following parameters are set:

* language
* redirect\_url
* verification\_mode
* Document Service parameters: supported\_types, dob, name, gender, fetch\_enhanced_\__data

You can use our example parameters for tests or even pilot projects with Active Sandbox but for productive usage you have to enable and configure necessary Shufti Pro services. In Shufti Pro's documentation you can find additional parameters for each service:

* [Face Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#face-service)
* [Document Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#document-service)
* [Document Two Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#document-two-service)
* [Address Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#address-service)
* [Consent Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#consent-service)
* [Phone Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#phone-service)&#x20;
* [Background Checks Service](https://developers.shuftipro.com/docs/kyc/kyc\_onsite\_verification/with\_ocr\_verification#background-checks-service)

{% hint style="danger" %}
Please, don't set "reference" and "callback\_url" parameters described in Shufti Pro's documentation. They will be set automatically
{% endhint %}

#### How to configure redirect URL after user completes the KYC checks

After user submits all necessary data for KYC checks or after he cancels this procedure, user should be redirected back to the portal. Go to "Settings" -> "Callback\&Redirects URLs" and click "Add Domain", select type "Redirect" and enter your portal url into the field domain.

<div>

<figure><img src="../../../.gitbook/assets/Screenshot 2023-07-10 at 16.52.41.png" alt=""><figcaption><p>Add redirect</p></figcaption></figure>

 

<figure><img src="../../../.gitbook/assets/Screenshot 2023-07-10 at 17.01.12.png" alt=""><figcaption><p>Add redirect</p></figcaption></figure>

</div>

#### How to define KYC configuration and test the KYC flow in Shufti Pro

In order to define all configuration settings correctly and check how the user flow for KYC will look like, you can use "Product demo" functionality with a very user friendly UI in Shufti Pro's backoffice.&#x20;

1.  Go to your Shufti Pro backoffice, login to your account and [go to Integration tab](https://backoffice.shuftipro.com/integration), select "KYC journey builder" to start configuration process

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-08-01 at 14.51.02.png" alt=""><figcaption><p>Select "KYC Journey Builder" in Integration tab</p></figcaption></figure>
2.  Enter the name for this KYC journey. For example, "KYC tier 1 journey", "KYC tier 2 journey", etc.\
    Select the necessary KYC services from the list of available services by dragging them and dropping to the right area. Click "Start" and follow the configuration wizard. \
    Make a screenshot of each step after you've filled the desired parameters (before clicking "Next" or "Save").&#x20;

    <div>

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-08-01 at 15.06.14.png" alt=""><figcaption></figcaption></figure>

     

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-07-25 at 12.58.53.png" alt=""><figcaption></figcaption></figure>

     

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-07-25 at 13.01.29.png" alt=""><figcaption></figcaption></figure>

    </div>
3.  After you configure the flow you will see the button "Save". After you click it there are three available options what to do next. We recommend you to check the flow which you've built from user's perspective by clicking "Start Demo". If you realize that there should be some changes, you can always edit the KYC journey by selecting it in the list of journeys and clicking "Edit" icon.\
    After you make sure that the flow totally fits your needs, gather all the screenshots characterizing the flows built for each KYC tier and at the last step click "Code". Copy the code which will be displayed right after your click for each flow and forward it together with the screenshots to your CoreLedger manager or use it to configure KYC integration for each tier in the Advanced configuration tab of WLP.\


    <div>

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-08-01 at 14.55.18.png" alt=""><figcaption><p>End of the KYC journey configuration flow</p></figcaption></figure>

     

    <figure><img src="../../../.gitbook/assets/Screenshot 2023-08-01 at 15.32.08.png" alt=""><figcaption><p>Code characterizing some of the selected configuration parameters</p></figcaption></figure>

    </div>

## Step 3. Define which functionality should be available for each tier

Common rule for these settings is that you define the minimum KYC tier from which this specific functionality is available.

Following functionality can be made unavailable for specific tiers:

* visibility of Shop functionality, Redemption functionality - set minimum KYC tier from which corresponding menu items and all functionality on this pages will be visible to users
* availability of Shop functionality, Redemption functionality - set minimum KYC tier from which all assets will be available for purchasing (if other tiers are not specified for some assets) and all redemption methods will be available (if other tiers are not specified for some redemption methods)&#x20;

```
  "kycTierFunctionalRestrictions": {
    "visibility": {
      "purchase": 0,
      "redemption": 0
    },
    "availability": {
      "purchase": 1,
      "redemption": 1
    }
  },
```

In our example Shop and Redemption menu items are always displayed, but all assets and redemption methods will be closed by "Get tier 1" button for users with current tier = 0.

* specific assets for purchasing - set minimum KYC tier from which this asset can be purchased, you can find parameter "kycTier" in config file in "asset" object (check [how assets are configured for purchasing](purchase-assets-and-featured-asset/#purchase-assets))
* specific payment methods - set minimum KYC tier from which this payment method can be used, you can find parameter "kycTier" in config file in "payment method" object (check [how payment methods are configured for purchasing](purchase-assets-and-featured-asset/#payment-methods-configuration))
* specific redemption methods - set minimum KYC tier from which this payment method can be used, you can find parameter "kycTier" in config file in "redemption method" object (check [how redemption methods are configured](redemption-functionality/))

All configurations are reflected in the page representing description of KYC process for your end-users

![Page with description of KYC process](<../../../.gitbook/assets/image (6) (1).png>)

## Step 4. Don't forget to [switch on KYC checks](./) for your portal after configuration is finished
