# Supply Management

**Supply Management**

1. **Supply Retrieval.** New Endpoint Added: /My

**Description:**\
The /My endpoint has been introduced to retrieve the list of supplies associated with the specific user. Access to this endpoint is restricted to requests authenticated with a user token.

**Features and Functionality**

Endpoint Access:

* With User Token: Supplies are filtered and retrieved for the current user only.
* With TEOS API Key: All supplies are retrieved without user-specific filtering.

Sorting Capabilities:\
Supplies can be retrieved with pagination and the possibility to filter them by:

* SupplyId
* UniqueAssetIdOffered
* UniqueAssetIdDesired
* OfferedAmount
* ExchangeRate
* ExpirationDate
* ExpirationOnBlock

2. **Method to change an exchange rate**

**Description:**

A new method has been introduced that allows API consumers to update the exchange rate of an existing supply to better suit their needs.

**Features and Functionality**

Request Parameters:

The following parameters are required in the request:

* SupplyId: The identifier of the supply to be updated.
* ExchangeRate: The new exchange rate to apply to the supply.

Method Behavior

* Validation Rules:\
  Before proceeding, the method checks whether the exchange rate update is valid based on the existing validation rules.
* Successful Validation:\
  A transaction is created and pushed to the corresponding device
* Failed Validation:\
  The method returns an error code detailing the reason for the failure.
* Error Handling:\
  If the provided SupplyId is invalid or does not exist, the method returns a 4xx HTTP status code indicating the issue.

3.  **Method to change supply expiration**

    **Description:**\
    A new method has been added to allow API consumers to extend the expiration of a supply, adapting it to their specific needs.

    \
    **Features and Functionality**

    Request Parameters

    The following parameters must be provided in the request:

    * SupplyId: The identifier of the supply to be updated.
    * ExpirationDate: The new expiration date to assign to the supply.
    * ExpirationOnBlock

> <mark style="color:red;">Note:</mark> ExpirationDate and ExpirationOnBlock are mutually exclusive. If both parameters are provided in the request, the method returns a 4xx HTTP status code with an error indicating the conflict.

**Method Behavior**

* Validation Rules:\
  The method verifies if extending the supply is allowed based on the existing validation rules. The maximum block number for prolongation is limited and must not exceed the value returned by the helper function.
*   Successful Validation:

    A transaction is created and pushed to the corresponding device.
*   Failed Validation:

    If validation fails, the method returns an error code in accordance with TEOS API's existing error grouping system.
*   If the provided SupplyId is invalid or does not exist, the method returns a 4xx HTTP status code indicating the issue.

    If both ExpirationDate and ExpirationOnBlock are provided, a 4xx HTTP status code is returned with an error message indicating the parameters' exclusivity conflict.
