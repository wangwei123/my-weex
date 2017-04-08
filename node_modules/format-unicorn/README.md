# :rainbow: Format Unicorn

[![build](https://travis-ci.org/tallesl/format-unicorn.png)](https://travis-ci.org/tallesl/format-unicorn)
[![coverage](https://coveralls.io/repos/tallesl/format-unicorn/badge.png?branch=master)](https://coveralls.io/r/tallesl/format-unicorn?branch=master)
[![dependencies](https://david-dm.org/tallesl/format-unicorn.png)](https://david-dm.org/tallesl/format-unicorn)
[![devDependencies](https://david-dm.org/tallesl/format-unicorn/dev-status.png)](https://david-dm.org/tallesl/format-unicorn#info=devDependencies)
[![npm module](https://badge.fury.io/js/format-unicorn.png)](http://badge.fury.io/js/format-unicorn)

[![npm](https://nodei.co/npm/format-unicorn.png?mini=true)](https://nodei.co/npm/format-unicorn/)

A string format function made and used by Stack Exchange on their various websites
[*](http://meta.stackexchange.com/q/207128)
[*](http://stackoverflow.com/a/18234317/1316620)

## Usage

```javascript
$ npm install format-unicorn
format-unicorn@1.1.0 node_modules/format-unicorn
$ node
> require('format-unicorn') // this adds formatUnicorn to String.prototype
{}
> 'we are not in {place} anymore'.formatUnicorn({ place: 'Kansas' })
'we are not in Kansas anymore'
> var formatUnicorn = require('format-unicorn/safe') // 'safer' version if you don't want to mess with the prototype
undefined
> formatUnicorn('we are not in {place} anymore.', { place: 'Kansas' })
'we are not in Kansas anymore.'
```

