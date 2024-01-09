# Device Restoration

As the HD Wallet, recreated from seed words can produce infinite number of addresses, to restore addresses, which were used before on user devices in case of device replacement/loss, a special "Device Restoration" process is designed. \
\
First of all there is a function in the application itself, generating a specific address using pre-defined derivation path from a HD Wallet, restored from the seed words. So for the same seed word set (HD Wallet) this hint will be always the same. This address is used as so-called 'Restore Hint'.&#x20;

{% hint style="info" %}
More details about the concepts, used in this article you can find in internet using keywords 'HD Wallet', 'Derivation Path' and 'Seed words' for search.&#x20;
{% endhint %}

The hint is sent along with device registration or update requests and is stored together with the device data in the TXServer. When the information about used addresses has to be restored on a new device, the app re-generates the hint from provided seed words and calls the /Device/GetRestorableDevices function with the hint and app name as parameters. If there were devices, using these seed words and app name before, these will be returned. \
Further the process depends on the app logic. For example, app could show the list of the devices to the user and restore addresses (or a specific address) from the specific device. Or it can iterate and restore all addresses from all devices. To get a list of addresses for the specific device, the app should call the /ConnectDevice function and then use acquired device token to call the /GetAddresses function, returning metadata about all addresses used on the old device. The address metadata also contains derivation path, so for security this derivation path could be used to generate the address from the current HD Wallet and if address values are the same - proceed with it, and if it is not - then this returned address was generated from another seed words (this can happen, when the same device was re-initialized with new HD wallet and /UpdateDevice function was used to update the hint, but device-registered addresses remained on the server).
