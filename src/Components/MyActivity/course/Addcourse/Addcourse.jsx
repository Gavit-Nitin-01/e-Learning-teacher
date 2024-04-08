import React, { useContext, useState } from "react";
import "./Addcourse.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Addcourse() {


  const [Course_Id, setCourseId] = useState("");
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  const submitCourse = async (e) => {
    e.preventDefault();
    if (Course_Id === "" && name === "" && description === "") {
      toast.error('fill  the details', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    } else {

      const response = await fetch("http://localhost:4000/api/course/createcourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ Course_Id, name, description })
      });
      const json = await response.json();
      // console.log(json)
      if (!json) {
        toast.error('Something wrrong', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });

      } else {
        toast.success('Course Added Successfuly', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });

      }

    }


  }

  return (
    <div>
      <div className="uploadcourse mx-4">
        <h2 className="heading">Add new cours</h2>
        <div className="Addcourses">
          <form onSubmit={submitCourse}>
            <div className="form-group">
              <label htmlFor="courseid">Course id</label>
              <input
                type="text"
                className="form-control"
                id="courseid"
                minLength={5}
                placeholder="course id"
                onChange={(e) => { setCourseId(e.target.value) }}
              />
            </div>
            <br></br>

            <div className="form-group">
              <label htmlFor="Addcourse">Course name</label>
              <input
                type="text"
                className="form-control"
                id="Addcourse"
                minLength={3}
                placeholder="course name"
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Discription</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                minLength={5}
                placeholder="Discription"
                onChange={(e) => { setDesc(e.target.value) }}
              ></textarea>
            </div>
            <br></br>
            <div>
              <button className="addcourse" type='submit' >Add Course</button>
            </div>
            <Link to="/courselist">View Course List</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
