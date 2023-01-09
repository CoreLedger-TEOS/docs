# How to prepare custom HTML

### How to use

We understand that it can be very important for your project to have specific and perfectly aligned with your brand advertising page for the featured asset or company details description for the imprint which shouldn't be limited to any white label layouts. That's why we provide the possibility to upload your own HTML page (we call it "custom HTML") for 2 cases:

* [For featured asset ](features-configuration/)(your page will be displayed when your users click custom sidebar menu item if you activated "Featured asset" functionality). If you switched on "Featured asset" uploading custom HTLM for featured asset description is mandatory.&#x20;
* [For imprint](branding-management.md#imprint-configuration) (your page will be displayed when your users click Imprint). Uploading custom HTML for imprint is optional, you can just provide your company details

### How to prepare custom HTML

The custom HTML serves as a customizable page. This should be achievable with relatively minimal effort and little to no external dependencies. It is usually not worth it to import external dependencies just for a single page, instead it is more likely to be more of a problem than a solution, therefore we advise against it.

One of the most important rules for the custom HTML is to avoid adding content which leaks outside of the custom html and thus might influence the surrounding White Label Portal in unpredicted ways.

Thus, the following rules need to be applied when setting up a custom HTML for WLP. Custom HTMLs which do not follow these rules are not supported by the WLP and we can’t help to fix related issues.

{% hint style="warning" %}
If you decide to use example custom HTMLs provided with the default setup of the tenant, you have to remember that our frontend developers had prepared it according to our design requirements. So, please, make sure that all elements, which are used there, are adjusted to your needs and unnecessary ones are removed. Don't forget to upload it and check.&#x20;
{% endhint %}

* make use of CSS classes and ids, ideally wrapping all your content in a div with a custom class
* use this custom class as a prefix to all your css rules to scope the css correctly and avoid influencing other elements which are not part of the custom html
* beware to not overwrite WLPs own styles when using generic CSS
* avoid using “!important” - you likely don't need it
* avoid inline styles - to keep things clear and organized
* take a look at [https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) if you're struggling with styling some elements
* avoid importing 3rd party libraries and packages (or try keeping it to a minimum)
* 3rd party content doesn't follow any rules and might interfere with e.g. WLPs own styles
* don't use a body tag, it will get removed automatically
* consider [web fundamentals](https://developers.google.com/web/fundamentals)
