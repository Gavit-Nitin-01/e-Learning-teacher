
export default function TableData(props) {
    const {data} = props
  return (
    <>
            <tr>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
            </tr>
        </>
  )
}
