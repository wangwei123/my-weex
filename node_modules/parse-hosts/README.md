# parse-hosts

Parse the hosts file and return its list.


## Install

```shell
npm install parse-hosts
```


## Usage

```js
var ph = require('parse-hosts');

// just call this
ph.get();

// the return value is object.
// key is ip address and value is array of hostnames.
// {
//   '127.0.0.1': ['localhost'],
//   '192.168.50.1': ['host1', 'host2']
// }

// you can specify the location of the hosts file.
ph.get('/path/to/hosts');

// if you want to get "127.0.0.1" mapped to "localhost" regardless of whether
// it's in the hosts file, use optimize(). this method ensures generating it.
ph.optimize();
```


## Test

```shell
npm test
```


## License

Licensed under the MIT license.


## Special thanks to

* [Keiko Kitagawa](http://official.stardust.co.jp/keiko/)
