import vegeto from '../src'

test('main', () => {
  const foo = val => `it ${val}`
  expect(vegeto(`hello {{name}} {{foo('hi')}}`, {name: 'world', foo})).toBe('hello world it hi')
})
