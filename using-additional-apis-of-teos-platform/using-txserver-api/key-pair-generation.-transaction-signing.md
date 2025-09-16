# Key Pair Generation. Transaction Signing

There is plenty of information in the internet about public-key cryptography (PKC). Therefore here only essentials are documented, so these can be related from other parts of the TEOS documentation.

#### **TL;DR**

* A public key is to cryptocurrency what an IBAN is to a bank account: the address on which you can receive cryptocurrencies or sparks on a blockchain. Also it is used as a source for transactions.
* The private key is what authorizes you to control sparks attached to a public key and initiate transactions from that address.
* Public and private keys are always created in pairs.
* A secret recovery phrase (or mnemonic phrase) is a human-readable master private key in the form of a sequence of words. It can contain an unlimited amount of public/private key pairs.
* If a secret phrase/private key is lost, there is no way to retrieve it.

#### Key Pair generation

To utilize TEOS platform, the key pair must be created in one or another way. Applications like TXMobile or [White Label Mobile App (WLA)](https://teos-docs.coreledger.net/v/white-label-mobile-app) provide a way to generate a key pair as a part of their main process. These applications keep the private key encrypted and secured on the user device. To use the Teos API the key pairs could be generated using libraries and frameworks, available for most of actual languages. Some examples (the list does not pretend to be complete) are below:

{% tabs %}
{% tab title="C#" %}
* [Nethereum](https://nethereum.com) (EVM-compatible)
* [Libsodium](https://doc.libsodium.org/) (ICP)
{% endtab %}

{% tab title="Node.js" %}
* nodejs v10.12 now supports this natively with [crypto.generateKeyPair](https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback)
* [NPM 'crypto' module](http://nodejs.org/api/crypto.html)
{% endtab %}

{% tab title="ReactNative" %}
* [react-native-rsa-native package](https://www.npmjs.com/package/react-native-rsa-native)
{% endtab %}

{% tab title="Others" %}
Just search the internet, using your language and "keypair generation" as the keywords
{% endtab %}
{% endtabs %}

After the key pair is created, the private key should be securely stored and used in transaction signing process.

#### Transaction Signing

Refer to separate articles:\
[Transaction](../../using-the-teos-api/concepts/transaction.md)\
[Transaction creation and submission](../../overview/dealing-with-blockchain-transactions/transaction-creation-and-submission/)
