# Templates management

Select which template you want to manage, click on the corresponding row to adjust it your business case needs

![](<../../.gitbook/assets/image (49).png>)

### Asset creation: properties <a href="#_ref18675748" id="_ref18675748"></a>

If you're going to let WLM users create assets [create-asset.md](../../user-guide/create-asset.md "mention"), you may need to change the set of properties required for each new asset. Default asset template contains the list of required properties from technical perspective and some general properties valid for every business case.

In the asset template management view you can do the following:

* add/delete additional properties from previously created collections of definition items [#definition-items-management](../../user-guide/additional-settings-management.md#definition-items-management "mention")
* make properties mandatory (they will be required to be filled, asset won't be written to blockchain without them)

![](<../../.gitbook/assets/image (1).png>)

### Registration form

If you want your users to provide the referral code during the registration process, you can switch on registration form template.&#x20;

If you click the "Registration form" you can select whether to make referral mandatory (both Referrals and Mandatory flags must be enabled) or keep it optional (Referral must be set to true, Mandatory must be set to false)

![](<../../.gitbook/assets/image (47).png>)

### Email templates

If you want your users to receive emails sent from WLM, you can switch on emailing in [constraints management](constraints-management.md#email-sending). Here you can click on “Email templates” to see the list of all emails and manage template texts.&#x20;

![](<../../.gitbook/assets/image (59).png>)

In the first column you can find the action which triggers the system to send an email. If you want to change a text of an email, just click in the corresponding row, choose a language and write the text the user should receive. Please, note that you can add as many translations as you want but users languages can be English or German, so we recommend to add only these translations.

{% hint style="info" %}
Please, note that the following letters are sent to all TEOS products users when they register:

Registration confirmation (user was approved)

Registration confirmation (user is not approved yet)

User denial

User disabling

User enabling

User confirmation (email is confirmed)

User confirmation (email is not confirmed)
{% endhint %}

![](<../../.gitbook/assets/image (75).png>)

### Asset description PDF generation

#### PDF Disclaimer

Content of "PDF Disclaimer” is shown right before the asset description when user downloads the PDF document “Asset description” or "Prospectus" of a specific asset [#asset-description-in-pdf](../../user-guide/manage-asset-asset-details-asset-operations/#asset-description-in-pdf "mention"). To adjust its text, click on “PDF Disclaimer”. After choosing the corresponding language you can edit the text shown. You can add desired translations at any time.

![](<../../.gitbook/assets/image (82).png>)

#### Asset prospectus

Asset prospectus is generated automatically for specific asset as onr of the available types of Asset description PDF documents. To change the content of the asset prospectus, click on “Asset prospectus”.&#x20;

If you want to see how to format the prospectus and how to use values from your asset, select “Show more”. The prospectus must be provided as a text document (.txt). Inside the text document use the formatting and elements explained under “Show more” (elements of basic html markup are used).&#x20;

Upload the text document using the “Upload new” button. While uploading the document, a syntax verification is performed. If there is something wrong inside your document, an information is provided. After uploading the document, you can generate a preview to check the appearance of your prospectus. If you are fine with the result, select “Activate” in the top left corner and all assets will use the prospectus.

![](<../../.gitbook/assets/image (6).png>)
