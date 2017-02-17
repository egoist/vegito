import vegito from '../src'

test('main', () => {
  const foo = val => `it ${val}`
  expect(vegito(`hello {{name}} {{foo('hi')}}`, {name: 'world', foo})).toBe('hello world it hi')
})

test('sanitize', () => {
  expect(vegito(`hello {{na*me}}`, {
    name: 'world'
  }, {
    sanitize: val => val.replace('*', '')
  })).toBe('hello world')
})

test('no expression', () => {
  expect(vegito(`hello {{foo.bar}}`, {
    foo: {bar: 'world'}
  }, {
    safe: true
  })).toBe('hello world')
})
