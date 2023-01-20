/**
 * api地址，请勿重名
 */
// const prefix = '/REST_HOST/api'
const prefix = '/api'

const common = {
    login: `${prefix}/auth/login`,
    logout: `${prefix}/auth/logout`,
    getUserInfo: `${prefix}/user/getUserInfo`
}
const admin = {
    getDemoList: `${prefix}/getDemoList`,
    createList: `${prefix}/createList`,
    updateList: `${prefix}/updateList`,
    retrieveList: `${prefix}/retrieveList`,
    deleteList: `${prefix}/deleteList`,
    retrieveListItem: `${prefix}/retrieveListItem`
}

export default {
    ...common,
    ...admin
}
