
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import teacherContext from "../../context/teacherContext";


export default function Header({ onSidebarToggle }) {
    const constex = useContext(teacherContext);
    const {data} = constex

    const handleSidebarToggle = () => {
        onSidebarToggle();
    };

    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
        navigate("/")
    }

    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                <Link className="navbar-brand ps-3" to="/home">E-LEARNING</Link>

                <button className={`btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 `} onClick={handleSidebarToggle} id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    
                </form>

                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i> {data.name} </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/home">Settings</Link></li>
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" onClick={handleLogout} >Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}
