---
description: Available from February, 14 2023
---

# Django

We're working on making the configuration process of TEOS platform easier for admins.

With this version first step is already available: now all WLM users have collection of definition items called "WLA\&WLP configuration", admins can use this collection during asset creation process to set [WLA ](https://teos-docs.coreledger.net/v/white-label-mobile-app/)and [WLP ](https://teos-docs.coreledger.net/v/white-label-portal/)properties instead of configuration files of [WLA ](https://teos-docs.coreledger.net/v/white-label-mobile-app/)and [WLP](https://teos-docs.coreledger.net/v/white-label-portal/). Soon [WLP v0.15](https://teos-docs.coreledger.net/v/white-label-portal/) and [WLA v0.21](https://teos-docs.coreledger.net/v/white-label-mobile-app/) will be released which use these properties instead of asset configuration files.

We introduced some technical changes to make solution more stable.

We fixed some bugs to make our solution more user-friendly and stable:

* account deletion pages in TEOS authentication service were not tenant-branded, now they use tenant logo
* asset description pdf showed wrong date of asset creation



## Django service pack 1&#x20;

### Changes:

* Ether distribution mechanism in TEOS Platform for private blockchains now works for the addresses added to TEOS API with API key and also used up Ether is refilled automatically. [Read more  ](broken-reference)
* Following emails are not sent from WLM anymore:
  * when user creates a new account and confirms email, he is not notified about this registration
  * when admin approves or declines user request, user is not notified about his account approval
  * when admin changes the status of the user (disables or enables), user is not notified about the status change
