import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

export default function AddContent() {
    const editor = useRef(null);
    const [content, setContent] = useState('');



    return (
        <>
            <div className='container-flud px-4 my-4 '>

                <h1 className='text-center heading'>Enter content</h1>
                <form action="">
                    <div className='container-flud border bg-light border-black'>

                        <div className="btn-group">
                            <button type="button" className="addcourse dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
                                -------- Select Tutorial--------
                            </button>
                            <ul className="dropdown-menu bg-light">
                                <li><a className="dropdown-item" href="#">PHP</a></li>
                                <li><a className="dropdown-item" href="#">c++</a></li>
                                <li><a className="dropdown-item" href="#">JavaScript</a></li>
                                <li><a className="dropdown-item" href="#">React js</a></li>
                            </ul>
                        </div>
                        <div class="mb-3 mx-3 my-3">
                            <label class="form-label">Enter Topoic Name</label>
                            <input type="text" class="form-control" placeholder="Enter Topic Name" />
                        </div>
                        <div className='mx-3 my-3'>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                style={{ height: "120px" }}
                                onBlur={(newContent) => setContent(newContent)}
                                onChange={(newContent) => { }}
                            />
                        </div>
                        <button className='float-end addcourse mx-3' type='submit'>Add Content</button>
                    </div>

                </form >
            </div>
        </>
    )
}
