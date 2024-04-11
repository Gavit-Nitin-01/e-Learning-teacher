
export default function CourseData(props) {
    const {datac} = props
  return (
    <>
            <tr>
                <td>{datac.name}</td>
                <td>{datac.description}</td>
                <td><img src={datac.image} style={{height: "100px",width: "120px"}} alt="image"/></td>
                <td>
                  <button className="btn"><i class="fa-regular fa-eye fa-fade fa-xl" style={{color: "#136086"}}></i></button>
                  <button className="btn"><i class="fa-solid fa-pen-to-square fa-xl" style={{color: "#101593"}}></i></button>
                  <button className="btn"><i class="fa-solid fa-trash fa-fade fa-xl" style={{color: "#e30202"}}></i></button> 
                  </td>
            </tr>
        </>
  )
}
