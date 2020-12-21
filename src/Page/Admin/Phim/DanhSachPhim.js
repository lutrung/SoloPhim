import React, { Fragment } from 'react'
import moment from 'moment'
import TaoLichChieu from './TaoLichChieu'
export default function DanhSachPhim(props) {

    return <Fragment>
        {props.posts.map((post, index) => {
            return <Fragment key={index}>
                <tr>
                    <td>{post.maPhim}</td>
                    <td>{post.tenPhim}</td>
                    <td style={{ textAlign: 'center' }}><img src={post.hinhAnh} alt='' style={{ width: 50, height: 50 }} /></td>
                    <td><p className='test'>{post.moTa}</p></td>
                    <td>{post.maNhom}</td>
                    <td>{moment(post.ngayKhoiChieu).format("DD/MM/YYYY")}</td>
                    <td>
                        <div className='d-flex'>
                            <TaoLichChieu />
                            <button className='btn btn-primary  mx-2'>Sửa</button>
                            <button className='btn btn-danger'>X</button>
                        </div>
                    </td>
                </tr>
            </Fragment>
        })}
    </Fragment>
}
