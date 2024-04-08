
export default function CourseData(props) {
    const {datac} = props
  return (
    <>
            <tr>
                <td>{datac.name}</td>
                <td>{datac.description}</td>
                <td><img src={datac.image} style={{height: "100px",width: "120px"}} alt="image"/></td>
                <td>
                  <button className="btn" style={{background:"#1c2785",color:"white"}} >View</button>
                  <button className="btn btn-info mx-2"  >Edit</button>
                  <button className="btn btn-danger mx-2"  >Delete</button>
                  </td>
            </tr>
        </>
  )
}
