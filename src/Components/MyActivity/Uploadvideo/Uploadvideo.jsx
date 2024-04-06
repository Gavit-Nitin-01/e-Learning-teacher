import React from "react";
import "./Uploadvideo.css";
export default function Uploadvideo() {
  return (
    <div>
      <h2 className="heading">UPLOAD VIDEO</h2>
      <div className="containerr ">
       

        <div className="Vdoinfo">
          <label>Video title</label>
          <br></br>
          <input
            type="text"
            id="vinfo"
            name="vinfo"
            placeholder="Video Title"
          />
        </div>

        <div className="discription">
          <label>Discription</label>
          <br></br>
          <textarea
            id="discribe"
            name="discribe"
            rows="4"
            cols="83"
            placeholder="Discription"
          ></textarea>
        </div>

        <div className="Vdochoose">
          <div>choose video</div>
          <div>
            <input type="file" className="form-control-file" id="Vdoupload" />
          </div>
        </div>

        
          <button type="submit" className="uploadbtn">
            Upload
          </button>
        
      </div>
    </div>
  );
}
