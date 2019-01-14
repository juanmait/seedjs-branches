# NodeJS + Typescript + Prettier + Jest + Vscode

Yet another scaffolding project.

A scaffolding repo to develop NodeJS apps written in typescript with support for
linting + prettier + jest and great support in vscode. The goal is to have
typescript all the way down from development to testing with first class support
in visual studio code.

--------------------------------------------------------------------------------

## TL;DR

```bash
# install dependencies
$ yarn install
```

start (compile + watch):

```bash
$ yarn start
```

Install vscode extensions:

+ [prettier-vscode]
+ [vscode-typescript-tslint-plugin]
+ [code-runner]
+ [jest-snapshot-language-support]

vscode shortcuts:

+ `ctrl+i`: auto fix/format using [prettier].
+ `ctrl+alt+n`: run the current file with [ts-node] if ends with `.ts` and with
[jest] + [ts-jest] if ends with `.test.ts`.

--------------------------------------------------------------------------------

## Linting

Combines [tslint] & [prettier] without conflicting each other by using
[tslint-config-prettier]. For vscode the recommended extensions are
[prettier-vscode] and [vscode-typescript-tslint-plugin]. Those enables linting,
auto formating and auto fixing via `ctrl+i`, on file save, on paste and more
(check config at `.vscode/settings.json`).

### Linting scripts (yarn/npm)

```bash
# check for any conflict between tslint and prettier configs
$ yarn tslint-check

# run tslint on all `.ts` files inside the `./src` folder.
$ yarn lint

# run tslint and prettier to find errors and fix those that are possible to auto-fix
$ yarn prettier-tslint
```

Check `package.json` files in the `"scripts"` field for details.

--------------------------------------------------------------------------------

## Git Hooks

Includes a *pre-commit* hook that runs `prettier` and `tslint` in your **staged
files** to check for errors (and auto fix them when possible) before commits. It
will **abort** the commit phase if errors prevails after the auto fixing. It
uses [husky] and [lint-staged] for that.

--------------------------------------------------------------------------------

## Typescript

The typescript configuration is pretty strict. Is up to you to make it less
restrictive if you want. Check `tsconfig.json`.

### Typescript scripts (yarn/npm)

```bash
# transpile all `.ts` files in `./src` folder and place the result in the `./dist` folder
$ yarn compile

# same as `compile` but enables a watcher to auto compile on file changes
$ yarn watch
```

--------------------------------------------------------------------------------

## Testing with JEST

Uses [ts-jest] preset so you can write and run tests written in typescript. It
support [inline-snapshots] powered by Prettier. It also integrates
[jest-extended] which adds some pretty extra features (you have to import it
when you want to use it: `import 'jest-extended'`).

```bash
$ yarn jest # run all tests inside `./src` folder
```

--------------------------------------------------------------------------------

## Vscode support:

+ use prettier for auto formating `ctrl+i`, format on save, format on paste.
+ run `*.ts` and `*.test.ts` files directly from the IDE with key shortcut
`ctrl+alt+n`. It will use [ts-node] for `*.ts` files and [jest] with [ts-jest]
preset for `*.test.ts`. It uses vscode extension [code-runner] with a custom
config in `.vscode/settings.json`. By default it will run the process opening a
vscode terminal, you can configure this in `.vscode/settings.json` under
"code-runner.runInTerminal".

<!-- modules and dev dependencies -->
[tslint]:https://palantir.github.io/tslint/
[prettier]:https://prettier.io/
[tslint-config-prettier]:https://github.com/prettier/tslint-config-prettier
[husky]:https://github.com/typicode/husky
[lint-staged]:https://www.npmjs.com/package/lint-staged
[ts-node]:https://github.com/TypeStrong/ts-node
[ts-jest]:https://github.com/kulshekhar/ts-jest
[jest-extended]:https://github.com/jest-community/jest-extended
[jest]:https://jestjs.io/

<!-- vscode extensions -->
[prettier-vscode]:https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-typescript-tslint-plugin]:https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
[code-runner]:https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
[jest-snapshot-language-support]: https://marketplace.visualstudio.com/items?itemName=tlent.jest-snapshot-language-support

[inline-snapshots]:https://jestjs.io/docs/en/snapshot-testing#inline-snapshots
