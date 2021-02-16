<!-- TITLE/ -->
# stable-version-regex
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/stable-version-regex.svg)](https://npmjs.org/package/stable-version-regex)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/stable-version-regex/workflows/build/badge.svg)](https://github.com/dword-design/stable-version-regex/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/stable-version-regex)](https://coveralls.io/github/dword-design/stable-version-regex)
[![Dependency status](https://img.shields.io/david/dword-design/stable-version-regex)](https://david-dm.org/dword-design/stable-version-regex)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Provides a regex for a stable version string, consisting of major (>=1), minor and patch version.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install stable-version-regex

# Yarn
$ yarn add stable-version-regex
```
<!-- /INSTALL -->

## Usage

```js
const versionRegex = require('version-regex')

versionRegex.test('1.0.0') // true
versionRegex.test('21.0.0') // true
versionRegex.test('1.0.15') // true
versionRegex.test('1.13.14') // true
versionRegex.test('0.1.0') // false 
versionRegex.test('0.12.0') // false
versionRegex.test('0.1.13') // false
versionRegex.test('1.01.0') // false
versionRegex.test('1.1.02') // false
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
