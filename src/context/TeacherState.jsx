import React, { useEffect, useState } from 'react'
import TeacherContext from './teacherContext'
import { toast } from 'react-toastify';
import { pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


export default function TeacherState(props) {
    const host = "http://localhost:4000"

    const [data, setData] = useState([]);
    const [notes, setNotes] = useState([])
    const [totalNotes, setTotalNotes] = useState([])

    useEffect(() => {
        getDtatT();
        getNotes();
    }, [])


    // add notes 
    const addNotes = async (title, desc, file, image, _id) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", desc);
        formData.append("file", file);
        formData.append("image", image);

        const result = await axios.post(
            `${host}/api/notes/addnotes`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                    "auth-token": localStorage.getItem('token')

                },
            });

        if (!result) {
            toast.error('File Not Uploaded', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        } else {
            toast.success('Note Uploaded Successfuly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        }

    }


    //get all data teacher using this

    const getDtatT = () => {

        fetch(`${host}/api/teacher/getteacher`, {
            method: 'post',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }

    // Get all Notes
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

    return (
        <TeacherContext.Provider value={{ addNotes, data , notes ,totalNotes}}>
            {props.children}
        </TeacherContext.Provider>
    )
}
