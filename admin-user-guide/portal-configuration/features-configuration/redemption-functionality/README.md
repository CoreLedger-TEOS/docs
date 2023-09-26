---
description: >-
  Settings in this section are relevant for redemption functionality only. You
  can skip this part if you're not going to switch on feature "Redeem assets"
---

# Redemption functionality

Full configuration of Redemption functionality includes following steps:

#### Step 1. Configure general redemption settings

Use **"redeemSettings"** section of the config file available under the Advanced Config Management.&#x20;

* :new: Define the display name of corresponding menu item which is called "Redemption" by default "redeemSettings" -> "menuItemName"\
  This value is used for menu item display name which is "Redemption" by default. The name will be the same in all languages. You can use up to 20 symbols.
*   Define the description of the redemption method selection step for your end users with the help of "methodSelectionDescription" parameter. Text is shown at "Select method" step\


    <figure><img src="../../../../.gitbook/assets/image (40).png" alt=""><figcaption><p>Redemption method selection screen</p></figcaption></figure>
* :new: You can request additional information from users when they create a redemption request. You should define the label of the input which will be shown to user and its description. This field allows to provide the text up to 350 symbols.\
  You can disable this field in the config file under the Advanced Config Management any time later.\
  Please, note that if you enable this field, it will be added to all redemption methods.

```
  "redeemSettings": {
     "menuItemName": "Custom Redemption",
     "methodSelectionDescription": "Here you can request a payout of accumulated revenue. At this point in time tokens can be converted into Swiss Francs, Bitcoin and Ethereum. Restrictions do exist in form of minimum and maximum payout limits. Regardless of the chosen payment option, personal data of the beneficiary is needed.",
     "additionalInfoRedemptionRequest": {
      "enabled": false,
      "name": "Additional info",
      "description": "This is extra field, our business case needs it for all redemptions"
    }
    }
```

If "additionalInfoRedemptionRequest" is configured and enabled, additional field will be available for used in redemption flow\


<figure><img src="../../../../.gitbook/assets/image (44).png" alt=""><figcaption><p>"additionalInfoRedemptionRequest" is configured and enabled</p></figcaption></figure>

#### Step 2. Configure redemption methods&#x20;

One method is configured for redeeming one specific asset for receiving fiat money ("bank" type) /cryptocurrency ("ETH", "bitcoin" or "ERC20" types) /physical asset ("physical" type) as a payout as described below.

Depending on the selected redemption method, the user can provide the bank account details, bitcoin address, ETH address, or delivery address to receive the selected value when doing the redemption. The WLP admin can set up each of those redemption methods under the Advanced Config Management. Also, you can define KYC tier which users must have for each redemption method to be able to use it (check below parameter "kycTier"). [Read more about KYC configurations](../kyc-checks.md)

Example redemption type “bank” and all properties are described below:

```
{
"id": "0000-342-34242-123131",
"enabled": true,
"type": "bank",
"name": "Bank Transfer - National",
"description": "Request a redemption from XY",
"icon": "icons/gemstone_200x150.jpg",
"kycTier": 1,
"showTermsAndConditionsCheckbox": true,
"additionalCheckboxesDetailsScreen": [
"I agree to the Terms of Bank transfers and Payouts and confirm that the information above is correct."
],
"additionalCheckboxesSummaryScreen": [
"I hereby confirm that the order is binding and I have to deposit the regarding amount within 3 working days.",
"I hereby confirm that I use the correct amount and Payment Reference, otherwise funds could be lost."
],
"userGets": {
    "uom": "EUR",
    "conversionRate": 0.02,
    "feesWithheld": {
        "issuerFee": 4,
        "methodFee": 2,
        "countryFees": {
            "AT": 1.5,
            "DE": 8,
            "CH": 0,
            "US": 1
        },
    "fallbackCountryFee": 5,
    }
},
"userPays": {
    "uniqueAssetId": "0x46f4f3fa75df1b2112e3a7303895bf9dacd4bba9",
    "targetAddress": "0x46f4f3fa75df1b2112e3a7303895bf9dacd4bba9",
    "limits": {
    "minNetAmount": 5,
    "maxNetAmount": 600,
    "incrementNetAmount": 5
    }
}
},
```

* "id" \[mandatory]: The admin must define a unique “id” for the redemption method. We recommend to use free online guid generators (for example, [this one](https://guidgenerator.com/))
* "enables" \[mandatory]: true or false, by setting this value you can manage the availablity of the redemption method to end users
* "type" \[mandatory]: one of the following types are available at the moment “bank”, “bitcoin”, “ERC20”, “physical” and “ETH”
* "name" \[mandatory]: name of the redemption method
* "description" \[mandatory]: description of the redemption method, it is used as the details shown when clicking "Read more"
* "icon" \[optional]: any icon can be put as a redemption picture, the icon must be available in the blob storage and the respective path must be entered in the config file. Please, use the square picture of file type PNG; recommended size: 400\*400 px. Even if you're not going to use the customized redemption icon, you're not allowed to remove this line from the config, please, just leave the value empty.
* "kycTier" \[optional]: define the minimum KYC tier at whoch the redemption method should be available. Even if you're not going to KYC, you're not allowed to remove this line from the config, please, just leave the value empty.
* "showTermsAndConditionsCheckbox" \[mandatory]: true or false, by setting this value you can define whether to ask user to prove that he already checked the terms and conditions of the portal or not.
* "additionalCheckboxesDetailsScreen",  "additionalCheckboxesSummaryScreen" \[optional]: the list of checkboxes for details and summary screens. Just add a new string line with the text for the checkbox. Even if you're not going to set it, you're not allowed to remove this line from the config, please, just leave the value empty.\
  You can use the links to some publicly available resources in the following format: (url "\[clickable text] (https://resource.com)")
* "userGets" \[mandatory]: you need to specify what user can get as a payout within this redemption method. It's totally up to you.
  * "uom" \[mandatory]: specify units of measure of the payout, this could be different currencies, ETH, BTC, any ERC-20 and even the uom of physical goods the user receives after a successful redemption
  * "conversionRate" \[mandatory]: define conversion rate between 1 payout unit of measure and 1 unit of the redeemed asset as conversion rate = units of the redeemed asset/payout units of measure\
    For example, redeeming XYCoin to receive EUR with a conversation Rate of 2.5. means, that the user needs to send 2.5 XYCoins to get 1 EUR.
  * "feesWithheld" \[mandatory]: define the fees for this redemption method in the payout units. The fees will be shown and calculated in the redemption flow. Fees are always included in the amount user pays. All fees must be equal to integer value of sparks of the redeemed asset (depends on the asset spark factor)
    * “methodFee” can be set, which will be charged when selecting the respective method
    * “countryFee” can be set and is charged when the respective country is selected. For country specific fees use country code and fee in payout units of measure. A fallback country fee can be configured with “fallbackCountryFees”\
      Country is defined by user's beneficiary details of the redemption
    * a separate issuer fee can be configured with “issuerFee”
  * "limits" consisting of "minNetAmount", "maxNetAmount" and "incrementNetAmount" \[mandatory]: limits can be defined either on "User pays" (in redeemed asset units of measure) or "User gets" side (in payout units) in corresponding units of measure, not on both! **For redemption type = "physical"** limits must be configured only on "User gets" side in the payout units.\
    Define the minimum and maximum amount of units which can be requested by user and the step with which value can be increased between minimum and maximum amounts. \
    All three values must be equal to integer value of sparks of the redeemed asset (depends on the asset spark factor). Don't think about fees here, they will be added on top to get the final amount which user will have to pay.\
    If you keep "incrementNetAmount" = 0, portal will let user to define any value between minimum and maximum amount.\
    If you define some value for "incrementNetAmount", user pays and user receives amount inputs in redemption flow will be enriched with the "+" and "-" signs to limit the values which can be entered as desired amount.
*   "userPays" \[mandatory]: you need to specify which asset can be redeemed within this redemption method

    * "uniqueAssetId" \[mandatory]: use unique id of the asset, all asset info will be used within redemption flow
    * "targetAddress" \[mandatory]: define the address to which sparks of redeemed asset must be sent
    * "limits" consisting of "minNetAmount", "maxNetAmount" and "incrementNetAmount" \[mandatory]: limits can be defined either on "User pays" (in redeemed asset units of measure) or "User gets" side (in payout units) in corresponding units of measure, not on both! **For redemption type = "physical"** limits must be configured only on "User gets" side in the payout units.\
      Define the minimum and maximum amount of units which can be requested by user and the step with which value can be increased between minimum and maximum amounts. \
      All three values must be equal to integer value of sparks of the redeemed asset (depends on the asset spark factor). Don't think about fees here, they will be added on top to get the final amount which user will have to pay.\
      If you keep "incrementNetAmount" = 0, portal will let user to define any value between minimum and maximum amount.

    <figure><img src="../../../../.gitbook/assets/image (43).png" alt=""><figcaption><p>Redemption details definition if step value is 0 (incrementNetAmount = 0)</p></figcaption></figure>

    \
    If you define some value for "incrementNetAmount", user pays and user receives amount inputs in redemption flow will be enriched with the "+" and "-" signs to limit the values which can be entered as desired amount.\


    <figure><img src="../../../../.gitbook/assets/image (42).png" alt=""><figcaption><p>Step values controls are shown  in case step value is defined by the admin  (incrementNetAmount is not 0)</p></figcaption></figure>

#### Step 3. Prepare template for sending redemption details to users via the email   [template-for-redemption-details.md](template-for-redemption-details.md "mention")

#### Step 4. Also, don't forget to configure[ reference code template ](../#reference-code-template)which is used both for purchase reference codes and redemption reference codes
