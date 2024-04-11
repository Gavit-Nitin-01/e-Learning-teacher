import React, { useContext } from 'react'
import teacherContext from '../../../context/teacherContext';
import CourseCard from './CourseCard/CourseCard';

export default function ViewCourse() {

    const context = useContext(teacherContext);
    const { course } = context
    return (
        <>
            
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
