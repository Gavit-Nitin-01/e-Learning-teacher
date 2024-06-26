import React, { useContext, useState } from 'react'
import teacherContext from '../../../context/teacherContext';

export default function AddTutorial() {

    const context = useContext(teacherContext);
    const { addCourse } = context;

    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState("");


    const convetToBase64 = (e) => {
        let render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = () => {
            setImage(render.result);
        }
        render.onerror = error => {
            toast.success('Image is Not a File', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        }

    }

    const submitImage = async (e) => {
        e.preventDefault();
        addCourse(name, description, image);
        setName("");
        setDesc("");
        setImage("")
    };




    return (
        <>
            <div>
                <div className="row my-3">
                    <div className="col-md-10 mx-auto">
                        <div className="p-5 bg-white shadow rounded-lg">
                            <img
                                src="https://cdn.vectorstock.com/i/preview-1x/84/04/video-playlist-icon-for-web-and-apps-vector-46388404.webp"
                                alt=""
                                className="imgupld"
                            />
                            <h5 className="text-center mb-4 mx-5"> Add Course</h5>
                            <form onSubmit={submitImage}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Course Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name='title'
                                        minLength={3}
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Course Discription
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        minLength={10}
                                        value={description}
                                        onChange={(e) => { setDesc(e.target.value) }}
                                    ></textarea>
                                </div>
                                <div className="Choosefile">

                                    <div className="imgsection">
                                        <div className="custom-file overflow-hiddenmb-5">
                                            <div>Chooes Image File</div>
                                            <input type="file" id="image" name="image" accept="image/*" onChange={convetToBase64} />
                                            <div className="imgcondition my-3">
                                                ( Chooes a image and size must be 150x150 pixel )
                                            </div>
                                        </div>

                                        {(image === "") ? "" : <img
                                            className="themes"
                                            src={image}
                                            alt="image"
                                        />}
                                    </div>
                                </div>
                                <br></br>


                                <button className='uploadbtn' style={{
                                    background: "#1c2785", color: "white", float: "inline-end",
                                    height: "40px"
                                }} type='submit'>
                                    Add
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
