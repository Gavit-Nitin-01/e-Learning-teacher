import React, { useContext } from 'react'
import teacherContext from '../../../context/teacherContext';
import CourseCard from './CourseCard/CourseCard';

export default function ViewCourse() {

    const context = useContext(teacherContext);
    const { course } = context
    return (
        <>
            {/* <div className="containerr ">

                <div className="Vdoinfo">
                    <label htmlFor="vinfo">Video title</label>
                    <br></br>
                    <input
                        type="text"
                        id="vinfo"
                        name="vinfo"
                        placeholder="Video Title"
                    />
                </div>

                <div className="discription">
                    <label htmlFor="discribe">Discription</label>
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
                        <input type="file" className="form-control-file" id="Vdoupload" accept="video/*" />
                    </div>
                </div>
                <button type="submit" className="uploadbtn">
                    Add
                </button>

            </div> */}
            <div className="container-fluid my-4 row">
                <center><h2>Course List</h2></center>
                {
                    course.map((datac, id) => {
                        return <CourseCard key={id} datac={datac} />
                    })
                }
            </div>
        </>
    )
}
