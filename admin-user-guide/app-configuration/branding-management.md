---
description: Application colors, in app logo
---

# Branding management

The WLA look and feel can be customized to a specific degree. All options can be set in the corresponding config file (The config file is stored on our Azure blob in the root of the folder **trading-app-configs** and called _ui\_config.v1.json_).

Every change in this file is reflected in the WLA immediately after restarting the app or after manually updating the configuration in the app. To do the manual update go to settings, select “About the app” and then click “Update configs”.

## Application colors

The upper part of the config file is about the colors of the app, which are expressed as HEX colors

```
"colors": {
"background": "#f5f5f5",
"backgroundMainColor": "#e6e6e6",
"backgroundSecondColor": "#e6e6e6",
"textFields": "#ffffff",
"accentColor": "#988e9e",
"textMainColor": "#1a1021",
"textSecondColor": "#755c87",
"btnTextColor": "#34104d",
"error": "#b50514",
"warning": "#f27f05",
"success": "#016113",
"dividers": "#0a46bf",
"menu": "#bdb8c2"
},
```

## In app logo

The following part is about the logo you could configure for the app. The logo needs to be stored in the blob and the path to it as well as the file name needs to be inserted in the config file _ui\_config.v1.json_. We recommend to use folder **trading-app-configs/logos** to store all necessary logos.

The following refers to the logo loading screen and the logo in the settings:

```
"img": {
"logo": "logos/coreledger@2x.png",
"menu_logo": "logos/coreledger@2x.png",
},
```

__
