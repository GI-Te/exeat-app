import { useContext } from "react";
import { StudentsContext } from "./StudentsContext";

function Students() {
  const { students, dispatch } = useContext(StudentsContext);

  return (
    <div className="container">
      {students.map((student) => (
        <div className="card" >
          <div>
            <h1>{student.name}</h1>
            <h1>{student.level}</h1>
            <h1>{student.date}</h1>
          </div>

          <button
            onClick={() =>
              dispatch({ type: "delete", indexNo: student.indexNo })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Students;
