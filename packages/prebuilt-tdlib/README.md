# Prebuilt TDLib

This package distributes pre-built [TDLib][] shared libraries through npm.
The libraries are built on GitHub Actions: [prebuilt-tdlib.yml][].

[TDLib]: https://github.com/tdlib/td
[prebuilt-tdlib.yml]: ../../.github/workflows/prebuilt-tdlib.yml

The shared libraries are statically linked against OpenSSL and zlib to prevent
compatibility issues in Node.js.

Supported systems:
- GNU/Linux x86_64 (requires glibc >= 2.17)
- macOS x86_64, arm64 (universal, requires macOS >= 10.14)
- Windows x86_64

To install `prebuilt-tdlib` for e.g. TDLib v1.8.19, run:

```console
$ npm install prebuilt-tdlib@td-1.8.19
```

`prebuilt-tdlib` can be installed for other TDLib versions, run
`$ npm info prebuilt-tdlib dist-tags` to get the list of available versions
(or see the "npm tags" section below).

> **Note**: Before `prebuilt-tdlib@td-1.8.14` (2023-06-26), the Linux binary was
> built on Ubuntu 20.04 requiring glibc >= 2.31, and macOS arm64 was not
> supported. Currently, the Linux build environment is based on CentOS 7. The
> macOS arm64 binary isn't tested in the CI.

## Usage

The `prebuilt-tdlib` package exports a single function `getTdjson`, which
returns the path to the `tdjson` shared library.

```javascript
const { getTdjson } = require('prebuilt-tdlib')
console.log(getTdjson())
// Prints a path like:
// '/home/user/proj/node_modules/prebuilt-tdlib/prebuilds/tdlib-linux-x64/libtdjson.so'
```

This package can be used with, for example, [`tdl`][tdl]. You can pass the
path to `tdl.configure` (since tdl v7.3.0):

[tdl]: https://github.com/Bannerets/tdl

```javascript
const tdl = require('tdl')
const { getTdjson } = require('prebuilt-tdlib')
tdl.configure({ tdjson: getTdjson() })
// ...
```

The pre-built libraries can also be extracted and used with any other library
or programming language.

## Versioning conventions

> **Note**: This information is mostly for maintaining `prebuilt-tdlib`, it
> isn't necessary for using this package.

Because TDLib does not follow SemVer, not to require the users to manually
specify the exact version of `prebuilt-tdlib` in their `package.json`, the TDLib
version is packed into a single minor version.

`prebuilt-tdlib` is published to npm under versions `0.xyyyzzz.v`, where

- `x`, `y`, `z` correspond to the `x.y.z` TDLib version (e.g., 1.8.0). The
  leading zeros are appended to `y` and `z` (y=`8` becomes y=`008`).
- `v` corresponds to the version of `prebuilt-tdlib` itself, these updates can
  contain fixes in case some of the builds were broken or include new pre-built
  libraries for other platforms.
- The major version is always `0`.

Example: the npm release for TDLib `v1.8.5` is `0.1008005.0`.

For convenience, `td-X` dist-tags are available. To install `prebuilt-tdlib` for
TDLib v1.8.5, just run `npm install prebuilt-tdlib@td-1.8.5`, or
`npm install prebuilt-tdlib@td-1.8.0` for TDLib v1.8.0. This will automatically
install the needed version of `prebuilt-tdlib`.

Additionaly, TDLib's releasing process is weird, and most of the
`prebuilt-tdlib` releases are not connected to a specific tag release in the
TDLib repository.

The releases of the `prebuilt-tdlib` npm package are not git-tagged.

## npm tags

- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/latest.svg)](https://www.npmjs.com/package/prebuilt-tdlib)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/stable.svg)](https://www.npmjs.com/package/prebuilt-tdlib)

<!-- Add new versions below -->
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.19.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.19) tdlib [2589c3fd46925f5d57e4ec79233cd1bd0f5d0c09](https://github.com/tdlib/td/commit/2589c3fd46925f5d57e4ec79233cd1bd0f5d0c09)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.14.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.14) tdlib [66234ae2537a99ec0eaf7b0857245a6e5c2d2bc9](https://github.com/tdlib/td/commit/66234ae2537a99ec0eaf7b0857245a6e5c2d2bc9)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.12.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.12) tdlib [70bee089d492437ce931aa78446d89af3da182fc](https://github.com/tdlib/td/commit/70bee089d492437ce931aa78446d89af3da182fc)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.7.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.7) tdlib [de5379f00b6af7686f197037ca3b494e6277e523](https://github.com/tdlib/td/commit/de5379f00b6af7686f197037ca3b494e6277e523)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.5.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.5) tdlib [d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9](https://github.com/tdlib/td/commit/d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.0.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.0)

Outdated versions:

- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.7.0.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.7.0)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.6.0.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.6.0)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.5.0.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.5.0)
