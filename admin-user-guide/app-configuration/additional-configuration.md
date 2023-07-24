# Additional configuration

## Seed words additional check

You have the possibility to enable additional check of seed words which are displayed during wallet creation process. It can help users to make sure they saved the seed words which are crucial for wallet restoral process.

```
"check_seed_words": true
```

If set to true, users must re-enter two random seed words to prove they wrote down the seed words. If set to false, this proof is not necessary.



## Default language

```
	"default_language": "en", //possible values: en, de, es, fr
```

The WLA interface is available in 4 languages:

* English
* German
* Spanish
* French

Admin can define the default language, it will be used in case the device of the user is in the language which is not in the list of supported languages by WLA.&#x20;

{% hint style="info" %}
Please, note that custom data is translated separately, CoreLedger is not responsible for localizing asset data [#step-3.-translations-to-different-languages](asset-configuration.md#step-3.-translations-to-different-languages "mention") and data policy [#data-policy](additional-configuration.md#data-policy "mention")
{% endhint %}

## Data policy

Data policy files for corresponding language must be placed in the root folder  **trading-app-configs** and path to them must be defined in the ui config as described below**.**

We understand that you can have users with different locales. You can provide \[en], \[de] and \[es] translations for the data policy. Depending on the language settings of the mobile phone, the WLA will either take the information from \[en], \[de] or \[es]. With "\*\***- \*\***" you define the fallback file. For example, in the example below English files are defined as fallback option which means that if user with French locale comes, he will see English version of data.&#x20;

```
"localization": {
		"datapolicy-**-**": "[en]datapolicy.md",
		"datapolicy-en-**": "[en]datapolicy.md",
		"datapolicy-de-**": "[de]datapolicy.md"
	},
```

## Intro

Intro is a set of slides shown to user when he first enters the app.&#x20;

{% hint style="info" %}
If you don't need the intro for your app, just remove "intro" object from your config file (there shouldn't be the word "intro" in your config file at all)
{% endhint %}

Each slide can have image, title and description. Title and description can be provided in different languages according to the following rules:

* en.title.1 - use language code before first dot to define title in the specific language and use number after second dot to set title for the specific picture (\<language\_code>.title.\<intro\_slide\_number>)
* de.desc.2 - use language code before first dot to define description in the specific language and use number after second dot to set description for the specific picture (\<language\_code>.desc.\<intro\_slide\_number>)

```json
	"intro": {
		"img.1": "icons/intro1@3x.png", // use number to define the picture order
		"en.title.1": "Wallet", //use language code to define title in the specific language and use number to set title for the specific picture
  		"en.desc.1": "A convenient way to store and manage your digital assets/token", //use language code to define description in the specific language and use number to set description for the specific picture
		"de.title.1": "Wallet_de",
		"de.desc.1": "Description in German",
		"img.2": "icons/intro2@3x.png",
		"en.title.2": "Import token",
		"en.desc.2": "Import token from external wallets, like a Token Card",
		"de.title.1": "Import token_de",
		"de.desc.1": "Description in German",
		"img.3": "icons/intro3@3x.png",
		"en.title.3": "Request token",
		"en.desc.3": "Requests token as means of payment",
		"de.title.3": "Request token_de",
		"de.desc.3": "Description in German"
	},
```
