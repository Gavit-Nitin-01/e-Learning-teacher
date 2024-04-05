
export default function TableData(props) {
    const {data} = props
  return (
    <>
            <tr>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td><img src={data.image} className="themes" alt="image"/></td>
                <td>{data.pdf}</td>
            </tr>
        </>
  )
}
