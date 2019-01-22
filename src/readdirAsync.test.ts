import readdirAsync from './readdirAsync'

test('the project has the expected files', async () => {
  const dirents = await readdirAsync(process.cwd())
  expect(dirents).toMatchInlineSnapshot(`
Array [
  Dirent {
    "name": "jest.config.js",
    Symbol(type): 1,
  },
  Dirent {
    "name": ".git",
    Symbol(type): 2,
  },
  Dirent {
    "name": ".prettierignore",
    Symbol(type): 1,
  },
  Dirent {
    "name": ".prettierrc",
    Symbol(type): 1,
  },
  Dirent {
    "name": ".tmp",
    Symbol(type): 2,
  },
  Dirent {
    "name": ".vscode",
    Symbol(type): 2,
  },
  Dirent {
    "name": "README.md",
    Symbol(type): 1,
  },
  Dirent {
    "name": "dist",
    Symbol(type): 2,
  },
  Dirent {
    "name": ".gitignore",
    Symbol(type): 1,
  },
  Dirent {
    "name": "node_modules",
    Symbol(type): 2,
  },
  Dirent {
    "name": "package.json",
    Symbol(type): 1,
  },
  Dirent {
    "name": "scripts",
    Symbol(type): 2,
  },
  Dirent {
    "name": "src",
    Symbol(type): 2,
  },
  Dirent {
    "name": "tsconfig.json",
    Symbol(type): 1,
  },
  Dirent {
    "name": "tslint.json",
    Symbol(type): 1,
  },
  Dirent {
    "name": "yarn.lock",
    Symbol(type): 1,
  },
]
`)
})
