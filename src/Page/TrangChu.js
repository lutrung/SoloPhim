import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimApiAction, layHeThongCumRapApiAction, layHeThongRapApiAction, layLichChieuHTRApiAction } from '../redux/actions/QuanLyPhimAction'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import moment from 'moment'
import { NavLink } from 'react-router-dom';

export default function TrangChu(props) {
    const dispatch = useDispatch();
    // API DANH SACH PHIM
    useEffect(async () => {
        dispatch(await layDanhSachPhimApiAction())
    }, [])
    const dsPhim = useSelector(state => state.QuanLyPhimReducer.movieList)
    const owlCarousel = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    // API HE THONG RAP
    useEffect(async () => {
        dispatch(await layHeThongRapApiAction())
    }, [])
    const heThongRap = useSelector(state => state.QuanLyPhimReducer.heThongRap)

    // API HE THONG CUM RAP
    const [code, setcode] = useState("BHDStar");
    const codeCinema = (code) => {
        setcode(code);
    };
    useEffect(async () => {
        dispatch(await layHeThongCumRapApiAction(code))
    }, [code])
    const cumRap = useSelector(state => state.QuanLyPhimReducer.cumRap)
    console.log(cumRap);

    // API THONG TIN LICH CHIEU HE THONG RAP

    useEffect(async () => {
        dispatch(await layLichChieuHTRApiAction(code))
    }, [code])
    const lichChieuHTR = useSelector(state => state.QuanLyPhimReducer.lichChieuHTR)
    const [maCR, setmaCR] = useState("bhd-star-cineplex-3-2");
    const maCumRap = (ma) => {
        setmaCR(ma);
    };
    return (
        <div>
            {/* CAROUSEL */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/carousel/carousel1.jpg" style={{ width: '100%', height: '100%' }} className="d-block w-100" alt="..." />
                        <a href='https://tix.vn/'><i class="fa fa-play"></i></a>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/carousel2.jpg" style={{ width: '100%', height: '100%' }} className="d-block w-100" alt="..." />
                        <a href='https://tix.vn/'><i class="fa fa-play"></i></a>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/carousel3.jpg" style={{ width: '100%', height: '100%' }} className="d-block w-100" alt="..." />
                        <a href='https://tix.vn/'><i class="fa fa-play"></i></a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* DANH SACH PHIM */}
            <div className='container movieList' style={{ padding: '20px 0' }}>
                <Slider {...owlCarousel}>
                    {dsPhim.slice(0, 12).map((phim, index) => {
                        return <Fragment key={index}>
                            <div className="card_Movie item">
                                <div className="moive_Poster">
                                    <div class="card__overlay">
                                        <a href='#' class="movie__playicon">
                                            <i class="fa fa-play"></i>
                                        </a>
                                    </div>
                                    <img src={phim.hinhAnh} alt="..." />
                                </div>
                                <div className="card_info">
                                    <h5 className="movies_Name">{phim.tenPhim}</h5>
                                    <div className='star'>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <NavLink className='btn btn-danger btn_BuyTicket' to={'/chitietphim/' + phim.maPhim}>Mua Vé</NavLink>
                            </div>
                        </Fragment>
                    })}
                </Slider>
            </div>
            {/* CUM RAP */}
            <div className='container cinema'>
                <div className='row cinema_content'>
                    <div className='logo_cinema col-1'>
                        {heThongRap?.map((cinema, index) => {
                            let active = index === 0 ? 'active' : '';
                            let code = cinema.maHeThongRap
                            return <a onClick={() => {
                                codeCinema(code);
                            }} key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" href={`#${cinema.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <img src={cinema.logo} alt={cinema.logo} />
                            </a>
                        })}
                    </div>
                    <div className='cinema_system col-3 nav flex-column nav-pills' id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {cumRap?.slice(0, 6).map((chinhanh, index) => {
                            let active = index === 0 ? 'active' : '';
                            let codeCumRap = chinhanh.maCumRap
                            return <a className='cinema_system_render' onClick={() => { maCumRap(codeCumRap) }} key={index}>
                                <div className='row chiNhanh_content'>
                                    <div className='col-3 anhChiNhanh'>
                                        <img src='https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-quang-trung-15379536724871.jpg' />
                                    </div>
                                    <div className='col-9 thongTinChiNhanh'>
                                        <div className='row' style={{ margin: 0 }}>
                                            <div className='col-12 tenChiNhanh'>
                                                {chinhanh.tenCumRap}
                                            </div>
                                            <div className='col-12 diaChiChiNhanh'>
                                                {chinhanh.diaChi}
                                            </div>
                                            <div className='col-12 chiTietChiNhanh'>
                                                <a>[Chi tiết]</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        })}
                    </div>
                    <div className='movie_schedule col-8'>
                        {lichChieuHTR?.map((lichchieu, index) => {
                            let active = index === 0 ? 'active' : '';
                            return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" href={`#${lichchieu.maCumRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                {lichchieu.lstCumRap?.map((cumRap, index) => {
                                    if (cumRap.maCumRap == maCR) {
                                        return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                            {cumRap.danhSachPhim?.slice(0, 10).map((dsPhim, index) => {
                                                return <div key={index} className='thongTin_content'>
                                                    <div className='thongTin_anh'>
                                                        <img src={dsPhim.hinhAnh} />
                                                    </div>
                                                    <div className='thongTin_lichChieu'>
                                                        <div className='tenPhim'>
                                                            {dsPhim.tenPhim}
                                                        </div>
                                                        <div >
                                                            {dsPhim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
                                                                return <NavLink className='suatChieu' key={index} to={'/chitietphongve/' + lichChieu.maLichChieu}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </a>
                                    }
                                })}
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}


