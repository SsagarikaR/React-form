export interface InputProps {
    field: string;
    id: string;
    type: string;
    require: boolean;
    value: string;
    setValue: (value:string)=>void;
    error: string;
    setError: (value:string)=>void;
}

export interface forFormData{
    full_name: string,
    email: string;
    contact: string;
    password: string;
    DOB: string;
    college: string;
}

export interface forStudent{
    [key:string]:Partial<forFormData>
}

export interface forContextValue {
    students: forStudent;
    editingId: string|null;
    editStudent: (id:string)=>void;
    addStudent: (data: forFormData) => void;
    updateStudent: (id: string, data: forFormData) => void;
    deleteStudent: (id: string) => void;
}
  