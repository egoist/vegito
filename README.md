# vegeto

[![NPM version](https://img.shields.io/npm/v/vegeto.svg?style=flat)](https://npmjs.com/package/vegeto) [![NPM downloads](https://img.shields.io/npm/dm/vegeto.svg?style=flat)](https://npmjs.com/package/vegeto) [![Build Status](https://img.shields.io/circleci/project/egoist/vegeto/master.svg?style=flat)](https://circleci.com/gh/egoist/vegeto) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> 463 bytes simple template engine that works for Node.js and browser.

## Install

```bash
npm i --save vegeto
```

CDN: https://unpkg.com/vegeto/dist/

## Usage

```js
const vegeto = require('vegeto')

vegeto('hello {{ name }}', {name: 'world'})
//=> hello world

vegeto(`hello {{ name.toUpperCase().split('').join('-') }}`, {name: 'world'})
//=> hello W-O-R-L-D

vegetp(`hello {{ reverse('world') }}`, {
  reverse: str => str.split('').reverse().join('')
})
//=> hello dlrow
```

You can use **any** JavaScript expression in the template within delimiters `{{` and `}}`.

## API

### vegeto(template, data, options)

#### template

Type: `string`<br>
Default: `''`

Template string.

#### data

Type: `Object`<br>
Default: `{}`

#### options

##### delimiters

Type: `Array`<br>
Default: `['{{', '}}']`

Change the expression interpolation delimiters.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vegeto** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vegeto/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
