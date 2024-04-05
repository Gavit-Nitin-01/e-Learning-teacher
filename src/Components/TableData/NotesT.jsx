import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import teacherContext from '../../context/teacherContext';
import TableData from './TableData';
import './notes.css'
export default function NotesT() {

    const context = useContext(teacherContext);
    const { notes } = context;

    return (
        <>
            <div className="container-fluid px-4 my-4">
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Notes</li>
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
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>image</th>
                                    <th>pdf</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    notes.map((data, id) => {
                                        return <TableData key={id} data={data} />
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
