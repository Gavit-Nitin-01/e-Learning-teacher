
import { Link } from 'react-router-dom'
import TableData from './TableData';

export default function AdminT() {



    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Admin Tables</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Tables</li>
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
                        DataTable Example
                    </div>
                    <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>phone</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    adminData.map((data, id) => {
                                        return <TableData key={id} data={data} />
                                    })
                                } */}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </>
    )
}
