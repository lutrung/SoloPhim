import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lichSuDatVeApiAction } from '../redux/actions/QuanLyNguoiDungAction';
import logo from '../assets/img/logo.jpg'
import moment from 'moment'
export default function ThongTinCaNhan(props) {
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);
    const accountLogin = useSelector(state => state.QuanLyNguoiDungReducer.accountLogin);
    const bookingHistory = useSelector(state => state.QuanLyNguoiDungReducer.bookingHistory);
    console.log('bookingHistory', bookingHistory);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await lichSuDatVeApiAction(accountLogin.taiKhoan))
    }, [])

    return (
        <div className='PersonalInfo_conent'>
            <div className='personalInfo_banner'>
                <img src="./img/banner.jpg" alt='./img/banner.jpg' style={{ width: '100%' }} />
            </div>
            <div className='personalInfo_info container'>
                <div>
                    <nav>
                        <div className="nav nav-tabs personal_title" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="nav-home" aria-selected="true">THÔNG TIN CÁ NHÂN</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#history-booking" role="tab" aria-controls="nav-profile" aria-selected="false">LỊCH SỬ ĐẶT VÉ</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='personal_information'>
                                <div className='row personal_information_menu'>
                                    <div className='col-6 personalInfo_left'>
                                        <p>Email: <span>{userLogin.email}</span></p>
                                        <p>Họ tên: <span>{userLogin.hoTen}</span></p>
                                        <p>Số điện: <span>{userLogin.soDT}</span></p>
                                    </div>
                                    <div className='col-6 personalInfo_right'>
                                        <p>Tài khoản: <span>{accountLogin.taiKhoan}</span></p>
                                        <p>Mật khẩu: <span>{accountLogin.matKhau}</span></p>
                                        <a href=''>Cập nhật</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-booking" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='history_booking'>
                                {bookingHistory.thongTinDatVe?.map((thongTinVe, index) => {
                                    return <div key={index} className='row mb-5 history_booking_content'>
                                        <div className='history_booking_left col-sm-6 col-md-4' style={{ textAlign: 'center' }}>
                                            <img src='https:/picsum.photos/200/250' alt='' style={{ width: '100%' }} />
                                        </div>
                                        <div className='history_booking_right col-sm-6 col-md-8'>
                                            <div>
                                                {thongTinVe.danhSachGhe?.slice(0, 1).map((thongTinGhe, index) => {
                                                    return <div key={index} className='d-flex mb-3 info_ticket'>
                                                        <img src={logo} alt='' />
                                                        <div className='mx-2 info_ticket_text'>
                                                            <h2 className='theater_name'>{thongTinGhe.tenHeThongRap}</h2>
                                                            <br />
                                                            <p style={{ margin: 0 }}><span className='movie_name'>Tên phim:</span><span className='movie_nameBinding'> {thongTinVe.tenPhim}</span> </p>
                                                            <div className='d-flex align-items-center' style={{ flexWrap: 'wrap' }} >
                                                                <span className='theater_chair'>{thongTinGhe.tenRap} - Ghế:</span>
                                                                {thongTinVe.danhSachGhe?.map((thongTinGhe, index) => {
                                                                    return <div key={index} className='mx-1'>
                                                                        {thongTinGhe.tenGhe}
                                                                    </div>
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                })}
                                            </div>
                                            <div>
                                                <span style={{ fontWeight: 'bold' }}>Ngày đặt:</span> {moment(thongTinVe.ngayDat).format('dddd, MMMM Do YYYY, h:mm A')}
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}