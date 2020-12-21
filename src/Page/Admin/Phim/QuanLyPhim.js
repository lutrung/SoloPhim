import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import DanhSachPhim from './DanhSachPhim';
import PhanTrang from './PhanTrang';
import ThemPhim from './ThemPhim';

export default function QuanLyPhim(props) {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)

    useEffect(() => {
        const layDsPhim = async () => {
            setLoading(true);
            const results = await Axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            setPosts(results.data);
            setLoading(false);
        }
        layDsPhim()
    }, []);

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFistPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    return (
        <div className='container quanLyPhim_content'>
            {/* <div className='TimKiem_content'>
                <i className="fa fa-search iconTimKiem"></i>
                <input className='intTimKiem' type="text" placeholder='...' />
            </div> */}
            <ThemPhim />
            <div className='bangPhim mt-5'>
                <table className="table table-striped table-bordered table-active">
                    <thead className='head'>
                        <tr>
                            <th style={{ width: '5%' }}>Mã phim</th>
                            <th style={{ width: '10%' }}>Tên Phim</th>
                            <th style={{ width: '10%' }}>Hình ảnh</th>
                            <th style={{ width: '25%' }}>Mô tả</th>
                            <th style={{ width: '5%' }}>Mã nhóm</th>
                            <th style={{ width: '5%' }}>Ngày khởi chiếu</th>
                            <th style={{ width: '20%' }}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        <DanhSachPhim posts={currentPosts} />
                    </tbody>
                </table>
                <PhanTrang postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>
        </div>
    )
}
