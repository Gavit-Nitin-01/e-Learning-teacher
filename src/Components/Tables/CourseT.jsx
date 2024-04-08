import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import teacherContext from '../../context/teacherContext';
import CourseData from './TableData/CourseData';

export default function CourseT() {

    const context = useContext(teacherContext);
    const { course } = context

    return (
        <>
            <div className="container-fluid px-4 my-4">
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Course</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body">
                        DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                        <a target="_blank" href="">official DataTables documentation</a>
                        .
                        
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        DataTable Notes
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    course.map((datac, id) => {
                                        return <CourseData key={id} datac={datac} />
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </>
    )
}
