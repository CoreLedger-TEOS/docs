# Features configuration

If you're going to use specific functionality, you should configure corresponding settings to adjust it to your needs.

{% hint style="warning" %}
Please, note that as soon as you switch on the feature, it will become available to your end-users, so we recommend to configure all necessary settings for the features before enabling them.
{% endhint %}

You can enable / disable the access to the functionalities “Purchase”, “Redeem”, "Featured asset" and "Know your customer checks" by setting necessary value for feature switchers in "Configuration management".&#x20;

![](<../../../.gitbook/assets/Screenshot 2023-04-24 at 16.54.47.png>)

#### Use WLP direct links for redemption and purchase

Starting from v0.15 we introduced additional feature for secondary markets. If the portal is going to be used for purchasing and redeeming assets provided by different customers, there is a chance that you're going to hide all other assets if end user goes to the portal using promotion link of the specific asset.

With the feature "Use WLP direct link for redemption and purchase" enabled, end users will find themselves directly at the featured asset page or at the first step of the specified redemption in the promoted url. End users won't be able to see other redemption methods and assets unless they are admins.

It's important to note that more than one asset can be defined as featured one

<figure><img src="../../../.gitbook/assets/Screenshot 2023-04-24 at 17.05.53 (1).png" alt=""><figcaption><p>User view when user uses direct link to the redemption method when "Use WLP direct links for redemption and purchase" is enabled </p></figcaption></figure>

### Reference code template

Go to **Advanced** **Configuration Management** page to setup Reference code template for all your purchases and redemptions to make sure your end user has some reference ID to tell you when he talks to your support.

The code can be configured using the following attributes and recommendations which will let you have around 11 millions unique reference codes:

* \+ is interpreted as a random number 0-9, include **at least 1 symbol**
* ! is interpreted as a random character a-Z, include **at least 2 symbols**
* \* is interpreted as a random number or character 0-9 and a-Z, include **at** **least 2 symbols**
* everything else is kept as it is
* we strongly recommend to use up to 10 symbols for your reference code template to keep it readable and user friendly

`"refCodeTemplate": “+**!!_2021”`

\
To make sure that every tenant has its own pool of codes, we add at the end of the refCode first letter of your tenant name automatically.\
The above refCodeTemplate will automatically generate codes like “57Rad\_2021\_tn” or “22doh\_2021\_tn”, where "\_tn" stand for "Tenant Name".

The reference code will be used/shown for each purchase order and redemption made in the portal, as well as on the invoice details PDF or redemption details PDF sent via e-mail.
