# Asset configuration

## Asset configuration for WLA

{% hint style="info" %}
Starting from v0.21 most of the configuration can be done with WLM (described below), existing configuration of the existing assets in Assets.json still will be used in couple of versions more. But **all new assets must be configured with the help of WLM**
{% endhint %}

#### **Step 1. Define general asset properties in WLM**

Asset configuration starts in WLM. Some of the general asset properties are used in WLA. You can [read more](https://teos-docs.coreledger.net/v/white-label-management-tool/user-guide/create-asset) about asset creation in WLM.

* **Asset name** is used in WLA if WLA specific name is not defined (check Step 2)
* **Description** of the asset is going to be checked by WLA and in case it contains url (string starting from "http..."), it will be used as information link for info icon of the asset :point\_left: We recommend to include it if you have website for your asset
* **Unit of measure or Currency** (Currency must be filled in case asset type is Cash or Cash equivalent) of the asset are used as asset units in WLA

#### **Step 2. Define WLA specific properties in WLM**

When asset is created by the admin, additional properties necessary for WLA, can be added using collection "WLA\&WLP configuration". You can click "Add all" in the line of this collection, all available definition items will be added, you should only fill values for WLA relevant properties.

* **Make available in** - add "WLA" as a value here to make sure that this asset is used in WLA
* **WLA and WLP\_Asset ticker** - Asset ticker used both in WLA and WLP must be defined
* **WLA\_Name (optional)** - WLA specific asset name can be defined in case you want asset to be used in WLA with some alternative naming&#x20;
* If you want asset to be displayed in “My Asset” screen, even when the wallet has no Sparks of it, then the parameter **WLA\_Show if balance is 0** must be set to true
* **WLA and WLP\_Round to (optional)** - For each asset to be shown in WLA, you can define the number of decimal places to which asset units will be rounded in WLA screens in case precise number is too long. This parameter is optional, in case you don't define it, WLA will round the amounts to 2 decimal places in case of Asset type is Cash or Cash Equivalent and to 4 decimal places for all other Asset types

{% hint style="info" %}
Don't forget to remove optional properties values of which you don't want to define (Round to and Name)
{% endhint %}

<div>

<figure><img src="../../.gitbook/assets/Screenshot 2023-03-28 at 12.08.55.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2023-03-28 at 12.50.46.png" alt=""><figcaption></figcaption></figure>

</div>

#### Step 3. Translations to different languages

You can add translations for the name, description and ticker to German and Spanish languages in case you expect WLA users in these languages

Finally, you will have Asset defined in WLM which is going to be used in WLA

#### Step 4. Asset icon configuration

You must use Assets.json configuration file to define the icon of the asset. Asset icon is mandatory.

**Icon preparation:**

* Asset icon should be the square picture of file type PNG; recommended size: 400\*400 px
* Put the icon to the blob storage associated with your tenant to the folder "trading-app-configs/icons"
* Copy the path to the file

Open Assets.json configuration and list all the asset unique ids which are going to be used in WLA and their icons. Unique asset id can be found and copied from Asset details in WLM.

```
{
"uniqueAssetId": "0x0dd5ec6b49e94d8ac762f0001"
"icon": "icons/swiss_francs.png",
},
```

<figure><img src="../../.gitbook/assets/Screenshot 2023-03-28 at 12.54.25.png" alt=""><figcaption></figcaption></figure>

## ​Asset order

If you want to define default order of the assets to be displayed in the list of assets you can use the parameter below.

In the example below assets are order by the amount of units of measure on the balance in the descending order.&#x20;

* sort\_direction can have values "desc" (descending) and "asc" (ascending)
* sort\_by can have any asset object property as a value (for example, uomValue, name, description)

```
"assets": {
	"sort_by": "uomValue",
	"sort_direction": "desc"
},
```
