# 1xxxx codes

Error codes `1xxxx` indicate non-business logic related issues with input (auth issues, issues with parsing input data, rate limiting etc.). These errors are mostly 'technical' (non-user), related to the problems in the client app's code.

## 11001

|             |                                                      |
| ----------- | ---------------------------------------------------- |
| Message     | UserId was not found in provided authentication data |
| Description | user was not authenticated                           |
| What to do  | Check the authentication data                        |

## 12001

|             |                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | There were OData validation errors                                                                                                                                            |
| Description | malformed oData request (missing required fields, redundant fields etc.)                                                                                                      |
| Details     | contains the array of sub-errors, specifying the issue                                                                                                                        |
| What to do  | <ul><li>check the correctness of the request body according to oData and the request specs.</li><li>check the <code>details</code> field for additional information</li></ul> |

## 12002

|             |                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message     | There were OData validation errors                                                                                                                                  |
| Description | malformed request body (issues when parsing etc.)                                                                                                                   |
| Details     | contains the array of sub-errors, specifying the issue                                                                                                              |
| What to do  | <ul><li>check the correctness of the request body according to the request specs.</li><li>check the <code>details</code> field for additional information</li></ul> |

