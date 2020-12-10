import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { datVeApiAction, layThongTinPhongVeApiAction } from '../redux/actions/QuanLyPhimAction';
import { DAT_GHE } from '../redux/Const/QuanLyPhimConst';
import { USER_LOGIN } from '../Util/Config';
export default function ChiTietPhongVe(props) {
    const thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe)
    const danhSachGheDangDat = useSelector(state => state.QuanLyPhimReducer.danhSachGheDangDat)
    console.log(danhSachGheDangDat)
    const dispatch = useDispatch();
    useEffect(async () => {
        // lasy tham so lich chieu tu url
        let maLichChieu = props.match.params.maLichChieu;
        console.log(maLichChieu);
        // goi action ket noi api lay du lieu lich chieu ve
        dispatch(await layThongTinPhongVeApiAction(maLichChieu))
    }, [])

    const [height, setHeight] = useState(window.innerHeight); //window.innerHeight set ảnh = chiều dài màn hình
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, []);

    return (
        <div className='container-fluid chiTietPhongVe'>
            <div className='row'>
                <div className='col-9 text-center chiTietPhongVe_manHinh'>
                    {/* hien thi thong tin phong ve */}
                    <div className='manHinh'>
                        <img src='https://tix.vn/app/assets/img/icons/screen.png' />
                    </div>
                    <div className='danhSachGhe'>
                        {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                            let classGheVip = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip';
                            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
                            let disable = ghe.daDat ? 'disable' : '';
                            let noiDungBtn = ghe.daDat ? 'X' : ghe.stt;
                            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => ghe.maGhe === gheDangDat.maGhe)
                            let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : '';
                            return <Fragment key={index}>
                                <button onClick={() => {
                                    dispatch({
                                        type: DAT_GHE,
                                        gheDangDat: {
                                            maGhe: ghe.maGhe,
                                            giaVe: ghe.giaVe,
                                            stt: ghe.stt
                                        }
                                    })
                                }} disabled={`${disable}`} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{noiDungBtn}</button>
                                {(index + 1) % 16 === 0 ? <br /> : ''}
                            </Fragment>
                        })}
                    </div>
                    {/* <img src={"./img/loaiGhe.jpg"} alt='./img/loaiGhe.jpg' /> */}
                    <div className='loaiGhe'>
                        <div className='ddd'>
                            <span className='ghe'></span>
                            <span>Ghế thường</span>
                        </div>
                        <div className='ddd'>
                            <span className='ghe gheVip'></span>
                            <span>Ghế VIP</span>
                        </div>
                        <div className='ddd'>
                            <span className='ghe gheDaDat'>X</span>
                            <span>Ghế đã được đặt</span>
                        </div>
                        <div className='ddd'>
                            <span className='ghe gheDangDat'></span>
                            <span>Ghế đang chọn</span>
                        </div>
                    </div>
                </div>
                <div className='col-3 chiTietPhongVe_thongTin' style={{ height }}>
                    <div className='thongTin_tongTien'>{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                        return tongTien += gheDangDat.giaVe
                    }, 0).toLocaleString()} VND</div>
                    <hr />
                    <div className='row' style={{ margin: 0 }}>
                        <div className='col-4'>
                            <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} style={{ width: "100%" }} alt='' />
                        </div>
                        <div className='col-8'>
                            <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
                            <h5>{thongTinPhongVe.thongTinPhim?.tenCumRap} - {thongTinPhongVe.thongTinPhim?.tenRap}</h5>
                            <p>{thongTinPhongVe.thongTinPhim?.ngayChieu} - {thongTinPhongVe.thongTinPhim?.gioChieu}</p>
                        </div>
                    </div>

                    <hr />
                    <div className='thongTin_ghe'>
                        <div className='viTriGhe'>Ghế: {danhSachGheDangDat?.map((gheDangDat, index) => {
                            return <span key={index}>{gheDangDat.stt}, </span>
                        })}
                        </div>
                        <div className='tienGhe'>
                            {danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.giaVe
                            }, 0).toLocaleString()} đ
                        </div>
                    </div>
                    <hr />
                    <button className='btn_datVe' onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            let user = JSON.parse(localStorage.getItem(USER_LOGIN))
                            let objectDatVe = {
                                'maLichChieu': props.match.params.maLichChieu,
                                'danhSachVe': danhSachGheDangDat,
                                'taiKhoanNguoiDung': user.taiKhoan
                            }
                            dispatch(await datVeApiAction(objectDatVe))
                        } else {
                            props.history.push('/dangnhap')
                        }

                    }}>Đặt vé</button>
                </div>
            </div>
        </div>
    )
}
