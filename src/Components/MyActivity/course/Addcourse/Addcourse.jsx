import React, { useState } from "react";
import "./Addcourse.css";
export default function Addcourse() {

  const [credentials, setCredentials] = useState({ Course_Id:"" ,name: "", description: "" })
  
  const submitCourse = (e) => {
    e.preventDefult();
    
  }


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
  return (
    <div>
      <div className="uploadcourse">
        <h2 className="heading">Add new cours</h2>
        <div className="Addcourses">
          <form onSubmit={submitCourse}>
            <div className="form-group">
              <label for="courseid">Course id</label>
              <input
                type="text"
                className="form-control"
                id="courseid"
                placeholder="course id"
                value={credentials.Course_Id} onChange={onChange}
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
                value={credentials.name} onChange={onChange}
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
                value={credentials.description} onChange={onChange}
              ></textarea>
            </div>
            <br></br>

            <button className="btn btn-primary" type='submit' >Add Course</button>
          </form>
        </div>
        <hr></hr>
        <div className="courselist">

        </div>
      </div>
    </div>
  );
}
