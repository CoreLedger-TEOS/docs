# User management

To prevent specific users from accessing the app, user roles can be used. Different user roles can be created and administrated in the WLM. You can set roles to be disabled in WLA, so users with this role won't be able to access the app.

Via config file, there is the possibility to type in the role ID which should be blocked, as well as a link where a user can click on to get more information.

```
"disabled_roles": [
"52c3316f-ed58-49f6-a44c-de5dc7140746"
],
"disabled_role_redirect_url":"http://www.test.at",
```

The role ID can be copied from the URL, when the corresponding role is selected in WLM (see Figure 3).

![](../.gitbook/assets/4)

Figure 3: Role ID
