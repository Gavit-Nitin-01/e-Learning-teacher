import React, { useContext } from 'react'
import './Card.css'
import teacherContext from '../../../context/teacherContext'
import { Link } from 'react-router-dom';
export default function Card() {
    const context = useContext(teacherContext)
    const {totalNotes} = context;
    return (
        <>
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    <div className="ag-courses_item">
                        <Link to="/noteslist" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Total Notes Uploaded  👉  {totalNotes}
                            </div>
                            
                        </Link>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                UX/UI Web-Design&#160;+ Mobile Design
                            </div>

                            <div className="ag-courses-item_date-box">
                                Start:
                                <span className="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Annual package "Product+UX/UI+Graph designer&#160;2022"
                            </div>

                            <div className="ag-courses-item_date-box">
                                Start:
                                <span className="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </a>
                    </div>

                    

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Front-end development&#160;+ jQuery&#160;+ CMS
                            </div>
                        </a>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg">
                            </div>
                            <div className="ag-courses-item_title">
                                Digital Marketing
                            </div>
                        </a>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Interior Design
                            </div>

                            <div className="ag-courses-item_date-box">
                                Start:
                                <span className="ag-courses-item_date">
                                    31.10.2022
                                </span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
