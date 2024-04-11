import React, { useContext, useState } from "react";
import "./Addcourse.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Addcourse() {

  const [course, setCourse] = useState({ courseid: "", coursename: "", discription: "" })


  const submitCourse = (e) => {
    e.preventDefault();
    console.log(course.courseid,course.coursename,course.discription)
    setCourse({ courseid: "", coursename: "", discription: "" });
    // const response = await fetch("http://localhost:4000/api/course/createcourse", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token": localStorage.getItem('token'),
    //   },
    //   body: JSON.stringify(course.courseid,course.coursename,course.discription)
    // });
    // const json = await response.json();
    // console.log(json)
    // if (!json) {
    //   toast.error('Something wrrong', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     theme: "colored",
    //   });

    // } else {
    //   toast.success('Course Added Successfuly', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     theme: "colored",
    //   });

    // }
  }

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="uploadcourse mx-4">
        <h2 className="heading">Add Tutorial</h2>
        <div className="Addcourses">
          <form onSubmit={submitCourse}>
            <div className="form-group">
              <label htmlFor="courseid">Course id</label>
              <input
                type="text"
                className="form-control"
                id="courseid"
                name="courseid"
                minLength={5}
                placeholder="course id"
                value={course.courseid}
                onChange={onChange}
              />
            </div>
            <br></br>

            <div className="form-group">
              <label >Course name</label>
              <input
                type="text"
                className="form-control"
                id="coursename"
                name="coursename"
                minLength={3}
                placeholder="course name"
                value={course.coursename}
                onChange={onChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Discription</label>
              <textarea
                className="form-control"
                id="discription"
                name="discription"
                rows="3"
                minLength={5}
                placeholder="Discription"
                value={course.discription}
                onChange={onChange}
              ></textarea>
            </div>
            <br></br>
            <div>
              <button  disabled={course.coursename.length<3 || course.discription.length<5 || course.courseid.length<5} className="addcourse"  type='submit' >Add Course</button>
            </div>
            <Link to="/courselist">View Course List</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
