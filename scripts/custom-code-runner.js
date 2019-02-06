const { spawn } = require('child_process')

/**
 * It helps code-runner vscode plugin to decide between run given the file using
 * `babel-node` or `jest`. See `.vscode/settings.json` in the key
 * `code-runner.executorMap`.
 */

const file = process.argv.slice(2)[0]
const isTest = Boolean(file.match(/\.test\.ts$/) || file.match(/\.test\.js$/))

if (isTest) {
  spawn('yarn', ['jest', file], {
    stdio: 'inherit',
  })
} else {
  spawn('yarn', ['babel-node', file, '--extensions', '.ts,.js'], {
    stdio: 'inherit',
  })
}
