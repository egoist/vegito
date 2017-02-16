export default function (
  tpl = '',
  data = {},
  {delimiters = ['{{', '}}']} = {}
) {
  const re = new RegExp(`${delimiters[0]}(.*?)${delimiters[1]}`, 'g')

  return tpl.replace(re, (_, exp) => {
    return new Function('data', `with (data) {return ${exp}}`)(data) // eslint-disable-line no-new-func
  })
}
