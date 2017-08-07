# Format Seconds as hh:mm:ss

[![NPM Version](https://img.shields.io/npm/v/@streammedev/hhmmss.svg)](https://npmjs.org/package/@streammedev/hhmmss)
[![NPM Downloads](https://img.shields.io/npm/dm/@streammedev/hhmmss.svg)](https://npmjs.org/package/hhmmss)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Converts a number of seconds to hh:mm:ss format.

## Install

```
$ npm install --save @streamme/hhmmss
```

## Usage

```javascript
var hhmmss = require('@streamme/hhmmss')
hhmmss(123) // 00:02:03
hhmmss(0) // 00:00:00
hhmmss(36256) // 10:04:16
hhmmss(null) // 00:00:00
hhmmss() // 00:00:00
hhmmss('123') // 00:02:03
```

## Development

This package follows semver.  When you wish to publish a version run the proper npm command.  For example, if we made a bug fix you can do this:

```
$ npm version patch
$ npm publish
```

Here are the other types of version bumps:

- Major (`npm version major`): This is for breaking changes.  Anytime a method is changed or the functionality is modified this bump should be made.
- Minor (`npm version minor`): This is for feature additions.  When a new method is added which doesn't affect the behavior of existing features, this bump should be made.
- Patch (`npm version patch`): This is for bug fixes.  This verision is only for changes that fix a mal-function in existing functionality.  Any new features or breaking changes require a bump of minor or major.

For each of these you can run a 'pre' version by prepending to the command, ex `npm version preminor`.

All feature development should be done on a branch off `master`.  When a feature is complete and the pull request approved, publish a 'pre' version of the package for testing across environments.
To install that 'pre' version of the package do the following, where the version number contains the correct 'pre' version:

```
$ npm install --save @streammedev/hhmmss@1.0.0-0
```

Running the tests:

```
$ npm install && npm test
# or
$ npm it
```
