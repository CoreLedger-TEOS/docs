# Delete a user

This method permanently deletes the specified user and all data associated with that user account. Only the user themselves can delete their own account.\
No OData query options are supported.

⚠️ **Note:** API key authentication is not supported for this endpoint.

#### Request Endpoint:

```http
DELETE /odata/v1.0/Users({key})
```

No OData query options are supported.

#### Parameters

| **Name** | **Type**      | **Description**                                  | **Mandatory** |
| -------- | ------------- | ------------------------------------------------ | ------------- |
| key      | string($uuid) | The unique identifier of the user to be deleted. | ✅             |

**Example:**

```http
B5BB3E99-A8F8-4896-8D41-07920DFCDAEC
```

#### Responses

| **Code** | **Description**                                                            |
| -------- | -------------------------------------------------------------------------- |
| 204      | The user and all related user-specific data were successfully removed.     |
| 400      | The current user is not allowed to delete user data with the specified Id. |
| 401      | Unauthorized.                                                              |
| 403      | Forbidden.                                                                 |
| 404      | The user with the specified Id was not found.                              |

<br />
