const test = require('tape')
const Adapter = require('../src/index')

test('AppendHtmlAdapter is exported', t => {
    t.ok(Adapter)
    t.ok(new Adapter())
    t.end()
})
