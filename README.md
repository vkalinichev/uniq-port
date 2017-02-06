# uniq-port [![npm][npm]][npmjs.org] [![build][travis]][travis-ci.org] [![coverage][codecov]][codecov.io] [![dependencies][librariesio]][libraries.io]

[npm]: https://img.shields.io/npm/v/uniq-port.svg?colorB=44cc11
[npmjs.org]: https://www.npmjs.com/package/uniq-port

[travis]: https://api.travis-ci.org/vkalinichev/uniq-port.svg
[travis-ci.org]: https://travis-ci.org/vkalinichev/uniq-port

[codecov]: https://img.shields.io/codecov/c/github/vkalinichev/uniq-port.svg
[codecov.io]: https://codecov.io/gh/vkalinichev/uniq-port

[librariesio]: https://img.shields.io/librariesio/github/vkalinichev/uniq-port.svg
[libraries.io]: https://libraries.io/npm/uniq-port

Generates an unique port-number for in safe range (1025-65535) 

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
import uniqPort from 'uniq-port'

uniqPort( 'your-unique-app-name' ) //-> 9629
uniqPort( 'uniq-port' ) //-> 64451
```
