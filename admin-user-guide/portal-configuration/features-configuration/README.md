# Features configuration

If you're going to use specific functionality, you should configure corresponding settings to adjust it to your needs.

{% hint style="warning" %}
Please, note that as soon as you switch on the feature, it will become available to your end-users, so we recommend to configure all necessary settings for the features before enabling them.
{% endhint %}

You can enable / disable the access to the functionalities “Purchase”, “Redeem”, "Featured asset" and KYC by setting necessary value for feature switchers in "Configuration management".&#x20;

![](<../../../.gitbook/assets/image (21).png>)

### Reference code template

Go to **Advanced** **Configuration Management** page to setup Reference code template for all your purchases and redemptions to make sure your end user has some reference ID to tell you when he talks to your support.

The code can be configured using the following attributes and recommendations which will let you have around 11 millions unique reference codes:

* \+ is interpreted as a random number 0-9, **at least 1 symbol**
* ! is interpreted as a random character a-Z, **at least 2 symbols**
* \* is interpreted as a random number or character 0-9 and a-Z, , at **least 2 symbols**
* everything else is kept as it is
* we strongly recommend to use up to 10 symbols for your reference code template to keep it readable and user friendly

`"refCodeTemplate": “+**!!_2021”`

\
The above refCodeTemplate will automatically generate codes like “57Rad\_2021” or “22doh\_2021”.

The reference code will be used/shown for each purchase order and redemption made in the portal, as well as on the invoice details PDF or redemption details PDF sent via e-mail.
