# eslint-plugin-rust

This plugin is a collection of rules for ESLint that help you enforce best practices in your Rust code.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-rust`:

```sh
$ npm install eslint-plugin-rust --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rust` globally.

## Usage

Add `rust` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rust"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "rust/rule-name": 2
    }
}
```
