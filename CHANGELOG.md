# 2019-02-06

- disable tslint rule `interface-name`
- add _Fork_ info to the readme
- add [eslint] support for `.js` files and integrate with prettier
- add revamp yarn scripts and add better documentation

- use babel as the compiler for typescript and javascript files
- add `typeCheck` to check types of typescript files
- add script `build:types` && `watch:types` to generate typescript declarations
- add [babel-node] to run current file for `.ts` and `.js` files
- remove [ts-node] in favor of [babel-node]
- remove `parser` from .prettierrc to allow auto-detection
- add [@babel/plugin-proposal-class-properties] to support class porps in js
- add [@babel/plugin-proposal-object-rest-spread] to support spread on js files
- remove messed up comments in `tsconfig.json`
- use nodejs spawn to exec current file via code-runner

[eslint]: https://eslint.org/

# 2019-02-05

- upgrade versions of [jest], [prettier] and [tslint-config-prettier]

# 2019-02-04

- update snapshots to reflect new files
- config babel to add ts support in jest tests
- add `@babel/preset-typescript` and `@babel/preset-env`
- create a `.babelrc` config file

# 2019-02-03

- remove [ts-jest] & [jest-extended]
- upgrade all dependencies
- add CHANGELOG.md file

[ts-jest]: https://github.com/kulshekhar/ts-jest
[jest-extended]: https://github.com/jest-community/jest-extended
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/
[tslint-config-prettier]: https://github.com/prettier/tslint-config-prettier
[ts-node]: https://github.com/TypeStrong/ts-node
[babel-node]: https://babeljs.io/docs/en/babel-node
[@babel/plugin-proposal-class-properties]: https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
[@babel/plugin-proposal-object-rest-spread]: https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
