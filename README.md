<!-- TITLE/ -->

<h1>version-regex</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/version-regex" title="View this project on NPM"><img src="https://img.shields.io/npm/v/version-regex.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/version-regex" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/version-regex/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/version-regex" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/version-regex.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/version-regex" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/version-regex.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Provides a regex for a fixed version string, consisting of major, minor and patch version.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save version-regex</code></li>
<li>Require: <code>require('version-regex')</code></li>
</ul>

<!-- /INSTALL -->

<h2>Usage</h2>

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

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; dword</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
