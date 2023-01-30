# App configuration

## Number of seed words

At the very beginning of WLA setup (when you order it from CoreLedger) you can define how many words seed of the wallet should have. By default we use 24 seed words which is secure enough, but you can set any amount which can be divided by 3 (3, 6, 12, etc)

## Other configuration

Most of the other configuration is done via the file called _ui\_config.v1.json_ in the root of the folder **trading-app-configs** in Azure blob storage container created specifically for your project by CL. The access to it is restricted to the list of your project members which you provide and also to your CL manager.
