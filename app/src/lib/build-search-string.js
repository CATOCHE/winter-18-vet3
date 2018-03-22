import { compose, join, props } from 'ramda'

export default arrProps => compose(join(' '), props('arrProps'))
