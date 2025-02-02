import { useEffect, useState } from "react";
import Input from "./subComponent/Input";
import { validations } from "./ValidationRule";
import { forFormData } from "./Interface";
import { useStateContext } from "./StateManager";

function Form({onSubmit}:{onSubmit:(message:string)=>void}) {

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [college, setCollege] = useState("");
  const [full_name_error, setFullNameError] = useState("");
  const [email_error, setEmail_Error] = useState("");
  const [contact_error, setContactError] = useState("");
  const [password_error, setPasswordError] = useState("");
  const [DOB_error, setDOBError] = useState("");
  const [college_error, setCollegeError] = useState("");
  const { students, addStudent, editingId, updateStudent } = useStateContext() ?? {};

  const inputField=[
    {
      id:"full_name",
      field:"full_name",
      type:"text",
      require:true,
      value:full_name,
      setValue:setFull_name,
      error:full_name_error,
      setError:setFullNameError
    },
    {
      id:"email",
      field:"email",
      type:"text",
      require:true,
      value:email,
      setValue:setEmail,
      error:email_error,
      setError:setEmail_Error
    },
    {
      id:"contact",
      field:"contact",
      type:"text",
      require:true,
      value:contact,
      setValue:setContact,
      error:contact_error,
      setError:setContactError
    },
    {
      id:"password",
      field:"password",
      type:"password",
      require:true,
      value:password,
      setValue:setPassword,
      error:password_error,
      setError:setPasswordError
    },
    {
      id:"DOB",
      field:"Date of birth",
      type:"date",
      require:false,
      value:DOB,
      setValue:setDOB,
      error:DOB_error,
      setError:setDOBError
    },
    {
      id:"college",
      field:"college",
      type:"text",
      require:false,
      value:college,
      setValue:setCollege,
      error:college_error,
      setError:setCollegeError
    }
  ]

  const formData: forFormData = {
    full_name: full_name,
    email: email,
    contact: contact,
    password: password,
    DOB: DOB,
    college: college,
  };

  // console.log(formData);
  useEffect(() => {
    if (students && editingId !== null && editingId !== undefined) {
      const ediStudent = students[editingId];
      if (ediStudent.full_name) setFull_name(ediStudent.full_name);
      if (ediStudent.email) setEmail(ediStudent.email);
      if (ediStudent.contact) setContact(ediStudent.contact);
      if (ediStudent.password) setPassword(ediStudent.password);
      if (ediStudent.DOB) setDOB(ediStudent.DOB);
      if (ediStudent.college) setCollege(ediStudent.college);
    }
  }, [editingId, students]);

  const submit = () => {
    const isSubmit=checkError()
    // console.log(isSubmit)
    if (isSubmit && updateStudent && editingId) {
      updateStudent(editingId, formData);
      onSubmit("Successfully updated")
      makeFieldEmpty();
      
    }
    else if (isSubmit && addStudent) {
      addStudent(formData);
      onSubmit("Successfully submitted")
      makeFieldEmpty();
    }
    
  };

  const makeFieldEmpty =()=>{
    setFull_name("");
    setContact("");
    setEmail("");
    setPassword("");
    setDOB("");
    setCollege("");
  }

  const checkError = ():boolean => {
    let isValid=true;
    for (const key in validations["full_name"]) {
      if (validations["full_name"][key].logic(full_name)) {
        setFullNameError(validations["full_name"][key].message);
        isValid=false;
        break;
      } else {
        setFullNameError("");
      }
    }
    for (const key in validations["email"]) {
      if (validations["email"][key].logic(email)) {
        setEmail_Error(validations["email"][key].message);
        isValid=false;
        break;
      } else {
        setEmail_Error("");
      }
    }
    for (const key in validations["contact"]) {
      if (validations["contact"][key].logic(contact)) {
        setContactError(validations["contact"][key].message);
        isValid=false;
        break;
      } else {
        setContactError("");
      }
    }
    for (const key in validations["password"]) {
      if (validations["password"][key].logic(password)) {
        setPasswordError(validations["password"][key].message);
        isValid=false;
        break;
      } else {
        setPasswordError("");
      }
    }
    return isValid;
  };

  return (
    <div className="form_container">
      <form action="">
        <h2 className="form_header">Create your account</h2>
        <div className="input_container">
          {inputField.map((input)=>{
            return <Input
                      field={input.field}
                      id={input.id}
                      type={input.type}
                      require={input.require}
                      value={input.value}
                      setValue={input.setValue}
                      error={input.error}
                      setError={input.setError}
                    />
          })}
        </div>
        <button className="btn submit"
          onClick={(e) => {
            e.preventDefault();
            checkError();
            submit();
          }}
        >
         {editingId !== null && editingId !== undefined ? `Update` : `Submit`}
        </button>
      </form>
    </div>
  );
}

export default Form;
