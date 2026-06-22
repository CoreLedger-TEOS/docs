# Delete a wallet

This method allows TEOS API consumers to permanently remove a wallet from the system by its unique identifier (Id).\
When deleted, the wallet record and all related user-specific associations (if any) are irreversibly removed.

📘 [Learn more](../../resources/using-the-teos-api/concepts/wallet.md) about wallets.

#### Request Endpoint

```http
DELETE /odata/v1.0/Wallets({key})
```

#### Supported OData Query Options

None.

#### Parameters

| **Name** | **Type**      | **Description**                                                                                                     |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| key      | string($uuid) | <p>Required. Unique identifier of the wallet to be deleted.</p><p>Example: B5BB3E99-A8F8-4896-8D41-07920DFCDAEC</p> |

#### Sample Request

```http
DELETE /Wallets(2F8D7E4F-064C-4531-9A26-5BF00C24DB32)
```

#### Responses

| **Code** | **Description**                                                                    |
| -------- | ---------------------------------------------------------------------------------- |
| 204      | The wallet was successfully deleted. No content is returned in the response body.  |
| 401      | Unauthorized — authentication credentials are missing or invalid.                  |
| 403      | Forbidden — the requester does not have permission to delete the specified wallet. |
| 404      | Not Found — the wallet with the specified ID does not exist.                       |

<br>
