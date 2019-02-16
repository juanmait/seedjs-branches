import { hello } from './hello'
test('all is okay', () => {
  expect(hello()).toMatchInlineSnapshot(`"hello"`)
})
