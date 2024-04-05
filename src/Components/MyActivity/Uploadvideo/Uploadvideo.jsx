import React from "react";
import "./Uploadvideo.css";
export default function Uploadvideo() {
  return (
    <div>
      <h2 className="heading">UPLOAD VIDEO</h2>
      <div className="containerr ">
        <div className="col-md-6">
          <label for="inputState">videos</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>

        <div className="Vdoinfo">
          <label for="vinfo">Video title</label>
          <br></br>
          <input
            type="text"
            id="vinfo"
            name="vinfo"
            placeholder="Video Title"
          />
        </div>

        <div class="discription">
          <label for="discribe">Discription</label>
          <br></br>
          <textarea
            id="discribe"
            name="discribe"
            rows="4"
            cols="70"
            placeholder="Discription"
          ></textarea>
        </div>

        <div className="Vdochoose">
          <div>choose video</div>
          <div>
            <input type="file" class="form-control-file" id="Vdoupload" />
          </div>
        </div>

        
          <button type="submit" className="uploadbtn">
            Upload
          </button>
        
      </div>
    </div>
  );
}
