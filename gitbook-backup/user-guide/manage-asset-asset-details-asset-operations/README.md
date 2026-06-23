# Manage asset  (asset details, asset operations)

## Assets list

Go to “Assets” in the left menu bar. When you click on it, you will see the list of assets which you own:

* Holdings - units of these assets you own. Different to your asset, the issuer will not be your address, but the address of the asset issuer
* Issued - the assets which you created
* Drafts - the assets which you started to create but didn't finish the process

In the picture below you can see how the asset overview can look like when you create several assets and start receiving units of other assets from other wallets.

![](<../../.gitbook/assets/image (42).png>)

## Asset details view

Asset details view contains all provided info about the asset and main asset operations.

![](<../../.gitbook/assets/image (40).png>)

### Main properties

* Asset name
* Description
* Unique Asset Id - unique asset identifier used in TEOS, it is used in all TEOS products
* Asset type - based on the nature of asset
* Unit of measure - how asset is measured in the real world (depends on asset type)
* Token unit fraction - how many indivisible parts are in one unit
* Jurisdiction - to which jurisdiction this asset belongs
* Modificator, timeframe, start date - parameters which define how price of the 1 unit changes over time, graphical representation is in Spark value section <mark style="color:red;">(not supported at the moment, always set to default parameters)</mark>
* Issuer - wallet which has signed the transaction for asset creation (blockchain record is created by this public address)
* QR code - asset QR code contains unique asset id

### Additional properties

* Additional properties define by the user when asset was created  [#step-2-additional-properties-optional](./#step-2-additional-properties-optional "mention")
* Controller - controller added to the asset when asset was created[#step-3-add-controllers-optional](./#step-3-add-controllers-optional "mention"). Controller can be changed by the issuer under Asset details view
* Private asset - if asset is defined as private, it won't be discovered by users of other tenants which are connected to the same blockchain
* Available languages - the list of languages, translations to which were added by the issuer [#step-4-translations-optional](./#step-4-translations-optional "mention"). Translations can be changed (added, removed, edited) by the issuer under Asset details view

### Units

Under "Units" tab of asset details user can find the list of all wallets holding the units of this asset. The wallets which are in the address book are resolved in the defined name, others are displayed as public addresses only.

All wallets are divided into 2 groups: my wallets and other wallets as described in [wallet-management-in-wlm-+-tx.mobile](../wallet-management-in-wlm-+-tx.mobile/ "mention")

![](<../../.gitbook/assets/image (13).png>)

### Supplies

All supplies which contain this asset as the on "To receive" or "To pay" are listed here. Check more about supplies in [supply-management.md](../supply-management.md "mention")

### Updates

Any change of the descriptive property will trigger amendment creation which are all collected under the tab "Updates". Check more about amendments in [amend-asset-edit-translations.md](amend-asset-edit-translations.md "mention")

### Links

Some business cases need to link several assets. For this purpose we have links. Under the tab "Links" you can check all assets which are linked to the current one. Check more about links in [link-assets.md](link-assets.md "mention")

### Asset description in PDF

If you click on “Download PDF” (bottom of the right menu bar) you get all the information about the asset in one document. You can decide which type of the document you need - Asset description or Asset prospectus. Also you can select the language on which this document should be generated.

Both documents are generated automatically based on the templates defined by admins [#asset-description-pdf-generation](../../admin-user-guide/wlm-configuration/templates-management.md#asset-description-pdf-generation "mention")
