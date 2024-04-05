import React from "react";
import "./Addcourse.css";
export default function Uploadvideo() {
  return (
    <div>
      <div className="uploadcourse">
        <h2 className="heading">Add new cours</h2>
        <div className="Addcourses">
          <form>
          <div className="form-group">
              <label for="courseid">Course id</label>
              <input
                type="text"
                className="form-control"
                id="courseid"
                placeholder="course id"
              />
            </div>
            <br></br>

            <div className="form-group">
              <label for="Addcourse">Course name</label>
              <input
                type="text"
                className="form-control"
                id="Addcourse"
                placeholder="course name"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label for="exampleInputPassword1">Discription</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Discription"
              ></textarea>
            </div>
            <br></br>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <hr></hr>
        <div className="courselist">

        </div>
      </div>
    </div>
  );
}
