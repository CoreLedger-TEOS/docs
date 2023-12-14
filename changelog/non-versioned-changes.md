---
description: These changes are relevant for all versions with corresponding functionality
---

# Non-versioned changes

{% hint style="info" %}
Check [versioning.md](../using-the-teos-api/versioning.md "mention") to learn more about this type of changes
{% endhint %}

## December, 2023

#### Changes:

* The list of errors and their codes has been added to TMS for error handling process. It has been made consistent with the current list of [error codes in TEOS API](https://teos-docs.coreledger.net/overview/handling-errors). &#x20;
* We've optimized the resource consumption of the application to improve performance and stability.
* Autosigner code is now available as an auxiliary service, i.e. the transactions for specific addresses can be signed automatically if autosigner is set up. It is available in GitHub repository with all the necessary information. Contact your manager to get access to the repository.
* TMS API: now TMS API has its own versioning! v1.0 is already available, you're welcome to use it.

#### Fixes:

* TMS API: The issue of incorrect http error code returned when calling "/Templates" with no Registration form active has been fixed (check [user-authentication-flow-with-teos-authentication-service-and-tms.md](../using-additional-apis-of-teos-platform/user-authentication-flow-with-teos-authentication-service-and-tms.md "mention")). Now TEOS API consumer gets 404 error code if registration template is turned off in WLM.

## September, 2023

* We've introduced some performance optimisation in our components to speed up Asset creation process with **POST /Assets**

## June, 2023

* Now customized tenant-specific Terms and Conditions and Data Policy can be accepted by the user already when registering to the system if [tenant setup with TEOS Authentication service is used](../using-the-teos-api/architecture-note/tenant-setup-options.md#using-teos-api-with-the-user-access-token). To use this feature, tenant admin must provide either link to the page with project's T\&C and Data Policy published somewhere else or provide HTML files with T\&C and Data Policy to the CoreLedger manager.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-05-23 at 14.27.55.png" alt=""><figcaption></figcaption></figure>

* We've made some changes in our monitoring system. Now we'll get the info in case of some problems in the system components faster.

## 13.03.2023

#### Changes

* Ether distribution mechanism in TEOS Platform for private blockchains now works for the addresses added to TEOS API with API key. [Read more  ](../overview/dealing-with-blockchain-transactions/how-to-get-ether-for-signing-transactions.md)
* New Sign up flow is introduced using TMS for the case when TEOS API is used with TEOS Authentication service (user token is used to call TEOS API). [Read more](../using-additional-apis-of-teos-platform/user-authentication-flow-with-teos-authentication-service-and-tms.md)
* TEOS Authentication service accepts only email during login process (usernames are not accepted)

## 14.02.2023

#### Fixed bugs

* Now you can use the wallets which were created in other TEOS API components to retrieve and submit signed  transactions with TEOS API (functionality is available in v0.8)
* We eliminated the problem with counting the amount of requests performed by one tenant (throttling)
