import readdirAsync from './readdirAsync'

test('the project has the expected files', async () => {
  const dirents = (await readdirAsync(process.cwd()))
    .map(dirent => dirent.name)
    .filter(name => name !== '.env' && name !== 'build')
    .sort()

  expect(dirents).toMatchInlineSnapshot(`
Array [
  ".babelrc",
  ".eslintignore",
  ".eslintrc.json",
  ".git",
  ".gitignore",
  ".prettierignore",
  ".prettierrc",
  ".tmp",
  ".vscode",
  "CHANGELOG.md",
  "README.md",
  "jest.config.js",
  "node_modules",
  "package.json",
  "src",
  "tsconfig.json",
  "tslint.json",
  "yarn.lock",
]
`)
})
