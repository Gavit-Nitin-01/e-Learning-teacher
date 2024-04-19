import React, { useEffect, useState, version } from 'react'
import TeacherContext from './teacherContext'
import { toast } from 'react-toastify';
import { pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


export default function TeacherState(props) {
    const host = "http://localhost:4000";

    const [data, setData] = useState([]);
    const [notes, setNotes] = useState([])
    const [totalNotes, setTotalNotes] = useState([])
    const [course, setCourse] = useState([])
    const [totalCourse, setTotalCourse] = useState([])

    useEffect(() => {
        getDtatT();
        getNotes();
        getCourse();
    }, [])

    //get all data teacher using this
    const getDtatT = () => {
        fetch(`${host}/api/teacher/getteacher`, {
            method: 'post',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(data => {
            setData(data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }


    // add notes 
    const addNotes = async (title, desc, filename, image) => {
        if (title === "" || desc === "" || 10 >= desc.length || filename === "" || image === "") {
            toast.error('something wrrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        } else {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", desc);
            formData.append("file", filename);
            formData.append("image", image);

            const result = await axios.post(
                `${host}/api/notes/addnotes`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                        "auth-token": localStorage.getItem('token'),
                    },
                }
            );

            if (!result) {
                toast.error('File Not Uploaded', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            } else {
                toast.success('Note Uploaded Successfuly', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            }
            // const note = await result.json();
            // setNotes(notes.concat(note));

        }
    }




    //Add course
    const addCourse = async (name, description, image) => {
        if (name === "" || description === "" || 10 >= description.length || image === "") {
            toast.error('Something Wrrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        } else {
            const response = await fetch(
                `${host}/api/course/createcourse`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token'),
                    },
                    body: JSON.stringify({ name, description, image })
                }
            );
            const newcourse = await response.json();
            if (!course) {
                toast.error('Api not responed', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            } else {
                toast.success('Course Add Successfuly', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            }
        }

    }

    // Get all Notes for teacher own
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
        setTotalNotes(json.length);
    }


    const [courses, setCourses] = useState([])
    // Get all Course for teacher own
    const getCourse = async () => {
        // API Call 
        const response = await fetch(`${host}/api/course/fetchCourse`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const newCourse = await response.json()
        setCourses(oldCourse => [...oldCourse, newCourse])
        setCourses(course.concat(newCourse))
        setCourse(newCourse)
        setTotalCourse(newCourse.length);
    }



    // Upload Course Video 
    // const uploadVideo = async (title, desc, videos) => {
    //    let formdata = new FormData();
    //    for(let key in videos) {
    //     formdata.append("videos",videos[key]);
    //    }

    //    formdata.append("title",title);
    //    formdata.append("description",desc);

    //    axios.post(`${host}/api/course/addvideo`,formdata)
    //    .then((success) => {
    //     console.log(success)
    //     alert("submitted successfully")
    //    }).catch((error) =>{
    //     console.log(error);
    //     alert("Error happend!")
    //    })

    // }


    return (
        <TeacherContext.Provider value={{ addNotes, data, notes, totalNotes, courses, course, totalCourse, addCourse }}>
            {props.children}
        </TeacherContext.Provider>
    )
}
