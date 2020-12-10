
const { USER_LOGIN, ACCOUNTLOGIN } = require("../../Util/Config")

let accountLogin = {}
if (localStorage.getItem(ACCOUNTLOGIN)) {
    accountLogin = JSON.parse(localStorage.getItem(ACCOUNTLOGIN));
}
let userLogin = {}
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
    userLogin: userLogin,
    accountLogin: accountLogin,
    bookingHistory: {}
}
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.data
            state.accountLogin = action.account
            return { ...state }
        }
        case 'LICH_SU_DAT_VE': {
            state.bookingHistory = action.data
            return { ...state }
        }
        default: return { ...state }
    }
}