
export default function NotesData(props) {
  const { datan } = props
  const showpdf = (pdf) => {
    window.open(`http://localhost:4000/Notes-file/${pdf}`)
  }
  return (
    <>
      <tr>
        <td>{datan.title}</td>
        <td>{datan.description}</td>
        <td><img src={datan.image} style={{ height: "100px", width: "120px" }} alt="image" /></td>
        <td>
          <button className="btn" onClick={() => showpdf(datan.pdf)}><i class="fa-solid fa-arrow-up-right-from-square fa-xl" onClick={() => showpdf(datan.pdf)} style={{ color: "#0b3b8e", cursor: "pointer" }}></i></button>
          <button className="btn"><i class="fa-solid fa-trash fa-fade fa-xl" style={{ color: "#e30202", cursor: "pointer" }}></i></button>
        </td>
      </tr>
    </>
  )
}
