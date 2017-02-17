export default function (
  tpl = '',
  data = {},
  {
    delimiters = ['{{', '}}'],
    safe = false,
    sanitize
  } = {}
) {
  const re = new RegExp(`${delimiters[0]}([\\s\\S]+?)${delimiters[1]}`, 'g')

  return tpl.replace(re, (_, exp) => {
    if (!safe) {
      exp = sanitize ? sanitize(exp) : exp
      return new Function('data', `with (data) {return ${exp}}`)(data) // eslint-disable-line no-new-func
    }

    let ret = data

    for (const prop of exp.split('.')) {
      ret = ret ? ret[prop] : ''
    }

    return ret || ''
  })
}
