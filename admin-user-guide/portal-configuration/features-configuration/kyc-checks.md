---
description: >-
  Settings in this section are relevant for KYC functionality only. You can skip
  this part if you're not going to switch on feature "KYC checks"
---

# KYC checks

Go to **"Advanced config management"** in order to configure settings for KYC checks using json editor.

## KYC tiers configuration

#### Step 1. Decide how many tiers are necessary for your business case and describe them

You are welcome to set as many tiers as you need.&#x20;

{% hint style="info" %}
All users automatically get tier 0 when they register
{% endhint %}

Each tier must have following parameters:

* number - will be used for processing and also will be displayed to user and admin
* name - will be displayed to user under KYC description page
* description - optional, but we highly recommend to provide it, you can briefly explain your end-users the purpose of this tier and documents which they will need to submit to get it
* KYC providers configuration (starting from tier 1) - for now only Shufti Pro is available as a provider, so parameter "name" mustn't be changed. Its config settings are described below.&#x20;

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

#### Step 2. Define KYC provider settings for each tier > 0

If you use Active Sandbox product and run pilot project you're welcome to use CoreLedger test account for KYC provider. In order to use KYC functionality productively you will need to create your own productive account with [Shufti Pro](https://shuftipro.com/) and send keys to our project manager. Check how to [get them here](../how-to-get-api-keys-of-third-party-services.md).&#x20;

We use Onsite verification with OCR for integration with Shufti Pro. All parameters which can be set are described in [Shufti Pro's documentation](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#on-site-verification-with-ocr) in Verification Request section.&#x20;

{% hint style="danger" %}
Please, don't set "reference" and "callback\_url" parameters described in Shufti Pro's documentation. They will be set automatically
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

{% hint style="danger" %}
Please, notice that you have to decide based on your business case which checks are necessary and define configuration settings of these checks.&#x20;
{% endhint %}

You can use our example parameters for tests or even pilot projects with Active Sandbox but for productive usage you have to enable and configure necessary Shufti Pro services. Here you can find additional parameters for each service:

* [Face Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#face-service)
* [Document Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#document-service)
* [Document Two Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#document-two-service)
* [Address Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#address-service)
* [Consent Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#consent-service)
* [Phone Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#phone-service)
* [Background Checks Service](https://api.shuftipro.com/api/docs/onsite\_with\_ocr/#background-checks-service)

#### Step 3. Define which functionality should be available for each tier

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

* specific assets for purchasing - set minimum KYC tier from which this asset can be purchased, you can find parameter "kycTier" in config file in "asset" object (check [how assets are configured for purchasing](purchase-assets-and-featured-asset.md#purchase-assets))
* specific payment methods - set minimum KYC tier from which this payment method can be used, you can find parameter "kycTier" in config file in "payment method" object (check [how payment methods are configured for purchasing](purchase-assets-and-featured-asset.md#payment-methods-configuration))
* specific redemption methods - set minimum KYC tier from which this payment method can be used, you can find parameter "kycTier" in config file in "redemption method" object (check [how redemption methods are configured](redemption-functionality.md))

All configurations are reflected in the page representing description of KYC process for your end-users

![Page with description of KYC process](<../../../.gitbook/assets/image (6).png>)

Step 4. Don't forget to [switch on KYC checks](./) for your portal after configuration is finished
