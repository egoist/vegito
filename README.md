<p align="center">
  <img width="60" src="./media/icon.png" alt="vegito">
</p>

<p align="center"><a href="https://npmjs.com/package/vegito"><img src="https://img.shields.io/npm/v/vegito.svg?style=flat" alt="NPM version"></a> <a href="https://npmjs.com/package/vegito"><img src="https://img.shields.io/npm/dm/vegito.svg?style=flat" alt="NPM downloads"></a> <a href="https://circleci.com/gh/egoist/vegito"><img src="https://img.shields.io/circleci/project/egoist/vegito/master.svg?style=flat" alt="Build Status"></a> <a href="https://github.com/egoist/donate"><img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat" alt="donate"></a></p>

<p align="center">
  463 bytes simple template engine that works for Node.js and browser.
</p>

## Install

```bash
npm i --save vegito
```

CDN: https://unpkg.com/vegito/dist/

## Usage

```js
const vegito = require('vegito')

vegito('hello {{ name }}', {name: 'world'})
//=> hello world

vegito(`hello {{ name.toUpperCase().split('').join('-') }}`, {name: 'world'})
//=> hello W-O-R-L-D

vegetp(`hello {{ reverse('world') }}`, {
  reverse: str => str.split('').reverse().join('')
})
//=> hello dlrow
```

You can use **any** JavaScript expression in the template within delimiters `{{` and `}}`.

## API

### vegito(template, data, options)

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

**vegito** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vegito/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
