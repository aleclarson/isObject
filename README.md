
# isObject v1.0.0 ![locked](https://img.shields.io/badge/stability-locked-0084B6.svg?style=flat)

```coffee
isObject = require "isObject"

isObject {}                  # => true

isObject Object.create(null) # => true

isObject []                  # => false

isObject null                # => false
```
