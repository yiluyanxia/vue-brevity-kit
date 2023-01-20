// export * from './menu'
import menu from './menu'
import setting from './setting'
import basic from './basic'

export default {
    ...menu,
    ...setting,
    ...basic
}
