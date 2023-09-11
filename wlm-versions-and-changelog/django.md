---
description: Django Service Pack 3 is available from September, 12
---

# Django

## Django service pack 3 (delivered on September, 12)

### Changes:

*   You can search for the asset in the list of assets (My Assets page) and under menu item Search Assets using uniqueAssetId\


    <div>

    <figure><img src="../.gitbook/assets/image (83).png" alt=""><figcaption><p>My Assets</p></figcaption></figure>

     

    <figure><img src="../.gitbook/assets/image (84).png" alt=""><figcaption><p>Search Assets</p></figcaption></figure>

    </div>
* Tenant owners can decide which external authentication providers must be used in their tenants (available options include Microsoft, Apple, Google and Google). If some of the external providers are going to be used, company's account credentials must be provided to CoreLedger manager to set it up. Contact your manager for further information
* French and Spanish translations of the registration and login flow are available now. Talk to your users in their language!

## Django service pack 2 (delivered on July, 06)

### Changes:

*   Now customized tenant-specific Terms and Conditions and Data Policy can be accepted by the user already when registering to the system. To use them, tenant admin must provide either link to the page with project's T\&C and Data Policy published somewhere else or provide HTML files with T\&C and Data Policy to your CoreLedger manager. \
    WLM still has its own representation of T\&C and Data Policy when signing user to WLM, but soon it will be removed.\


    <figure><img src="../.gitbook/assets/Screenshot 2023-05-23 at 14.27.55.png" alt=""><figcaption></figcaption></figure>
* We've made some changes in our monitoring system. Now we'll get the info in case of some problems in the system components faster.

### Fixes:

* The problem with real-time data delivery component is eliminated, you are not supposed to see errors about this problem so often anymore.

## Django service pack 1  (delivered on April, 13)

### Changes:

* Ether distribution mechanism in TEOS Platform for private blockchains now works for the addresses added to TEOS API with API key and also used up Ether is refilled automatically. [Read more  ](broken-reference)
* Following emails are not sent from WLM anymore:
  * when user creates a new account and confirms email, he is not notified about this registration
  * when admin approves or declines user request, user is not notified about his account approval
  * when admin changes the status of the user (disables or enables), user is not notified about the status change

## Django (delivered on February, 14)

We're working on making the configuration process of TEOS platform easier for admins.

With this version first step is already available: now all WLM users have collection of definition items called "WLA\&WLP configuration", admins can use this collection during asset creation process to set [WLA ](https://teos-docs.coreledger.net/v/white-label-mobile-app/)and [WLP ](https://teos-docs.coreledger.net/v/white-label-portal/)properties instead of configuration files of [WLA ](https://teos-docs.coreledger.net/v/white-label-mobile-app/)and [WLP](https://teos-docs.coreledger.net/v/white-label-portal/). Soon [WLP v0.15](https://teos-docs.coreledger.net/v/white-label-portal/) and [WLA v0.21](https://teos-docs.coreledger.net/v/white-label-mobile-app/) will be released which use these properties instead of asset configuration files.

We introduced some technical changes to make solution more stable.

We fixed some bugs to make our solution more user-friendly and stable:

* account deletion pages in TEOS authentication service were not tenant-branded, now they use tenant logo
* asset description pdf showed wrong date of asset creation
