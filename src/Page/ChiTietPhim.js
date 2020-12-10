import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongLichChieuPhimApiAction, layHeThongRapApiAction, layHeThongCumRapApiAction, layLichChieuHTRApiAction } from '../redux/actions/QuanLyPhimAction';
import moment from 'moment'
import { NavLink } from 'react-router-dom';

export default function ChiTietPhim(props) {
    // API THONG TIN LICH CHIEU PHIM
    const dispatch = useDispatch();
    useEffect(async () => {
        let maPhim = props.match.params.maPhim;
        dispatch(await layThongLichChieuPhimApiAction(maPhim))
    }, [])
    const thongTinLichChieu = useSelector(state => state.QuanLyPhimReducer.thongTinLichChieu)
    console.log('thongTinLichChieu', thongTinLichChieu);

    const [code, setcode] = useState("BHDStar");
    const codeCinema = (code) => {
        setcode(code);
    };
    console.log(code);
    return (
        <div className='chiTietPhim'>
            <div className='container'>
                <div className='row chiTietPhim_content'>
                    <div className='col-8 chiTietPhim_left'>
                        <div className='row'>
                            <div className='col-4 chiTietPhim_anh'>
                                <img src={thongTinLichChieu.hinhAnh} alt='' />
                            </div>
                            <div className='col-8 chiTietPhim_thongTin'>
                                <span className='thongTin_ngayChieu'>
                                    {moment(thongTinLichChieu.ngayKhoiChieu).format('MM-DD-YYYY')}
                                </span>
                                <span className='thongTin_tenPhim'>
                                    {thongTinLichChieu.tenPhim}
                                </span>
                                <span className='thongTin_thoiLuong'>
                                    {thongTinLichChieu.heThongRapChieu?.slice(0, 1).map((cr, index) => {
                                        return <Fragment key={index}>
                                            {cr.cumRapChieu?.slice(0, 1).map((crc, index) => {
                                                return <Fragment key={index}>
                                                    {crc.lichChieuPhim?.slice(0, 1).map((lichChieu, index) => {
                                                        return <Fragment key={index}>
                                                            {lichChieu.thoiLuong} phút
                                                        </Fragment>
                                                    })}
                                                </Fragment>
                                            })}
                                        </Fragment>
                                    })}
                                </span>
                                <a className='btn btn-danger btn_muaVe' href='#lichChieu'>Mua vé</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 chiTietPhim_right'>
                        <div className='chiTietPhim_danhGia'>
                            {thongTinLichChieu.danhGia}
                        </div>
                        <div className='chiTietPhim_star'>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <span className='chiTietPhim_soNguoi'>
                            200 người đánh giá
                        </span>
                    </div>
                </div>
                <div className='lichChieu_thongTin'>
                    <nav className='title'>
                        <div className="nav nav-tabs personal_title" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab lichChieu" data-toggle="tab" href="#lichChieu" role="tab" aria-controls="nav-home" aria-selected="true">Lịch Chiếu</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#thongTin" role="tab" aria-controls="nav-profile" aria-selected="false">Thông Tin</a>
                        </div>
                    </nav>
                    <div className="tab-content noiDung" id="nav-tabContent">
                        <div className="tab-pane fade show active noiDung_lichChieu" id="lichChieu" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='noiDung_lichChieu_content'>
                                <div className='row'>
                                    <div className='col-4 noiDung_lichChieu_left'>
                                        {thongTinLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                                            let active = index === 0 ? 'active' : '';
                                            let codeCumRap = heThongRap.maHeThongRap
                                            return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => { codeCinema(codeCumRap) }} >
                                                <img src={heThongRap.logo} />
                                                <span className='tenHTRap'>{heThongRap.tenHeThongRap}</span>
                                            </a>
                                        })}
                                    </div>
                                    <div className='col-8 noiDung_lichChieu_right'>
                                        {thongTinLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                                            let active = index === 0 ? 'active' : '';
                                            if (heThongRap.maHeThongRap == code) {
                                                return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                    {heThongRap.cumRapChieu?.map((rapChieu, index) => {
                                                        return <div className='rap_lichChieu' key={index}>
                                                            <img src='https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-quang-trung-15379536724871.jpg' />
                                                            <div>
                                                                <span className='tenRap'>{rapChieu.tenCumRap}</span>
                                                                {rapChieu.lichChieuPhim?.slice(0, 5).map((lichChieu, index) => {
                                                                    return <NavLink className='suatChieu' key={index} to={'/chitietphongve/' + lichChieu.maLichChieu}>
                                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}
                                                                    </NavLink>
                                                                })}
                                                            </div>
                                                        </div>
                                                    })}
                                                </a>
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade noiDung_ThongTin" id="thongTin" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row noiDung_ThongTin_content'>
                                <div className='col-5 noiDung_ThongTin_left'>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <span>Ngày công chiếu</span>
                                        </div>
                                        <div className='col-7'>
                                            {moment(thongTinLichChieu.ngayKhoiChieu).format('MM-DD-YYYY')}
                                        </div>
                                    </div>
                                    {/* ------------- */}
                                    <div className='row'>
                                        <div className='col-5'>
                                            <span>Đạo diễn</span>
                                        </div>
                                        <div className='col-7'>
                                            <span>CyberSoft</span>
                                        </div>
                                    </div>
                                    {/* ------------- */}
                                    <div className='row'>
                                        <div className='col-5'>
                                            <span>Diễn viên</span>
                                        </div>
                                        <div className='col-7'>
                                            <span>Lư Nguyễn Thành Trung</span>
                                        </div>
                                    </div>
                                    {/* ------------- */}
                                    <div className='row'>
                                        <div className='col-5'>
                                            <span>Thể loại</span>
                                        </div>
                                        <div className='col-7'>
                                            <span>Project cuối khóa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7 noiDung_ThongTin_right'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <span>Nội dung</span>
                                        </div>
                                        <div className='col-12'>
                                            {thongTinLichChieu.moTa}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}