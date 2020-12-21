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




// import React from 'react'
// // import { Modal, Button } from 'antd';
// import { useState } from 'react';
// import FormPhim from './Form';
// import { Button, Modal } from 'react-bootstrap'
// export default function ThemPhim(props) {
//     const [modal, setModal] = useState(false)
//     const showModal = () => {
//         setModal(!modal)
//     }
//     return (
//         <div className='themPhim_content'>
//             {/* <Button type="primary" onClick={() => showModal(true)}>Thêm phim</Button>
//             <Modal
//                 centered
//                 visible={modal}
//                 onOk={() => setModal(false)}
//                 onCancel={() => setModal(false)}
//                 width={1000}
//             >
//                 <FormPhim />
//             </Modal> */}
//             <Button onClick={() => { showModal() }}>Thêm phim</Button>
//             <Modal show={modal}
//                 onHide={() => { showModal() }}
//                 width={1000}
//             >
//                 <Modal.Header className='modal_header' style={{ position: 'relative' }}>
//                     <span>Thông tin phim muốn thêm</span>
//                     <a onClick={showModal} style={{ position: 'absolute', top: 0, right: 0, height: '20px', width: '20px', lineHeight: '20px', backgroundColor: '#d4d4d4' }}>X</a>
//                 </Modal.Header>
//                 <Modal.Body className='modal_body'>
//                     <FormPhim />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     )
// }

