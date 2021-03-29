import { createContext, useReducer } from "react";
import studentReducer from "../reducers/studentReducer";


const initialstudents = [
  { name: "Suleman", level: "400", date: "21/09/18", indexNo: "0900074" },
  { name: "Ginger", level: "100", date: "02/04/19", indexNo: "0900086" },
  { name: "Nanjo", level: "300", date: "21/08/20", indexNo: "0900078" },
  { name: "Asiya", level: "400", date: "01/09/21", indexNo: "090008" },
];

export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
    const [students, dispatch] = useReducer(studentReducer, initialstudents);
    return(
        <StudentsContext.Provider value={{ students, dispatch }}>
            {children}
        </StudentsContext.Provider>)
    
}
export default StudentsContextProvider;
