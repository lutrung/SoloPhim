import React from 'react';
import style from "../Css/main.css";

export default function Footer() {
    return (
        // FOOTER
        <footer>
            <div className="container">
                <div className="row footer__content">
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <p className="footer__title">TIX</p>
                        <div className="footer__policy">
                            <div className="policy__left">
                                <a className="footer__link" href="">FAQ</a>
                                <a className="footer__link" href="">Brand Guidelines</a>
                            </div>
                            <div className="policy__right">
                                <a className="footer__link" href="">Thỏa thuận dịch vụ</a>
                                <a className="footer__link" href="">Chính sách bảo mật</a>
                            </div>
                        </div>


                    </div>

                    <div className="col-sm-0 col-md-0 col-lg-4 col-xl-4 pl-4 footer__partners">
                        <p className="footer__title">ĐỐI TÁC</p>
                        <div className="">
                            <a target="_blank" href="#" title="CGV"><img className="footer__icon" src="./img/partners/cgv.png" /></a>
                            <a target="_blank" href="#" title="BHD"><img className="footer__icon" src="./img/partners/bhd.png" /></a>
                            <a target="_blank" href="#" title="GALAXY"><img className="footer__icon" src="./img/partners/galaxycine.png" /></a>
                            <a target="_blank" href="#" title="CINESTAR"><img className="footer__icon" src="./img/partners/cinestar.png" /></a>
                            <a target="_blank" href="#" title="LOTTECINE"><img className="footer__icon" src="./img/partners/lottecinema.png" /></a>
                        </div>
                        <div className="">
                            <a target="_blank" href="#" title="MAGEGS"><img className="footer__icon" src="./img/partners/megags.png" /></a>
                            <a target="_blank" href="#" title="BETA"><img className="footer__icon" src="./img/partners/beta.jpg" /></a>
                            <a target="_blank" href="#" title="DONGDA"><img className="footer__icon" src="./img/partners/dongdacinema.png" /></a>
                            <a target="_blank" href="#" title="TOUCH"><img className="footer__icon" src="./img/partners/touch.png" /></a>
                            <a target="_blank" href="#" title="CINEMAX"><img className="footer__icon" src="./img/partners/cnx.jpg" /></a>
                        </div>
                        <div className="">
                            <a target="_blank" href="#" title="STARLIGHT"><img className="footer__icon" src="./img/partners/starlight.png" /></a>
                            <a target="_blank" href="#" title="DCINE"><img className="footer__icon" src="./img/partners/dcine.png" /></a>
                            <a target="_blank" href="#" title="ZALOPAY"><img className="footer__icon" src="./img/partners/zalopay_icon.png" /></a>
                            <a target="_blank" href="#" title="PAYOO"><img className="footer__icon" src="./img/partners/payoo.jpg" /></a>
                            <a target="_blank" href="#" title="VCB"><img className="footer__icon" src="./img/partners/VCB.png" /></a>
                        </div>
                        <div className="">
                            <a target="_blank" href="#" title="AGRIBANK"><img className="footer__icon" src="./img/partners/AGRIBANK.png" /></a>
                            <a target="_blank" href="#" title="VIETTINBANK"><img className="footer__icon" src="./img/partners/VIETTINBANK.png" /></a>
                            <a target="_blank" href="#" title="IVB"><img className="footer__icon" src="./img/partners/IVB.png" /></a>
                            <a target="_blank" href="#" title="123GO"><img className="footer__icon" src="./img/partners/123go.png" /></a>
                            <a target="_blank" href="#" title="LABAN"><img className="footer__icon" src="./img/partners/laban.png" /></a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 pl-4 footer__apps">
                            <div className="footer__systems" >
                                <p className="footer__title">MOBILE APP</p>
                                <div className="footer__systems-logo">
                                    <a target="_blank" href="#" title="APPLE"><img className="footer__iconMobile" src="./img/mobileapp/apple-logo.png" /></a>
                                    <a target="_blank" href="#" title="ANDROID"><img className="footer__iconMobile" src="./img/mobileapp/android-logo.png" /></a>
                                </div>
                            </div>
                            <div className="footer__social">
                                <p className="footer__title">SOCIAL</p>
                                <div className="footer__social-logo">
                                    <a target="_blank" href="#" title="FACEBOOK"><img className="footer__iconMobile" src="./img/mobileapp/facebook-logo.png" /></a>
                                    <a target="_blank" href="#" title="ZALO"><img className="footer__iconMobile" src="./img/mobileapp/zalo-logo.png" /></a>
                                </div>
                            </div>
                    </div>
                </div>

            
            <hr className="hrFooter" />
            <div className="row footer__copyright">
                    <div className="col-sm-12 col-md-1"> <img className="zinoLogo" src="./img/zion-logo.jpg" /> </div>
                   
                    <div className="col-sm-12 col-md-9 footer__info">
                        <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                        <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                        <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                            <br />
                            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                        </span>
                        <span>Số Điện Thoại (Hotline): 1900 545 436
                            <br />
                            Email: <a href="" style={{ color: "#FB4226" }}> support@tix.vn</a>
                        </span>
                    </div>

                    <div className="col-sm-12 col-md-2"><img className="registerLogo" src="./img/register.png" /> </div>
                </div>
            </div>
        </footer >
    )
}
