---
description: Main properties, additional properties, controllers, translations
---

# Create asset

Go to "Assets" in the sidebar menu. Click button “New Asset” at the top right.

### Step 1 - Main properties (mandatory)

Describe the asset you want to digitize. The fields shown in the form, are the main properties. You need to fill them out, before you activate the asset.

![](<../.gitbook/assets/image (51).png>)

If you finished filling out the main properties of your asset, click on “Save and next" to go to other optional steps. If you're sure you don't want to add additional properties, translations or controllers, you can activate the asset right away - process for signing transaction and writing asset to the blockchain will be triggered

#### Units of measure

![](<../.gitbook/assets/image (29).png>)

There are two types of units which can be used in TEOS (and in WLM particularly) for displaying asset amount: natural units of measure and sparks.

Every asset has its own representation in real world and thus has its own natural units of measure which are defined for the digital asset when it is created.  For example, steel is measure in kilograms or tons and man-hours in days or hours. ****&#x20;

Every digital asset written to the blockchain has unified indivisible unit of measure. In TEOS we call it Spark. **Spark is the generalized term for the smallest indivisible fraction of a digital asset** (like one Satoshi is for Bitcoin or one Wei is for Ether).

The number of sparks needed to get one unit of measure (kilogram, liter, token) can be defined by the TEOS user with the help of the Spark factor.&#x20;

For example, asset has unit of measure defined as liter and Spark factor as 1000. That means, that its smallest indivisible part refers to milliliter in the physical world. In this example, the smallest indivisible fraction for a TEOS to operate is 0.001 liter (1 Spark) of this asset.

For better understanding read [our article on Medium](https://medium.com/coreledger/introducing-spark-80ca62b3ebd3).

### Step 2 - Additional properties (optional)

In order to describe your asset in more details, you can now add additional properties to the main properties. Dependent on the tenant, there might be specific collections to choose from various additional properties. Or you might have created a catalog in advance (see [#definition-items-management](additional-settings-management.md#definition-items-management "mention")).&#x20;

If you're setting up an [Active Sandbox](https://coreledger.net/active-sandbox/) or productive solution based on TEOS Platform with [WLP ](https://teos-docs.coreledger.net/v/white-label-portal/)or [WLA](https://teos-docs.coreledger.net/v/white-label-mobile-app/), you are supposed to add necessary properties for WLP and WLA using collection "WLA\&WLP configuration". You can click "Add all" in the line of this collection, all available definition items will be added.&#x20;

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

This collection contains following properties:

* **Mandatory properties**
  * Make available in: WLA, WLP\
    With this property you're defining whether this asset will be available in corresponding platform component. Just pick necessary options
  * WLA and WLP\_ticker\
    Every asset should have a ticker which is used both in WLA and WLP for showing to user. Define it here
* If asset is going to be used in WLA:
  * Show if balance is 0\
    You can check this checkbox if you want WLA users to see this asset in the list of assets even if they have 0 balance
* **Optional properties**
  * Round to\
    You can decide how many decimal numbers should be shown to users when they check asset balance in WLA and WLP. By default we're going to show 2 decimal numbers for currencies (asset type "cash and cash equivalent") and 4 for all other asset types
  * If asset is going to be used in WLA: WLA Name\
    You can define asset name specifically for WLA. If it's not set, Asset name defined in [#step-1-main-properties-mandatory](create-asset.md#step-1-main-properties-mandatory "mention")will be used
  * If asset is going to be used in WLP: WLP Name\
    You can define asset name specifically for WLP. If it's not set, Asset name defined in [#step-1-main-properties-mandatory](create-asset.md#step-1-main-properties-mandatory "mention")will be used

{% hint style="info" %}
You should remove all optional properties if you're not going to use them.\
If you want to change some properties afterwards, you can create an [amendment](manage-asset-asset-details-asset-operations/amend-asset-edit-translations.md), changes will be applied in WLA and WLP automatically&#x20;
{% endhint %}

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

As soon as you added all properties needed to describe your asset in depth, click “Save and Next” or "Activate". After asset is activated, asset will be available in WLA and WLP automatically, you will be able to continue configuration of WLP specific and WLA specific properties directly in the corresponding component.

### Step 3 - Add controllers (optional)

After that you can add controller and thus limit the access to your asset to specific users only. For creating a controller see section [#create-new-controller](controller-management.md#create-new-controller "mention")\
Click “Save and Next” to continue or "Activate" right away.

![](<../.gitbook/assets/image (37).png>)

### Step 4 - Translations (optional)

At the last step of creating an asset you can translate the properties of your asset to another language. After you selected a language (top of the page), you can translate the original language (left side) and enter the translated values into the corresponding fields (right side).

Some of the properties can't be translated (like numeric ones). You can click "Hide non-editable" to hide them.

![](<../.gitbook/assets/image (35).png>)

If you have finished these steps, you can click “Activate”.

### Step 5 - Signing transaction (mandatory)

The transaction is being pushed to the TX.Mobile app. You get a notification on your mobile phone. You have to sign it to finish asset creation in blockchain  [sign-and-check-executed-transactions.md](sign-and-check-executed-transactions.md "mention")

Check the list of Issued assets after you go through these steps to find your new asset.

### Step 6 - Add NFT/FT contract (optional)

In case your tenant is configured to support FT or NFT contracts you can add them to newly created asset.

#### NFT

Go to "Settings" -> "NFT contracts", pick the one you need from the list of existing NFT contracts, click "Add Asset" and pick your asset from the list of  assets

![](<../.gitbook/assets/image (80).png>)

Check how to create NFT contracts here [ft-and-nft-contracts.md](manage-asset-asset-details-asset-operations/ft-and-nft-contracts.md "mention")

#### FT

Go to Asset details, you will find in the menu on the right the possibility to create FT contract for this asset. You will have to provide contract data, after it is created you will see it in the Asset details view. Learn more about [ft-and-nft-contracts.md](manage-asset-asset-details-asset-operations/ft-and-nft-contracts.md "mention")

![](<../.gitbook/assets/image (25).png>)

![](<../.gitbook/assets/image (24).png>)
