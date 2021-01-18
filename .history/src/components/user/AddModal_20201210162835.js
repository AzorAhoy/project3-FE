import React, { Component } from 'react';

class AddModal extends Component {
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Thêm Người Dùng
                    </button>
                    {/* The Modal */}
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm Người Dùng</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                            Modal body..
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddModal;