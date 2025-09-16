# Device Restoration

A hierarchical deterministic (HD) wallet can generate an unlimited number of addresses from the seed words. To recover the addresses that were previously used on a user’s device in case of device loss or replacement, a special 'Device Restoration' process has been implemented.

A hierarchical deterministic wallet is a crypto wallet that uses a hierarchical structure to derive key pairs (your public and private keys).&#x20;

First of all there is a function in the application itself, generating a specific address using pre-defined derivation path from a HD Wallet, restored from the seed words. So for the same seed word set (HD Wallet) this hint will be always the same. This address is used as so-called 'Restore Hint'.

The hint is sent along with device registration or update requests and is stored together with the device data in the TXServer. When the information about used addresses has to be restored on a new device, the app re-generates the hint from provided seed words and calls the /Device/GetRestorableDevices function with the hint and app name as parameters. If there were devices, using these seed words and app name before, these will be returned.

\
Further the process depends on the app logic. For example, app could show the list of the devices to the user and restore addresses (or a specific address) from the specific device. Or it can iterate and restore all addresses from all devices. To get a list of addresses for the specific device, the app should call the /ConnectDevice function and then use acquired device token to call the /GetAddresses function, returning metadata about all addresses used on the old device.&#x20;

The address metadata also contains derivation path, so for security this derivation path could be used to generate the address from the current HD Wallet and if address values are the same - proceed with it, and if it is not - then this returned address was generated from another seed words (this can happen, when the same device was re-initialized with new HD wallet and /UpdateDevice function was used to update the hint, but device-registered addresses remained on the server).
