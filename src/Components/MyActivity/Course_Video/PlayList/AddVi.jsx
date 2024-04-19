import React, { useContext, useState } from 'react'
import teacherContext from '../../../../context/teacherContext'
import { Input, Label } from 'reactstrap';  
import axios from "axios";

export default function AddVi() {
    const context = useContext(teacherContext);
    const {courses} = context;

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [videos, setVideos] = useState([]);
    const [courseid,setCourseId] = useState()
    const submitVideo = (e) => {
        e.preventDefault();
       
        let formdata = new FormData();
        for (let key in videos) {
          formdata.append("videos", videos[key]);
        }
    
        formdata.append("name", title);
        formdata.append("description",desc);
        formdata.append("course",courseid);
    
        axios.post(`http://localhost:4000/api/media/create`, formdata,)
          .then((success) => {
            console.log(success)
            alert("Submitted successfully");
          })
          .catch((error) => {
            console.log(error);
            alert("Error happened!");
          }); 
    };

    return (
        <>
            <div className='container-flud mx-4 my-4 border'>


                <form onSubmit={submitVideo}>
                    <div className="col-md-12">
                        <label>title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                        
                    </div>
                    <div className="col-md-12">
                        <label>desc</label>
                        <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
                        
                    </div>
                   


                    <div className="col-md-12">
                        <label>video</label>
                        <input className="form-control " id="videos"  onChange={(e) => { setVideos(e.target.files) }} type="file" name='videos' multiple accept=".mp4,.mkv" />
                        
                    </div>
                    <div className="col-md-12">
                        <Label for="category" >Post Category</Label>
                        <Input
                            type="select"
                            id="category"
                            placeholder="Enter here"
                            className="rounded-0"
                            name="couseid"
                            onChange={(e) => { setCourseId(e.target.value) }}

                        >


                            <option disabled value={0}>--Select category--</option>
                            {

                                courses.map((courses) => (
                                    <option value={courses._id} key={courses._id} >
                                        {courses.name}
                                    </option>
                                ))

                            }


                        </Input>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </>
    )
}
