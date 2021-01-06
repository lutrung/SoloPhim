import { DAT_GHE, DAT_VE_THANH_CONG, HANDLE_CHANGE_INPUT, LAY_DANH_SACH_PHIM_ACTION, LAY_HE_THONG_CUM_RAP_ACTION, LAY_HE_THONG_RAP_ACTION, LAY_LICH_CHIEU_HE_THONG_RAP_ACTION, SUA_PHIM_ACTION, THONG_TIN_LICH_CHIEU_ACTION, THONG_TIN_PHONG_VE_ACTION } from "../Const/QuanLyPhimConst";
const stateDefault = {
    movieList: [],
    heThongRap: [],
    cumRap: [],
    lichChieuHTR: [],
    thongTinPhongVe: {},
    thongTinLichChieu: {},
    danhSachGheDangDat: [],
    formSuaPhim: {
        value: {
            maPhim: '',
            tenPhim: '',
            hinhAnh: {},
            moTa: '',
            maNhom: 'GP01',
            ngayKhoiChieu: '',
        },
        errors: {
            maPhim: '',
            tenPhim: '',
            hinhAnh: '',
            moTa: '',
            maNhom: 'GP01',
            ngayKhoiChieu: '',
        },
    }
}
export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM_ACTION: {
            state.movieList = action.dsPhim;
            return { ...state }
        }
        case LAY_HE_THONG_RAP_ACTION: {
            state.heThongRap = action.heThongRap;
            return { ...state }
        }
        case LAY_HE_THONG_CUM_RAP_ACTION: {
            state.cumRap = action.cumRap;
            return { ...state }
        }
        case LAY_LICH_CHIEU_HE_THONG_RAP_ACTION: {
            state.lichChieuHTR = action.lichChieuHTR;
            return { ...state }
        }
        case THONG_TIN_PHONG_VE_ACTION: {
            state.thongTinPhongVe = action.thongTinPhongVe;
            return { ...state };
        }
        case THONG_TIN_LICH_CHIEU_ACTION: {
            state.thongTinLichChieu = action.thongTinLichChieu;
            return { ...state };
        }
        case DAT_GHE: {
            let mangGheDaDang = [...state.danhSachGheDangDat]
            let index = mangGheDaDang.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe)
            if (index !== -1) {
                mangGheDaDang.splice(index, 1)
            } else {
                mangGheDaDang.push(action.gheDangDat)
            }
            state.danhSachGheDangDat = mangGheDaDang
            return { ...state };
        }
        case DAT_VE_THANH_CONG: {
            return { ...state, danhSachGheDangDat: [] }
        }
        case SUA_PHIM_ACTION: {
            let phimCanSua = { ...action.phimNguoiDungChinhSua };
            state.formSuaPhim = { ...state.formSuaPhim, value: phimCanSua };
            return { ...state };
        }
        case HANDLE_CHANGE_INPUT: {
            state.formSuaPhim = { ...action.newFormSua };
            return { ...state };
        }
        default: return { ...state }
    }
}