import React, { useEffect, useState } from 'react'
import style from "../Css/main.css";
import { useDispatch } from 'react-redux'
import { dangNhapApiAction } from '../redux/actions/QuanLyNguoiDungAction'
export default function DangNhap(props) {

    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = useState({ taiKhoan: '', matKhau: '' })

    const handleChange = (e) => {
        let { value, name } = e.target;
        let newUserLogin = { ...userLogin, [name]: value };
        setUserLogin(newUserLogin)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(await dangNhapApiAction(userLogin))
    }
    return (
        <div className='Login_content'>
            <img src="./img/poster.jpg" alt='./img/poster.jpg' />
            <div className='overlay'></div>
            <div className='Login_loginPic'>
                <div className='Login_pic'>
                    <img src="./img/movie1.gif" alt='./img/login.png' />
                </div>
                <div className='Login_login'>
                    <form onSubmit={handleSubmit}>
                        <h1>Đăng nhập</h1>
                        <hr />
                        <div className='form-group'>
                            <p>Tài khoản:</p>
                            <div className='formLogin'>
                                <i class="fa fa-user-alt"></i>
                                <input className='form-control' name='taiKhoan' placeholder='Tài khoản' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu:</p>
                            <div className='formLogin'>
                                <i class="fa fa-lock"></i>
                                <input type='password' className='form-control' name='matKhau' placeholder='Mật khẩu' onChange={handleChange} />
                            </div>
                        </div>
                        <div className='form-group text'>
                            <div>
                                <input id='remember' type='checkbox' className='mr-1' />
                                <label for="remember" style={{ margin: 0 }}>Ghi nhớ đăng nhập</label>
                            </div>
                            <div>
                                <a href='/'>Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type='submit' >Đăng nhập</button>
                        </div>
                        <div className='form-group social-media'>
                            <a href='https://www.facebook.com/'><i class="fab fa-facebook-f social-icon"></i></a>
                            <a href='https://www.google.com/'><i class="fab fa-google-plus-g social-icon"></i></a>
                            <a href='https://twitter.com/'><i class="fab fa-twitter social-icon"></i></a>
                            <a href='https://www.linkedin.com/'><i class="fab fa-linkedin-in social-icon"></i></a>
                        </div>
                        <span>Bạn chưa có tài khoản?<a href='/dangky'> Đăng ký</a></span>
                    </form>

                </div>
            </div>
        </div >
    )
}
