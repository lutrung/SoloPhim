import React from 'react'
import FormPhim from './Form';
export default function ThemPhim(props) {
    return (
        <div className='taoLichChieu_content'>
            {/* Button */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#themPhimModal">
                Thêm phim
            </button>
            {/* Modal */}
            <div className="modal fade" id="themPhimModal" tabIndex={-1} role="dialog" aria-labelledby="themPhimModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="themPhimModalLabel">Thêm Phim</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormPhim />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
