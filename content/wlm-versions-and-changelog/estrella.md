---
description: Estrella is available from January, 9
---

# Estrella

This release brings significant architectural changes introduced to improve system's reliability, security and performance.

### Changes:

* We've improved login process flow to make it more reliable and secure by protecting the system from attacks using malicious software.
* We've increased the stability of components by protecting them from overuse and improving monitoring system.
* We've optimized the resource consumption of the application to improve performance and stability.
* Autosigner code is now available as an auxiliary service, i.e. the transactions for specific addresses can be signed automatically if autosigner is set up. It is available in GitHub repository with all the necessary information. Contact your manager to get access to the repository.
* Controller functionality of "Settings" section has been optimized by making several improvements to controller addresses tables and introducing additional checks of statuses on different levels of controller object. Also we've added the possibility to track changes of the controllers existing in the controller factory in WLM.

### Fixes:

* TMS: The issue of incorrect http error code returned when calling "/Templates" with no Registration form active has been fixed. Now TEOS API consumer gets 404 error code if registration template is turned off in WLM.
