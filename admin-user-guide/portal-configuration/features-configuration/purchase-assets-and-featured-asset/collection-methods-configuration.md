---
description: >-
  Under this section the collection methods can be enabled / disabled and
  configured
---

# Collection methods configuration

Currently four collection methods “Token Card”, “Your own wallet”, “Non signable wallet” and “One time wallet” are available.

For each collection method you have the possibility to enable / disable it (“enabled”) and some details can be defined (“details”) as text (see Figure 6). You can define a fee which is requested for the payment method (“fee”) and some additional fee based on the selected country (“countryFees”).

Furthermore, you can define a fallback fee which is applied in case a special country is selected, but no payment method specific fee was defined for this country (“fallbackCountryFees”).

The “one time wallet” offers the user the possibility to send the tokens to any external Ethereum address. Please note, that not all external Ethereum wallets support unlisted tokens. Additionally, if the external Ethereum wallets support unlisted tokens, they might need to be configured separately.&#x20;

You can define the text of the disclaimer for one time Ethereum wallet to make sure your users understand their responsibility of using correct address, use "disclaimer" entry for it.

```
“collectionMethods”: {
“tokenCard”: {
“enabled”: true,
“details”: “https://coreledger.net/”,
“fee”: 15,
“countryFees”: {
“AT”: 2,
“DE”: 3,
“CH”: 4,
}
},
“signableAddress”: {
“enabled”: true,
“details”: “This address is an address of your wallet and connected to your account. You will use this address to receive funds, like the units you buy from this portal. “,
“fee”: 5
},
“nonSignableAddress”: {
“enabled”: true,
“details”: “This is an advanced option to receive units and should only be used by experienced and well trained users. You probably imported an address if you are able to select this option.”,
“fee”: 0
},
“fallbackCountryFees”: {
“AT”: 9
}
},
"oneTimeWallet": {
"enabled": true,
"details": "You can send the tokens to any external Ethereum wallet which supports ERC-20 Tokens. Just provide the public address of your wallet after selecting this method.",
"disclaimer": "I understand and accept that I am responsible for using a wallet that supports custom tokens and for providing the correct wallet address. I understand that using a wallet that does not support custom tokens, or with an incorrect address (any typo will result in sending items of the ordered asset to the wrong address), I won't be able to receive and manage items of the ordered asset and that, even though the order may be completed, I won't be able to request refund."
},
"fallbackCountryFees": {
"CH": 1.5,
"DE": 4
}
},
```

![Details dialog at collection method selection screen](../../../../.gitbook/assets/7)
