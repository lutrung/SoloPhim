import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { suaPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import NewForm from './NewForm'
export default function SuaPhim(props) {
    const dispatch = useDispatch();
    const suaPhim = () => {
        dispatch(suaPhimAction(props.formSua))
    }

    return (
        <div className='suaPhim_content'>
            {/* Button */}
            <button type="button" className="btn btn-primary mx-2" data-toggle="modal" data-target={`#suaPhimModal${props.maPhim}`} onClick={suaPhim}>
                Sửa
            </button>
            {/* Modal */}
            <div className="modal fade" id={`suaPhimModal${props.maPhim}`} tabIndex={-1} role="dialog" aria-labelledby="suaPhimModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="suaPhimModalLabel">Phim đang sửa {props.tenPhim}</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <NewForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}