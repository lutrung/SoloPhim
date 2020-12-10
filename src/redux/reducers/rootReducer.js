import { combineReducers } from "redux";
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDungReducer'
import { QuanLyPhimReducer } from './QuanLyPhimReducer'
export const rootReducer = combineReducers({
    // khai báo các reducer
    QuanLyNguoiDungReducer,
    QuanLyPhimReducer
});
