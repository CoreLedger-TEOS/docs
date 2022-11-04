---
description: >-
  Why we use versioning, how to use versions in your requests, difference
  between versioned & non-versioned changes and breaking & non-breaking changes
---

# Versioning

## What is the latest TEOS API Version? <a href="#latest" id="latest"></a>

Check it in [changelog](../changelog/ "mention")

## Why do we have versions? <a href="#whyversion" id="whyversion"></a>

We want developers using TEOS API benefit from new features and changes when it's convenient for their development cycle and make sure that running solutions don't break with a new release.

Version availability can be critical for mobile development. The person using your app on her device may not upgrade for a long time what can result in the app calling already unavailable version.

Each version is supported for at least half a year from release date giving you enough time for planning the update to newer versions.

#### Normal version schedule

Normally the **version is no longer supported half a year after its release date and not available half a year after the date that the subsequent version is released.** \
For example, if API version v2.3 is released on March 25th, 2020 and API version v2.4 is released August 7th, 2020 then v2.3 would be available until February 7th, 2020, half a year after the release of v2.4 but it won't be supported after September, 25th.

Once a version is no longer available, any calls made to it will be defaulted to the next oldest, available version. Here is a timeline example:

| <p><strong>01.01.2030</strong><br>Version 2.3 is released</p> | <p><strong>01.07.2030</strong><br>half a year after v2.3 release date: v2.3 is not supported</p> |                                                                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
|                                                               | <p><strong>15.08.2030</strong><br>Version 2.4 is released</p>                                    | <p><strong>15.02.2031</strong><br>half a year after v2.4 release date: v2.4 is not supported, v2.3 is not available</p> |
|                                                               |                                                                                                  | <p><strong>15.02.2031</strong><br>Version 2.5 is released</p>                                                           |

For SDKs or code base templates using TEOS API which can be mentioned in the documentation, a version will always remain available as it is a downloadable package. However, the SDK or code base template may rely upon API versions which no longer work, so you should assume an end-of-life SDK is no longer functional.

You can find specific information about our version timelines, changes, and release dates on our [changelog page](../changelog/).

#### Will everything remain completely unchanged in a version? <a href="#stability" id="stability"></a>

CoreLedger does reserve the right to make changes in TEOS API and its components in a short period of time for issues related to security or privacy or performance. These changes don't happen often, but they do happen. Normally such changes are applied as non-versioned changes.&#x20;

#### Do I have to specify a version for an API? <a href="#unversioned_calls" id="unversioned_calls"></a>

Yes, the version is a mandatory part of API calls. For example, let's say the current version is v3.2. The call is as follows:

```
curl -i -X "https://teosapi.coreledger.net/odata/v3.2/assets/{asset-id}
```

#### Can my app make calls to versions older than the current version? <a href="#calling_older_versions" id="calling_older_versions"></a>

You can specify older versions in your API calls as long as they are available and your app has made calls to that version. For example, if your app was created after v2.0 was released and makes calls using v2.0, it will be able to make calls to v2.0 until the version expires even after newer versions have been released. Check availability of the versions in [changelog](../changelog/ "mention")

## Types of changes

### Versioned & non-versioned changes

#### Versioned changes

Versioned changes are changes introduced with the release of a new API version. Versioned changes typically apply to the newest version immediately and often will apply to other versions at a future date.

#### Non-versioned changes

Non-versioned changes are changes applied to all API versions, they can be introduced together with a release of new version or outside of our normal release schedule. Such changes happen rarely. The changelog accompanying each release indicates explicitly if there are any changes applied to all API versions.&#x20;

### Breaking & non-breaking changes

#### Non-breaking changes

A _non-breaking_ or _backward-compatible_ change is an API change that allows your integration to continue using the API without any additional changes on your side. When we introduce new functionalities and changes to our APIs, we do our best to implement them in a backward-compatible way. We implement non-breaking changes in all versions of an API, so that you benefit from it without having to upgrade your API version.

Examples of non-breaking changes:&#x20;

* Adding an optional field to a request body
* Adding optional header to a request
* Adding new endpoint
* Changing the text of an error message in a response
* Adding new fields or headers to a response
* Deprecating existing endpoint

#### Breaking changes

A _breaking change_ is an API change that makes your current integration incompatible with the API. To avoid disrupting existing integrations, we are trying to introduce breaking changes in new API versions only. You can continue to use existing API versions until you are ready to upgrade to the new version.

Examples of breaking changes:&#x20;

* Adding a required field to a request body
* Removing existing endpoint
* Changing the case in the request because TEOS API is case-sensitive
* Removing fields from response body, request body or headers
* Renaming a field in a request or response
* Changing a field from optional to required in a request body
* Changing a field from required to optional in a response body
* Changing the HTTP status code of a response
* Changing error codes for existing errors
* Changing the type of a field in a request or response
* Changing the flow of interaction with API
