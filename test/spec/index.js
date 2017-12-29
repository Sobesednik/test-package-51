const assert = require('assert')
const context = require('../context/')
const testPackage_51 = require('../../src/')

const testPackage_51TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_51, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_51()
        })
    },
}

module.exports = testPackage_51TestSuite
