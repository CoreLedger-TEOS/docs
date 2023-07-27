# Asset configuration

{% hint style="info" %}
Starting from v0.15 most of the asset configuration can be done with WLM (described below), existing configuration of the existing assets was moved from the config file which is available under Advanced config management and still will be used. But **all new assets must be configured with the help of WLM and in case of any changes in the existing assets asset must be amended in WLM and fully defined**
{% endhint %}

#### **Step 1. Define general asset properties in WLM**

Asset configuration starts in WLM. Some of the general asset properties are used in WLA. You can [read more](https://teos-docs.coreledger.net/v/white-label-management-tool/user-guide/create-asset) about asset creation in WLM.

* **Asset name** is used in WLA if WLA specific name is not defined (check Step 2)
* **Description** of the asset is going to be checked by WLP and in case it contains url (string starting from "http..."), it will be used as "Read more" details in the shop. We recommend to add it if you have website for your asset to the end of the description in the following format

> This is a nice description of the asset\
> https://link\_to\_the\_asset.net

* **Unit of measure or Currency** (Currency must be filled in case asset type is Cash or Cash equivalent) of the asset are used as asset units in WLP

#### **Step 2. Define WLP specific properties in WLM**

When asset is created by the admin, additional properties necessary for WLP, can be added using collection "WLA\&WLP configuration". You can click "Add all" in the line of this collection, all available definition items will be added, you should only fill values for WLP relevant properties.

* **Make available in** - add "WLP" as a value here to make sure that this asset is used in WLP
* **WLA and WLP\_Asset ticker** - Asset ticker used both in WLA and WLP must be defined
* **WLP\_Name (optional)** - WLP specific asset name can be defined in case you want asset to be used in WLP with some alternative naming&#x20;
* **WLA and WLP\_Round to (optional)** - For each asset to be shown in WLP, you can define the number of decimal places to which asset units will be rounded in WLP screens in case precise number is too long. This parameter is optional, in case you don't define it, WLP will round the amounts to 2 decimal places in case of Asset type is Cash or Cash Equivalent and to 4 decimal places for all other Asset types

{% hint style="info" %}
Don't forget to remove optional properties if you don't want to define their values (Round to and Name)
{% endhint %}

![](<../../.gitbook/assets/image (5).png>)![](<../../.gitbook/assets/image (1).png>)



#### Step 3. Define translations for asset description, asset name and asset ticker

You can add translations for the name, description and ticker to English, German and Spanish languages in case you expect WLP users speaking these languages.

{% hint style="info" %}
Please, note that in WLP v0.15 asset translations are not used yet. We're working on it, this functionality will be delivered soon!
{% endhint %}

Finally, you will have Asset defined in WLM which is going to be used in WLP. You can use TEOS API POST Asset functionality for the same purpose without WLM UI.

#### Step 4. Asset properties for purchasing and redemption

There are still some very specific asset properties which are used in WLP in purchase and redemption processes. They can be defined directly in WLP in [purchase-assets-and-featured-asset](features-configuration/purchase-assets-and-featured-asset/ "mention") and [redemption-functionality](features-configuration/redemption-functionality/ "mention")
