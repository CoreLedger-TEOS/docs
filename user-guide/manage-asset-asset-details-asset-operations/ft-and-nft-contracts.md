# FT & NFT contracts

In case your tenant is configured to support compatibility with ERC protocols FT (ERC20) or NFT (ERC721), you can create contracts and add asset to them. After adding the asset to the contract the asset management using ERC20/ERC721 interface will be possible and all token operations will be reflected in TEOS (including WLM).

{% hint style="info" %}
Please, note that tenant must be configured to support FT or NFT to use this functionality. Contact your CoreLedger manager if you need this functionality.
{% endhint %}

## FT (fungible token) contract

FT contract can be created for any digital asset created in TEOS. If WLM user adds FT contract to digital asset, then this asset will available for  managing using ERC20 protocol interface

To add FT contract, go to Asset details view and click "Create". Form will be opened where you will have to define following data:

* token name
* token symbol (keep it short)
* amount of decimals - this number defines the correlation between 1 indivisible part of the token and 1 token. It should be the same as asset's spark factor in TEOS to keep it consistent. For example, if you set Decimal = 6, it will mean that 0,000001 is the smallest part of a new token which equals the spark factor = 1000000 in TEOS

![](<../../.gitbook/assets/image (79).png>)

After triggering token contract creation, the transaction will be pushed to the TX.Mobile app for signature. Sign the transaction [sign-and-check-executed-transactions.md](../sign-and-check-executed-transactions.md "mention")

After the transaction is successfully completed, the asset management using ERC20 interface will be possible and all token operations will be reflected in TEOS (including WLM).

## NFT (non-fungible token) contract

To add asset to NFT contract, you should first create NFT contract. Several assets can be added to the same contract, each asset will be still unique but they will be managed using ERC721 protocol interface as part of one token contract.

Go to "Settings" -> "NFT contracts" and click "Add NFT contract".&#x20;

Form will be opened where you will have to define following data:

* token name
* token symbol (keep it short)
* URI - it should be some URL to the description of the NFT contract, for others to understand what this contract does and what for it was created

![](<../../.gitbook/assets/image (65).png>)

After triggering token contract creation, the transaction will be pushed to the TX.Mobile app for signature. Sign the transaction [sign-and-check-executed-transactions.md](../sign-and-check-executed-transactions.md "mention")

After the transaction is successfully completed, new NFT contract can be found in the list of available contracts.

To add existing asset to the contract, you can either click "Add asset" in token contract details or you can go to the specific asset details and click "Add contract" in the right menu.

{% hint style="info" %}
Please, note that you can't add already existing asset with any amount of units to the NFT contract if the asset was created before the tenant was configured to support compatibility with ERC721.

When tenant is correctly configured for supporting ERC721 interfaces, 1 asset unit is created automatically, spark factor can't be selected, it is always set to 1
{% endhint %}

![](<../../.gitbook/assets/image (63).png>)

After selecting contract or asset for the contract, the transaction will be pushed to the TX.Mobile app for signature. Sign the transaction [sign-and-check-executed-transactions.md](../sign-and-check-executed-transactions.md "mention")

After the transaction is successfully completed, the asset management using ERC721 interface will be possible and all token operations will be reflected in TEOS (including WLM).
