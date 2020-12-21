// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import moment from 'moment'
// export default function FormPhim(props) {

//     const [themPhim, setThemPhim] = useState({
//         maPhim: '',
//         tenPhim: '',
//         traiLer: '',
//         ngayKhoiChieu: '',
//         danhGia: '',
//         hinhAnh: {},
//         moTa: '',
//         maNhom: 'GP10',
//         biDanh: '',
//     })
//     console.log(themPhim);
//     const [error, setError] = useState({
//         maPhim: "",
//     })
//     const handleChangeInput = (e) => {
//         // Kiểm tra dữ liệu nhập vào
//         let { name, value } = e.target;
//         let types = e.target.getAttribute("types");
//         let newErrors = { ...error };
//         newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";
//         setError(newErrors)
//         if (types === "maPhim") {
//             const regexNumber = /^[0-9]+$/;
//             if (!regexNumber.test(value.trim())) {
//                 newErrors[name] = "* Dữ liệu phải là số !";
//             }
//         }
//         if (types === "ngayKhoiChieu") {
//             const regexNumber = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
//             if (!regexNumber.test(value.trim())) {
//                 newErrors[name] = "* Ngày không hợp lệ !";
//             }
//         }
//         // Lấy dữ liệu nhập vào
//         let newThemPhim = { ...themPhim, [name]: value };
//         setThemPhim(newThemPhim)
//     }
//     return (
//         <from className='form_content'>
//             <div className='d-flex'>
//                 <div className='form_Left'>
//                     <div className="form-group">
//                         <label>Mã phim</label>
//                         <input types='maPhim' name='maPhim' className='form-control' onChange={handleChangeInput} />
//                     </div>
//                     <div className="form-group">
//                         <label>Tên phim</label>
//                         <input name='tenPhim' className='form-control' onChange={handleChangeInput} />
//                     </div>
//                     <div className="form-group">
//                         <label>Trailer</label>
//                         <input type="text" name='traiLer' className="form-control" onChange={handleChangeInput} />
//                     </div>
//                 </div>
//                 <div className='form_Right'>
//                     <div className="form-group">
//                         <label>Ngày chiếu</label>
//                         <br />
//                         <input types='ngayKhoiChieu' name='ngayKhoiChieu' className="form-control" onChange={handleChangeInput} />
//                         <p className="text-danger error">{error.ngayKhoiChieu}</p>
//                     </div>
//                     <div className="form-group">
//                         <label>Đánh giá</label>
//                         <input type="text" name='danhGia' className="form-control" onChange={handleChangeInput} />
//                     </div>
//                     <div className="form-group">
//                         <label>Hình ảnh</label>
//                         <br />
//                         <input type="file" name='hinhAnh' onChange={handleChangeInput} />
//                     </div>
//                 </div>
//             </div>
//             <div className="form-group">
//                 <h5>Mô tả</h5>
//                 <textarea type="text" name='moTa' className="form-control" rows="3" onChange={handleChangeInput}></textarea>
//             </div>
//             <div className='form-group' style={{ textAlign: 'right' }}>
//                 <button className='btn btn-primary mx-2' type='submit' >Thêm</button>
//                 <button className='btn btn-danger' type='submit' onClick={props.offModal}>Đóng</button>
//             </div>
//         </from>
//     );
// };


















import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { useDispatch } from 'react-redux';
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
    const [themPhim, setThemPhim] = useState({
        maPhim: 0,
        tenPhim: '',
        traiLer: '',
        biDanh: '',
        ngayKhoiChieu: '',
        danhGia: '',
        hinhAnh: {},
        moTa: '',
        maNhom: 'GP10',
    })
    console.log(themPhim);
    const handleChange = (e) => {
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newErrors = { ...error };
        newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";
        setError(newErrors)
        if (types === "maPhim") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        if (name === 'hinhAnh') {
            setThemPhim({ ...themPhim, hinhAnh: e.target.files[0] })
        } else {
            let newThemPhim = { ...themPhim, [name]: value }
            setThemPhim(newThemPhim)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let form_data = new FormData();
        for (let key in themPhim) {
            form_data.append(key, themPhim[key]);
        }
        dispatch(await themPhimApiAction(form_data))
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
                        {/* <p className="text-danger error">{error.tenPhim}</p> */}
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
                        {/* <p className="text-danger error">{error.ngayKhoiChieu}</p> */}
                        {/* <DatePicker
                            name='ngayKhoiChieu'
                            selected={themPhim.ngayKhoiChieu}
                            onChange={date => { setThemPhim({ ...themPhim, ngayKhoiChieu: date }) }}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                        /> */}

                    </div>
                    <div className="form-group">
                        <label>Đánh giá</label>
                        <input types='danhGia' name='danhGia' className="form-control" onChange={handleChange} />
                        {/* <p className="text-danger error">{error.danhGia}</p> */}
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <br />
                        <input types='hinhAnh' type="file" name='hinhAnh' onChange={handleChange} />
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
