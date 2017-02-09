# uniq-port [![npm][npm]][npmjs.org] [![build][travis]][travis-ci.org] [![coverage][codecov]][codecov.io] [![dependencies][librariesio]][libraries.io]

[npm]: https://img.shields.io/npm/v/uniq-port.svg?colorB=44cc11
[npmjs.org]: https://www.npmjs.com/package/uniq-port

[travis]: https://api.travis-ci.org/vkalinichev/uniq-port.svg
[travis-ci.org]: https://travis-ci.org/vkalinichev/uniq-port

[codecov]: https://img.shields.io/codecov/c/github/vkalinichev/uniq-port.svg
[codecov.io]: https://codecov.io/gh/vkalinichev/uniq-port

[librariesio]: https://img.shields.io/librariesio/github/vkalinichev/uniq-port.svg
[libraries.io]: https://libraries.io/npm/uniq-port

Generates a string-based unique port number in a [safe range](http://stackoverflow.com/a/218860/4974102)

## Install
#### NPM
```bash
npm install uniq-port
 ```
#### Yarn 
```bash
yarn add uniq-port
 ```

## Usage
```js
const uniqPort = require( 'uniq-port' )

uniqPort( 'your-unique-app-name' ) //-> 65293
uniqPort( 'uniq-port' ) //-> 54115
```
