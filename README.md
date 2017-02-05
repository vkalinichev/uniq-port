# uniq-port [![npm][npm-badge]][npm-link] [![Travis][travis-badge]][travis-link] [![bitHound][bithound-code-badge]][bithound-link] [![bitHound][bithound-dev-badge]][bithound-link]

[travis-badge]: https://img.shields.io/travis/vkalinichev/uniq-port.svg
[travis-link]: https://travis-ci.org/vkalinichev/uniq-port
[npm-badge]: https://img.shields.io/npm/v/uniq-port.svg
[npm-link]: https://www.npmjs.com/package/uniq-port
[bithound-code-badge]: https://img.shields.io/bithound/code/github/vkalinichev/uniq-port.svg
[bithound-dev-badge]: https://img.shields.io/bithound/devDependencies/github/vkalinichev/uniq-port.svg
[bithound-link]: https://www.bithound.io/github/vkalinichev/uniq-port

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
