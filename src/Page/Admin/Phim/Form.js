import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { themPhimApiAction } from '../../../redux/actions/QuanLyPhimAction';

export default function FormPhim(props) {
    const dispatch = useDispatch()
    const [error, setError] = useState({
        maPhim: '',
        tenPhim: '',
        traiLer: '',
        ngayKhoiChieu: '',
        danhGia: '',
        hinhAnh: {},
        moTa: '',
    })
    const [themPhim, setThemPhim] = useState([{
        maPhim: 0,
        tenPhim: '',
        traiLer: '',
        ngayKhoiChieu: '',
        danhGia: '',
        hinhAnh: {},
        moTa: '',
        maNhom: 'GP10',
    }])
    const handleChange = (e) => {
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newErrors = { ...error };
        newErrors[name] = value.trim() === "" ? "* Không được bỏ trống !" : "";
        if (types === "maPhim" || types === "danhGia") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        if (types === "tenPhim") {
            const regexNumber = /^[A-Za-z ]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là chữ!";
            }
        }
        if (name === 'hinhAnh') {
            setThemPhim({ ...themPhim, hinhAnh: e.target.files[0] })
        } else {
            let newThemPhim = { ...themPhim, [name]: value }
            setThemPhim(newThemPhim)
        }
        setError(newErrors)
    }
    console.log('themPhim', themPhim);
    console.log('error', error);
    const handleSubmit = async (e) => {
        e.preventDefault()
        let form_data = new FormData();
        for (let key in themPhim) {
            form_data.append(key, themPhim[key]);
        }
        let valid = true;
        for (let tenThuocTinh in themPhim) {
            if (themPhim[tenThuocTinh].trim() === '') {
                valid = false;
            }
        }
        console.log(valid);
        for (let tenThuocTinh in error) {
            if (error[tenThuocTinh].trim() !== '') {
                valid = false;
            }
        }
        console.log(valid);
        if (!valid) {
            Swal.fire('Thông báo', 'Dữ liệu không hợp lệ!', 'error');
            return;
        }

        Swal.fire('Thông báo', 'Thêm người dùng thành công!', 'success');
        console.log(themPhim);
        // dispatch(await themPhimApiAction(form_data))

    }
    return (
        <form className='form_content' onSubmit={handleSubmit}>
            <div className='d-flex'>
                <div className='form_Left'>
                    <div className="form-group">
                        <label>Mã phim</label>
                        <input types='maPhim' name='maPhim' className='form-control' onChange={handleChange} />
                        <p className="text-danger error">{error.maPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input types='tenPhim' name='tenPhim' className='form-control' onChange={handleChange} />
                        <p className="text-danger error">{error.tenPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input types='traiLer' name='traiLer' className="form-control" onChange={handleChange} />
                        {/* <p className="text-danger error">{error.traiLer}</p> */}
                    </div>
                </div>
                <div className='form_Right'>
                    <div className="form-group">
                        <label>Ngày chiếu</label>
                        <br />
                        <input types='ngayKhoiChieu' type="date" name='ngayKhoiChieu' className="form-control" onChange={handleChange} />
                        <p className="text-danger error">{error.ngayKhoiChieu}</p>
                    </div>
                    <div className="form-group">
                        <label>Đánh giá</label>
                        <input types='danhGia' name='danhGia' className="form-control" onChange={handleChange} />
                        <p className="text-danger error">{error.danhGia}</p>
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <br />
                        <input types='hinhAnh' type="file" name='hinhAnh' className="form-control" onChange={handleChange} />
                        {/* <p className="text-danger error">{error.hinhAnh}</p> */}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h5>Mô tả</h5>
                <textarea types='moTa' name='moTa' className="form-control" rows="3" onChange={handleChange}></textarea>
                {/* <p className="text-danger error">{error.moTa}</p> */}
            </div>
            <div className='form-group' style={{ textAlign: 'right' }}>
                <button className='btn btn-primary mx-2' type='submit' >Thêm</button>
            </div>
        </form>
    );
};
