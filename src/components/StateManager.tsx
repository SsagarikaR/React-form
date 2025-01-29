import { createContext, useContext, useState } from "react";
import { forStudent,forFormData, forContextValue } from "./Interface";

const stateContext=createContext<forContextValue|undefined>(undefined);

export default function StateProvider ({children}:{children:React.ReactNode}){

    const [students,setStudents]=useState<forStudent>({});
    const [editingId,setEditingId]=useState<string|null>(null);
    console.log(students,"state");

    const addStudent = (data: forFormData) => {
        const newStudentId = Object.keys(students).length.toString();
        setStudents((prev) => ({ ...prev, [newStudentId]: data }));
    };
    
    const editStudent=(id:string)=>{
        setEditingId(id);
    }

    const updateStudent = (id: string, data: forFormData) => {
        setStudents((prev) => ({ ...prev, [id]: data }));
        setEditingId(null);
    };
    
    const deleteStudent = (id: string) => {
        setStudents((prev) => {
            const newStudents = { ...prev };
            delete newStudents[id];
            return newStudents;
        });
    };
    return (
    <stateContext.Provider value={{students,editingId,editStudent,addStudent,updateStudent,deleteStudent}}>
        {children}
    </stateContext.Provider>)
}

export const useStateContext=()=>{
    const context=useContext(stateContext);
    if(!context) console.log("Error In Context");
    return context;
}

// const useStateContext=()=>useContext(stateContext);
// export {useStateContext};