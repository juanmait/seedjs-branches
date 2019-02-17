# SeedJS

This branch is for development of libraries that should run on both, nodejs and
the browser.

**Ideal uses cases**:

1. _**Agnostic libraries**_ that _should_ NOT call native APIs at all, neither
   from Nodejs or the browser.
2. Libraries that can eventually READ from native APIs only to know more about
   the kind of environment in which they are running (e.g.:
   `if (window && window.localStorage) { ... }`).
3. Libraries that based on the info from point **2**, decides to use a nodejs
   targeted lib or a browser targeted lib to do the same job.

**Note 1**: Keep in mind that ideally a _library_ is just a set of tools,
utilities or helpers that does nothing by themselves but instead are intended to
be used as a part of other libraries, apps, or programs.

**Note 2**: The output when you build for _production_ will still use CommonJS
modules (e.g: `const { hello } = require('./world')`).

## Available Scripts

```bash
$ yarn start
# Start the development mode. It builds the source code and keep watching for
# changes. It also launch a watcher to build the typescript declaration files.

$ yarn build
# build for prod (will run `prebuild` automatically). This does not minify the
# output, does not make dead code elimination and does not bundle your files in
# one single chunk of code. If the thing you're building that use this library
# runs on nodejs, then minification or bundling have no sense. In the other hand
# the app you're building that is using this library will run in the browser,
# then minification and bundling is the responsibility of the bundling tool that
# you may use when releasing to production (e.g: webpack, parcel, rollup,
# create-react-app).

$ yarn prebuild
# run `clean`, `fix`, `lint` & `checkTypes`

$ yarn test
# run all the test files using JEST

$ yarn checkTypes
# check for typescript errors

$ yarn lint
# check for lint errors using tslint for `.ts` files and eslint for `.js`.

$ yarn fix
# auto format and auto fix all the source code using `prettier-tslint` and
# `prettier-eslint`

$ yarn checkConflicts
# detect configurations conflicts between eslint/tslint and prettier

$ yarn clean
# remove the build folder
```
