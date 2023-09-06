

function TableRow(props){

    return (
        props.records.map((student, index) => {
            return <tr key={index}>
                <td>{student.name}</td>
                <td>{student.location}</td>
                </tr>
        })
    );
}

export default TableRow