import vegito from '../src'

test('main', () => {
  const foo = val => `it ${val}`
  expect(vegito(`hello {{name}} {{foo('hi')}}`, {name: 'world', foo})).toBe('hello world it hi')
})
