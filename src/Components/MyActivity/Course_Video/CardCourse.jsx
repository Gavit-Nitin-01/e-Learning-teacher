import React from 'react'
import AddVideo from './AddVideo'

export default function CardCourse(props) {
    const {datac} = props
    return (
        <>
            <div className="card mx-4 my-2" style={{width: "20rem"}}>
                <img src={datac.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <center><h5 className="card-title">{datac.name}</h5></center>
                    <p className="card-text">{datac.description} </p>
                    {/* <button className='btn mx-2 my-2' style={{background:'#3530b3',color:"white"}}>Add Video</button> */}
                    <AddVideo/>
                    <button className='btn mx-2 my-2' style={{background:'#3530b3',color:"white"}}>View Playlist</button>
                </div>
            </div>
        </>
    )
}
