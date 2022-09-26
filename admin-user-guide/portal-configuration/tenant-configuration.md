---
description: >-
  General settings, admin users management, mobile app name setting, reference
  code template
---

# Tenant configuration

### White Label Mobile Application name

Go to **Configuration management** page to setup WLA name. Scroll down to **Mobile application config** section and provide the name to display

![](<../../.gitbook/assets/image (1) (1).png>)

The App name is part of the instructions shown during the redeem process when the QR code is presented as shown in the picture below.

![QR code scanning for redemption](<../../.gitbook/assets/image (11).png>)

### Currency

Go to **Advanced** **Configuration Management** page to setup currency

The default currency can be set in the “Advanced Configuration Management” editor and is shown in various places in the WLP.&#x20;

"currency": "EUR",

### Portal languages

Go to **Advanced** **Configuration Management** page to setup languages

List of **available languages** for the portal can be set in the "Configuration management". You can define which languages will be available for your users from this list:&#x20;

* English
* German
* Spanish

Available languages are set with the help of section "availableLanguages".&#x20;

Default language is used for the situations when custom texts don't have translations for the language selected by user. It can be set with the help of section "defaultLanguage"

```
 "defaultLanguage": "en",
  "availableLanguages": [
    "en",
    "es",
    "de"]
```
