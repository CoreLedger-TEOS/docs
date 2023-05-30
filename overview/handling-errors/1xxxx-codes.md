# 1xxxx codes

Error codes `1xxxx` indicate non-business logic related issues with input (auth issues, issues with parsing input data, rate limiting etc.). These errors are mostly 'technical', related to the problems in the TEOS API consumer's code.

## 11001

<table><thead><tr><th width="318.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>UserId was not found in provided authentication data</td></tr><tr><td>Description</td><td>user was not authenticated</td></tr><tr><td>What to do</td><td>Check the authentication data</td></tr></tbody></table>

## 12001

<table><thead><tr><th width="185.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>There were OData validation errors</td></tr><tr><td>Description</td><td>malformed oData request (missing required fields, redundant fields etc.)</td></tr><tr><td>Details</td><td>contains the array of sub-errors, specifying the issue</td></tr><tr><td>What to do</td><td><ul><li>check the correctness of the request body according to oData and the request specs.</li><li>check the <code>details</code> field for additional information</li></ul></td></tr></tbody></table>

## 12002

<table><thead><tr><th width="185.5"></th><th></th></tr></thead><tbody><tr><td>Message</td><td>There were OData validation errors</td></tr><tr><td>Description</td><td>malformed request body (issues when parsing etc.)</td></tr><tr><td>Details</td><td>contains the array of sub-errors, specifying the issue</td></tr><tr><td>What to do</td><td><ul><li>check the correctness of the request body according to the request specs.</li><li>check the <code>details</code> field for additional information</li></ul></td></tr></tbody></table>

