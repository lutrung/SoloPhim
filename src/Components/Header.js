import React from "react";
import style from "../Css/main.css";
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
export default function Header() {
  const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);
  return (
    <header><nav className="navbar navbar-expand-md navbar-light">
      <NavLink className="navbar-brand" to="/"><img className="weblogo" src="./img/web-logo.png" alt='' /></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="header__menu">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link" to="#">Lịch Chiếu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">Cụm Rạp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">Tin tức</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">Ứng dụng</NavLink>
            </li>
            {userLogin.taiKhoan ?
              <li className="nav-item">
                <NavLink className="nav-link" to="/thongtincanhan">Thông tin cá nhân</NavLink>
              </li>
              : ''}
          </ul>
        </div>
        <div className="header__user">
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {userLogin.taiKhoan ?
                <li className="nav-item">
                  <NavLink to="/"><span className='text-danger mx-1'>Hello, {userLogin.taiKhoan} </span></NavLink>
                </li>
                : (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/dangnhap">Đăng nhập</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='bg-dark text-white' to="/dangky">Đăng ký</NavLink>
                  </li>
                </>)}
            </ul>
          </form>
          <div className="location">
            <div className="location__logo"><img src="./img/location-header.png" /></div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hồ Chí Minh
                </button>
              <div className="dropdown-menu selectScroll" aria-labelledby="dropdownMenu2">
                <NavLink className="dropdown-item" to="#">Hồ Chí Minh</NavLink>
                <NavLink className="dropdown-item" to="#">Hà Nội</NavLink>
                <NavLink className="dropdown-item" to="#">Đà Nẵng</NavLink>
                <NavLink className="dropdown-item" to="#">Buôn Mê Thuộc</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>

  );
}
