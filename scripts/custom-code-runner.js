/**
 * It helps code-runner vscode plugin to decide between run given the file using
 * `ts-node` or `jest`. See `.vscode/settings.json` in the key
 * `code-runner.executorMap`.
 */

const { extname, basename } = require('path')
const isTest = !Boolean(extname(basename(process.argv.slice(2)[0], '.test.ts')))
console.log(isTest ? 'jest' : 'ts-node')
