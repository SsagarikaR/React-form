import { useStateContext } from "./StateManager";

function Table() {
  const {students,deleteStudent,editStudent} = useStateContext()??{};

  return (
    <div className='table_container'>
      <table className='main_table'>
        <thead>
            <tr>
                <th>Full name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {students &&
            Object.keys(students).map((key) => (
                <tr key={key}>
                  <td>{students[key].full_name}</td>
                  <td>{students[key].email}</td>
                  <td>{students[key].contact}</td>
                  <td>
                    <i className="fa fa-pencil-square-o edit" aria-hidden="true"  onClick={(e)=>{e.preventDefault(); if(editStudent){ editStudent(key)}}}></i>
                    <i className="fa fa-trash delete" aria-hidden="true" onClick={(e)=>{e.preventDefault(); if(deleteStudent){ deleteStudent(key)}}}></i>
                  </td>
                </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
