import readdirAsync from './readdirAsync'

test('the project has the expected files', async () => {
  const dirents = (await readdirAsync(process.cwd()))
    .map(dirent => dirent.name)
    .sort()

  expect(dirents).toMatchInlineSnapshot(`
Array [
  ".babelrc",
  ".git",
  ".gitignore",
  ".prettierignore",
  ".prettierrc",
  ".tmp",
  ".vscode",
  "CHANGELOG.md",
  "README.md",
  "dist",
  "jest.config.js",
  "node_modules",
  "package.json",
  "scripts",
  "src",
  "tsconfig.json",
  "tslint.json",
  "yarn.lock",
]
`)
})
