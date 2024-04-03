import React from 'react'
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
    // const teacherInitial = []


    const addNotes = async (title, desc, file, image) => {

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
    return (
        <TeacherContext.Provider value={{ addNotes }}>
            {props.children}
        </TeacherContext.Provider>
    )
}
