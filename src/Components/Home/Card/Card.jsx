import React, { useContext } from 'react'
import './Card.css'
import teacherContext from '../../../context/teacherContext'
import { Link } from 'react-router-dom';
export default function Card() {
    const context = useContext(teacherContext)
    const { totalNotes, totalCourse } = context;
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
                        <Link to='/addcourse' className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Total Uploaded Course  👉  {totalCourse}
                            </div>
                        </Link>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                                Total Uploaded Tutorials 👉  {totalCourse}
                            </div>
                        </a>
                    </div>



                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                               Assignment
                            </div>
                        </a>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg">
                            </div>
                            <div className="ag-courses-item_title">
                               Quiz Assignment
                            </div>
                        </a>
                    </div>

                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>

                            <div className="ag-courses-item_title">
                              Questions
                            </div>

                            
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
