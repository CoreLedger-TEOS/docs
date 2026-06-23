---
description: WLP v1.3 introduces new features for Reference Code Logic.
---

# Reference Code Logic

These changes ensure that customers can generate more flexible, readable, and customizable reference codes, improving the overall experience and making it easier to meet specific business requirements.

**Variable Support:**

* New variables can now be used within reference codes to insert dynamic values such as the current year (&#123;year&#125;), month (&#123;month&#125;), day (&#123;day&#125;), and a constantly incrementing counter (&#123;count&#125;). These variables help automate the generation of reference codes that are both time-sensitive and unique.
* It is possible to have a counter, which is constantly incremented in the data base and use it as a variable &#123;count&#125; = current order count The count starts with 1. Every time an order is actually created, the count is incremented.

**Refined Symbol Interpretation:**

* The + symbol is now interpreted as exactly one random number (0-9)
* The ! symbol now generates exactly one random character (a-Z)
* The \* symbol now produces exactly one random symbol, either a number (0-9) or a letter (a-Z)
* An Escape Character (backslash) in front of one of the symbols means, that the symbol is printed as-is:
  * \\+ is interpreted as "+"
  * \\! is interpreted as "!"
  * \\\* is interpreted as "\*"

**Example Use Cases:**

* &#123;year&#125;&#123;month&#125;&#123;day&#125;-&#123;count,4&#125; could generate a reference code like 20250506-0023, where the date and an incrementing order number are combined.
* &#123;count,5&#125;-&#123;year&#125; could generate a code like 00023-2025, where the order count is padded to a five-digit number and followed by the year.
