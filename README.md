# uniq-port
Generates an unique port-number for in safe range (1025-65535) 
[![Travis](https://img.shields.io/travis/vkalinichev/uniq-port.svg)]()
[![npm](https://img.shields.io/npm/v/uniq-port.svg)]()
[![bitHound](https://img.shields.io/bithound/dependencies/github/vkalinichev/uniq-port.svg)]()
[![bitHound](https://img.shields.io/bithound/devDependencies/github/vkalinichev/uniq-port.svg)]()

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
