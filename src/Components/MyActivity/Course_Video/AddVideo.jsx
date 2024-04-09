import React from 'react'

export default function AddVideo() {
    return (
        <>

            <button type="button" className="btn btn-primary" style={{ background: '#3530b3', color: "white" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add Video
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Upload Course Video</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container modal-body">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="email" className="form-control" id="title" placeholder="Enter Video Title" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Short Description'></textarea>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Uplad Video</label>
                                <input className="form-control" type="file" accept='video/*' id="formFileDisabled" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn" style={{ background: '#3530b3', color: "white" }}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
