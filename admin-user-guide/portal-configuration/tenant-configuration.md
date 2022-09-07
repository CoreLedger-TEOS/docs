---
description: General settings, admin users management, mobile app name setting
---

# Tenant configuration

### White Label Mobile Application name

Go to **Configuration management** page to setup WLA name. Scroll down to **Mobile application config** section and provide the name to display

![](<../../.gitbook/assets/image (1).png>)

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

### Bank reference code

Go to **Advanced** **Configuration Management** page to setup Purchase reference code to make sure your end user has some reference ID to name you when he talks to your support.

The code can be configured using the following attributes and recommendations which will let you have around 11 millions unique reference codes:

* \+ is interpreted as a random number 0-9, **at least 1 symbol**
* ! is interpreted as a random character a-Z, **at least 2 symbols**
* \* is interpreted as a random number or character 0-9 and a-Z, , at **least 2 symbols**
* everything else is kept as it is
* we strongly recommend to use up to 10 symbols for your reference code template to keep it readable and user friendly

`"refCodeTemplate": “+**!!_2021”`

\
The above refCodeTemplate will automatically generate codes like “57Rad\_2021” or “22doh\_2021”.

The reference code will be used/shown for each order made in portal, as well as on the invoice details PDF sent via e-mail.
