
export default function NotesData(props) {
    const {datan} = props
    const showpdf=(pdf) =>{
      window.open(`http://localhost:4000/Notes-file/${pdf}`)
    }
  return (
    <>
            <tr>
                <td>{datan.title}</td>
                <td>{datan.description}</td>
                <td><img src={datan.image} style={{height: "100px",width: "120px"}} alt="image"/></td>
                <td>{datan.pdf}</td>
                <td>
                  <button className="btn" style={{background:"#1c2785",color:"white"}} onClick={()=>showpdf(datan.pdf)}>View</button>
                  <button className="btn btn-info mx-2"  >Edit</button>
                  <button className="btn btn-danger mx-2"  >Delete</button>
                  </td>
            </tr>
        </>
  )
}
