import { compose, filter, map, test, assoc, toLower } from 'ramda'

export default (searchStringBuilder, searchExpression) => arrSearchData => {
  const re = new RegExp('\\b' + toLower(searchExpression) + '.*\\b')
  return compose(
    filter(doc => test(re, toLower(doc.search))),
    map(doc => assoc('search', searchStringBuilder(doc), doc))
  )(arrSearchData)
}
