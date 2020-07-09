# renaissance-append-html

renaissance appendHTML adapter

## Usage

```js
const { r } = require('renaissance')
const AppendHtmlAdapter = require('renaissance-append-html')
const adapter = r.registerAdapter('appendHTML', AppendHtmlAdapter)

adapter.appendHTML('<p>appendHTML</p>', document.getElementsByTagname('body')[0], function(children) { console.log(children) })
// OR
r.adapters.appendHTML.appendHTML('<p>appendHTML</p>', document.getElementsByTagname('body')[0], function(children) { console.log(children) })
```

## API

### adapter.appendHTML({string} html, {object} node, {function} cb)

Append `html` to `node` and run `cb`, if present

## Setup

- Install `rollup` globally with `npm i -g rollup`

## Contributing

See [CONTRIBUTING](https://github.com/frncsdrk/renaissance-append-html/blob/master/CONTRIBUTING.md)

## Credits

See [CREDITS](https://github.com/frncsdrk/renaissance-append-html/blob/master/CREDITS)

## License

[MIT](https://github.com/frncsdrk/renaissance-append-html/blob/master/LICENSE) (c) 2017 - 2020 frncsdrk and contributors
