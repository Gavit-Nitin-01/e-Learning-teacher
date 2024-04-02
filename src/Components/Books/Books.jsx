import axios from 'axios';
import React, { useState } from 'react'
import { pdfjs } from 'react-pdf';
import { toast } from 'react-toastify';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Books() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDes] = useState("");

    const convetToBase64 = (e) => {
        console.log(e);
        let render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = () => {
            // console.log(render.result)
            setImage(render.result);
        }
        render.onerror = error => {
            // console.log("Error", error)
            toast.success('Image is Not a File', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
            });
        }

    }

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", desc);
        formData.append("file", file);
        formData.append("image", image)
        // console.log(title, file,image);


        const result = await axios.post(
            "http://localhost:4000/api/notes/addnotes",
            formData,
            {
                method: "POST",
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
    };
    return (
        <>
            <div className="App">
                <form className="formStyle" onSubmit={submitImage}>
                    <h4>Upload Pdf in React</h4>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <input
                        type="file"
                        className="form-control"
                        accept="application/pdf"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <br />
                    <input type="file" accept='image/*' onChange={convetToBase64} />
                    <br />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        required
                        onChange={(e) => setDes(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                    <br />

                </form>

            </div>
        </>
    )
}
