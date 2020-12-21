import './App.css';
import { Route, Switch } from 'react-router-dom';
import ThongTinCaNhan from './Page/PersonalInfo'
import DangNhap from './Page/Login';
import DangKy from './Page/SignUp';
import TrangChu from './Page/TrangChu';
import { HomeTemplate } from './Template/HomeTemplate';
import ChiTietPhongVe from './Page/ChiTietPhongVe';
import ChiTietPhim from './Page/ChiTietPhim';
import { AdminTemplate } from './Template/AdminTemplate';
import Admin from './Page/Admin/Admin';
import QuanLyPhim from './Page/Admin/Phim/QuanLyPhim';
import QuanLyNguoiDung from './Page/Admin/NguoiDung/QuanLyNguoiDung';
function App() {
  return (
    <>
      <Switch>
        <HomeTemplate exact path='/' Component={TrangChu} />
        <HomeTemplate exact path='/trangchu' Component={TrangChu} />
        <HomeTemplate exact path='/chitietphim/:maPhim' Component={ChiTietPhim} />
        <Route exact path='/chitietphongve/:maLichChieu' component={ChiTietPhongVe} />
        <Route exact path='/thongtincanhan' component={ThongTinCaNhan} />
        <Route exact path='/dangnhap' component={DangNhap} />
        <Route exact path='/dangky' component={DangKy} />
        <AdminTemplate exact path='/admin' Component={Admin} />
        <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
        <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />
      </Switch>
    </>
  );
}

export default App;
