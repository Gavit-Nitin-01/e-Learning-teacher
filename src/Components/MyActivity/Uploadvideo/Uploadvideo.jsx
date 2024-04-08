import React from "react";
import "./Uploadvideo.css";

export default function Uploadvideo() {
  return (
    <div>
      <h2 className="heading">Add Playlist</h2>
      <div className="containerr ">

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
            cols="83"
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
          Add playlist
        </button>

      </div>
      <hr></hr>
      <h2 className="heading">Add video playlist</h2>
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="p-3 bg-white shadow rounded-lg">
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/84/04/video-playlist-icon-for-web-and-apps-vector-46388404.webp"
              alt=" "
              className="playlistIcon"
            />
            <h6 className="text-center mb-4 text-muted">video playlist</h6>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Video title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Discription
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <br></br>

              <div className="Choosefile">
                <div className="custom-file overflow-hiddenmb-5">
                  <div>Chooes image</div>

                  <input
                    id="customFile"
                    type="file"
                    className="custom-file-input"
                    accept="application/pdf"
                  />
                </div>
                <div className="">
                  <img className="themes" src="https://cdn.vectorstock.com/i/preview-1x/84/04/video-playlist-icon-for-web-and-apps-vector-46388404.webp " alt="image"></img>
                </div>
              </div>
              <br></br>
              <label className="btnadd">
              <button className="addplaylist" ype="submit">
                Add playlist
              </button>

              </label>

            </form>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
