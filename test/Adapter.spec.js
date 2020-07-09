const test = require('tape')
const Adapter = require('../src/Adapter')

test('Adapter can be instantiated', t => {
    t.ok(new Adapter())
    t.end()
})

test('Adapter has appendHTML method', t => {
    const adapter = new Adapter()
    t.ok(typeof adapter.appendHTML === 'function')
    t.end()
})
