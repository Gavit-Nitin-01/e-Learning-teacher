import React, { useContext, useState } from 'react'

import teacherContext from '../../context/teacherContext';
import "./notes.css";


export default function Uploadnotes() {

  const context = useContext(teacherContext);
  const { addNotes } = context;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const convetToBase64 = (e) => {
    console.log(e);
    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = () => {
      // console.log(render.result)
      setImage(render.result);
    }
    render.onerror = error => {
      // console.log("Error", error)
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

    addNotes(title, desc, file, image);

  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="p-5 bg-white shadow rounded-lg">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1557366994/img_epm3iz.png"
                alt=""
                className="imgupld"
              />
              <h6 className="text-center mb-4 text-muted">upload your file</h6>
              <form onSubmit={submitImage}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Book title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name='title'
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Discription
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => { setDesc(e.target.value) }}
                  ></textarea>
                </div>
                <div className="Choosefile">
                  <div className="custom-file overflow-hiddenmb-5">
                    <div>Chooes a PDF File</div>

                    <input
                      id="customFile"
                      type="file"
                      className="custom-file-input"
                      accept="application/pdf"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="imgsection">
                    <div className="custom-file overflow-hiddenmb-5">
                      <div>Chooes a PDF File</div>
                      <label htmlFor="img"></label>
                      <input type="file" id="img" name="img" accept="image/*" onChange={convetToBase64} />
                      <div className="imgcondition">
                        ( Chooes a image and size must be 150x150 pixel )
                      </div>
                    </div>

                    <img
                      className="themes"
                      src={image}
                      alt="image"
                    ></img>
                  </div>
                </div>
                <br></br>

                <label>
                  <button className='btn btn-primary' type='submit'>
                    Upload
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}