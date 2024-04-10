import React from 'react'
// import AddVideo from '../AddVideo'
import { Link } from 'react-router-dom'

export default function CourseCard(props) {
    const {datac} = props
    const addVideo = (e) =>{
        console.log(" this video id is : ",e)
    }
    return (
        <>
            <div className="card mx-4 my-2" style={{width: "20rem"}}>
                <img src={datac.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <center><h5 className="card-title">{datac.name}</h5></center>
                    <p className="card-text">{datac.description} </p>
                    {/* <button className='btn mx-2 my-2' style={{background:'#3530b3',color:"white"}}>Add Video</button> */}
                    {/* <AddVideo /> */}
                    <button className='btn mx-2 my-2' onClick={()=>{addVideo(datac._id)}} style={{background:'#3530b3',color:"white"}}>Add Video</button>
                    <Link to="/videolist"><button className='btn mx-2 my-2' style={{background:'#3530b3',color:"white"}}>View Playlist</button></Link>
                </div>
            </div>
        </>
    )
}
