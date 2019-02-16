# SeedJS

This branch is for development of libraries that should run on both, nodejs and
the browser.

**Ideal uses cases**

1. Agnostic libraries that will NOT use native APIs at all neither from Nodejs
   or the browser.
2. Libraries that will only READ from native APIs only to know more about the
   kind of environment in which they are running (e.g.:
   `if (window && window.localStorage) { ... }`).
3. Libraries that based on the info from point 2, decides to run a nodejs based
   lib or a browser based lib to do the same job.

## Available Scripts

```bash
$ yarn start
# Start the development mode. It builds the source code and keep watching for
# changes. It also launch a watcher to build the typescript declaration files.

$ yarn build
# build for prod (should run prebuild automatically)

$ yarn prebuild
# run `clean`, `fix`, `lint` & `checkTypes`

$ yarn test
# run all the test files using JEST

$ yarn checkTypes
# check for typescript errors

$ yarn lint
# check for lint errors using tslint for `.ts` files and eslint for `.js`.

$ yarn fix
# run auto format and auto fix using `prettier-tslint` and `prettier-eslint`

$ yarn checkConflicts
# detect eslint/tslint configurations that can collide with prettier

$ yarn checkTslint
# check for any conflict between `tslint` and prettier configs. Run this when
# you add new rules to your tslint.json file. It will warn you about what are
# the rules that you should avoid.

$ yarn checkEslint
# same as above but for `eslint`

$ yarn clean
# remove the build folder
```
