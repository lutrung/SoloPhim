import './App.css';
import { Route, Switch } from 'react-router-dom';
import ThongTinCaNhan from './Page/PersonalInfo'
import DangNhap from './Page/Login';
import DangKy from './Page/SignUp';
import TrangChu from './Page/TrangChu';
import { HomeTemplate } from './Template/HomeTemplate';
import ChiTietPhongVe from './Page/ChiTietPhongVe';
import ChiTietPhim from './Page/ChiTietPhim';

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
      </Switch>
    </>
  );
}

export default App;
