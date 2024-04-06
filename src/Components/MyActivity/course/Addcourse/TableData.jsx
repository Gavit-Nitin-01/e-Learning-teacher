
export default function TableData(props) {
    const {data} = props
  return (
    <>
            <tr>
                <td>{data.Course_Id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
            </tr>
        </>
  )
}
