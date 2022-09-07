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

In order to describe your asset in more details, you can now add additional properties to the main properties. Dependent on the tenant, there might be specific collections to choose from various additional properties.&#x20;

Or you might have created a catalog in advance (see [#definition-items-management](additional-settings-management.md#definition-items-management "mention")). As soon as you added all properties needed to describe your asset in depth, click “Save and Next” or "Activate".

![](<../.gitbook/assets/image (22).png>)

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
