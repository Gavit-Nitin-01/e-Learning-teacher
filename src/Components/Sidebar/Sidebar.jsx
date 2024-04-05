
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
export default function Sidebar({ isSidebarToggled }) {

    useEffect(() => {
        if (isSidebarToggled) {
            document.body.classList.add('sb-sidenav-toggled');
        } else {
            document.body.classList.remove('sb-sidenav-toggled');
        }
    }, [isSidebarToggled]);
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark nav-open" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    
                    <Link className="nav-link" to="/home">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    
                    <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-user"></i></div>
                        Accounts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/noteslist">Notes</Link>
                            <Link className="nav-link" to="/teachert">Course</Link>
                            <Link className="nav-link" to="/studentt">Playlist</Link>
                        </nav>
                    </div>
                    <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-user"></i></div>
                        Accounts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admint">Admin</Link>
                            <Link className="nav-link" to="/teachert">Teacher's</Link>
                            <Link className="nav-link" to="/studentt">Students</Link>
                        </nav>
                    </div>
                  
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Authentication
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" href="/login">Login</Link>
                                    <Link className="nav-link" to="/singup">Register</Link>
                                    <Link className="nav-link" href="">Forgot Password</Link>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="">401 Page</a>
                                    <a className="nav-link" href="">404 Page</a>
                                    <a className="nav-link" href="">500 Page</a>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    <div className="sb-sidenav-menu-heading"> <i className="fa-solid fa-graduation-cap"></i> My activity </div>
                    <Link className="nav-link" to="/upldnotes">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-book-open"></i></div>
                        Books
                    </Link>
                    <Link className="nav-link" to="/home">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-layer-group"></i></div>
                        Course
                    </Link>
                    <Link className="nav-link" to="/upldvideo">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-video"></i></div>
                        Videos
                    </Link>
                    <a className="nav-link" href="#">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-book-open-reader"></i></div>
                        Assignment
                    </a>
                    <a className="nav-link" href="#">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-brain"></i></div>
                       Quiz Assignment
                    </a>
                    <a className="nav-link" href="#">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-question"></i></div>
                       Question
                    </a>
                    <a className="nav-link" href="#">
                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                       Material
                    </a>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in Teacher:</div>
               E-Learning
            </div>
        </nav>
    )
}
