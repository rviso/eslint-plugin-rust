const { RuleTester } = require('eslint');
const rule = require('../lib/rust-lint');

const ruleTester = new RuleTester();
ruleTester.run('rust-rule', rule, {
  valid: [
    { code: 'fn main() {}' }
  ],
  invalid: [
    {
      code: 'let unused_variable = 42;',
      errors: [{ message: 'Avoid using the identifier \'foo\'.' }]
    }
  ]
});
