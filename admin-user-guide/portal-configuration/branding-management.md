---
description: Portal colors, logo and favicon, texts for landing page, imprint data
---

# Branding management

### Portal colors

With the “Colors.json” file the colors (HEX) of the WLP can be modified. The file can be found in the blob storage of your tenant.

You can define 10 colors for different groups of elements described in the file. Please, pay attention to the provided recommendations to keep your portal looking nice. You can find them below and in the file itself. Please, note that some elements have default colors which are not customizable (such elements as error texts, error icons, etc).

{% hint style="info" %}
As soon as you change the file in the blob storage and save it, you should refresh the portal page to see the applied changes.
{% endhint %}

List of customizable colors:

* color 1: Sidebar menu background color. This color is used for interface elements such as sidebar menu background and cart icon background
* color 2: Main background color. We recommend using neutral discreet color of light tone if you plan to use a light theme for your portal and a dark tone if you plan to use a dark one. This color and its derivatives (lighter, darker) are used as the background color of the main content area, even rows in tables and the background color of some icons
* color 3: Background color for content blocks, modals, cards. In order to achieve more balanced look, we recommend using a slightly lighter shade of the main background color (color 2). This color and its derivatives (lighter, darker) are used in all content blocks which can be presented as outlined blocks, cards and modal windows
* color 4: Accent color. We recommend using the brightest shade of your branding color. This color and it’s darker shades are used for main interface elements such as buttons with default white text on it, so please make sure that the button texts are readable. This color and its derivatives (lighter, darker) are used in main buttons, paragraph texts, odd rows in tables, borders of some elements, warnings and tooltips background, scroll bars, loader, primary icons, the number of cart items background, name of the current step in stepper, status chip
* color 5: Content dividers color. We recommend using a subtle color with light contrast to the background colot for content blocks (color 3). This color and its derivatives (lighter, darker) are used to outline the elements (borders and dividers)
* color 6: Page header text color. This color and its derivatives (lighter, darker) are used for page headers, text buttons, icons and secondary texts. We recommend using a less contrasting shade of the main texts color (color 8) you’ve picked
* color 7: Sidebar menu text color. This color and its derivatives (lighter, darker) are used for sidebar texts and cart icon. To provide better readability make sure that the sidebar background color (color 1) contrasts well with this one
* color 8: Main texts color. We recommend using a neutral color (shades of black or white) contrasting to background color for content blocks (color 3) to make sure the texts are readable. This color and its derivatives (lighter, darker) are used in most of the texts and some icons (tooltip)
* color 9: Inputs and dropdowns background color. We recommend using a color slightly darker or lighter than the background color for content blocks (color 3) to create a subtle contrast. This color and its derivatives (lighter, darker) are used as input background color
* color 10: Inputs and dropdowns texts color. We recommend using a color with big contrast to the inputs and dropdowns background color (color 9)

### Company logo and Favicon

The logo shown in the top left corner of each page in the WLP can be configured via the “Config Management” editor. The logo needs to be stored in the blob.

Go to **Advanced** **Configuration Management** page to provide file name of your logo. File name needs to be inserted in the config file by changing the parameter “logo”.

“logo”: “icons/logo.png”

The Favicon, shown in the browser tab, needs to be uploaded as .png into the “WLP-config” folder in the blob storage.&#x20;

{% hint style="info" %}
The name of the favicon file needs to be “favicon.png”, then it is automatically shown in the UI.
{% endhint %}

### Configure text of landing page

Go to **Advanced** **Configuration Management** page to setup currency

Here you can define and modify the texts which are shown at the welcome page as shown in Figure 4.

“landingPage”: {

“primaryHeaderText”: “Welcome to Coreledger”,

“secondaryHeaderText”: “Whitelabel Portal”,

“subHeaderText”: “Token distribution management. Fully customizable. Simple.”

},

![Welcome page](../../.gitbook/assets/5)



### Imprint configuration

The imprint section can be accessed via the button on the bottom of the sidebar. When clicking on “Imprint” the imprint page opens, showing the available information. Administrators can edit the information via the configuration management. Company name, company address, phone number and email address can be provided.

Additionally, the imprint section can be fully customized with an individual html. The custom html needs to be uploaded in the blob storage and the path needs to be provided in the configuration management “customHtmlSourcePath”. Check [here how to prepare custom HTML](how-to-prepare-custom-html.md)

`"imprint": {`

`"company": "testcompany",`

`"address": "teststreet 39",`

`"phone": " 067728283",`

`"email": "testmail@company.com ",`

`"customHtmlSourcePath": "drafts/anything/anything.html"}`

{% hint style="warning" %}
We highly recommend to provide email by which your end-users can contact you. If you don't provide it, all texts, where it should be shown, will be empty&#x20;
{% endhint %}

``
