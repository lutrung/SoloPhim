import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { dangKyApiAction } from '../redux/actions/QuanLyNguoiDungAction'
export default function DangKy(props) {

    const dispatch = useDispatch()
    const [error, setError] = useState({
        hoTen: "",
        phoneNumber: "",
        email: "",
    })


    const [userSignup, setUserSignup] = useState({ taiKhoan: '', matKhau: '', email: '', soDt: '', maNhom: 'GP10', maLoaiNguoiDung: 'KhachHang', hoTen: '' })

    console.log('userSignup', userSignup)


    const handleChangeInput = (e) => {
        // Kiểm tra dữ liệu nhập vào
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newErrors = { ...error };
        newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";
        setError(newErrors)
        if (types === "phoneNumber") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        if (types === "email") {
            const regexNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Email không hợp lệ !";
            }
        }
        if (types === "hoTen") {
            const regexNumber = /^[A-Za-z ]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là chữ !";
            }
        }
        // Lấy dữ liệu nhập vào
        let newUserSignup = { ...userSignup, [name]: value };
        setUserSignup(newUserSignup)
        console.log(userSignup)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(await dangKyApiAction(userSignup))
    }

    return (
        <div className='SignUp_content'>
            <img src="./img/poster.jpg" alt='./img/poster.jpg' />
            <div className='overlay'></div>
            <div className='SignUp_loginPic'>
                <div className='SignUp_pic'>
                    <img src="./img/movie2.gif" alt='./img/login.png' />
                </div>
                <div className='SignUp_login'>
                    <form onSubmit={handleSubmit}>
                        <h1>Đăng ký</h1>
                        <hr />
                        <div className='form-group'>
                            <p className='title'>Tài khoản:</p>
                            <div className='formSigup'>
                                <i class="fa fa-user-alt"></i>
                                <input className='form-control' name='taiKhoan' placeholder='Tài khoản' onChange={handleChangeInput} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Mật khẩu:</p>
                            <div className='formSigup'>
                                <i class="fa fa-lock"></i>
                                <input className='form-control' name='matKhau' placeholder='Mật khẩu' onChange={handleChangeInput} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Họ tên:</p>
                            <div className='formSigup'>
                                <i class="fa fa-address-card"></i>
                                <input types='hoTen' name='hoTen' className='form-control' placeholder='Họ tên' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.hoTen}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Email:</p>
                            <div className='formSigup'>
                                <i class="fa fa-envelope"></i>
                                <input types='email' name='email' className='form-control' placeholder='Email' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.email}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Số điện thoại:</p>
                            <div className='formSigup'>
                                <i class="fa fa-mobile-alt"></i>
                                <input types='phoneNumber' name='phoneNumber' className='form-control' placeholder='Số điện thoại' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.phoneNumber}</p>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success'>Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}