import { useState } from "react"
import Input from "./subComponent/Input"
import { validations } from "./ValidationRule";

function Form() {

  const [full_name,setFull_name]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [password,setPassword]=useState("");
  const [DOB,setDOB]=useState("");
  const [college,setCollege]=useState("");
  const [full_name_error,setFullNameError]=useState("");
  const [email_error,setEmail_Error]=useState("");
  const [contact_error,setContactError]=useState("");
  const [password_error,setPasswordError]=useState("");
  const [DOB_error,setDOBError]=useState("");
  const [college_error,setCollegeError]=useState("");
  const [toggleButton,setToggleButton]=useState(true);

  const checkError=()=>{
   for( const key in validations["full_name"]) {
        if(validations["full_name"][key].logic(full_name)){
            setFullNameError(validations["full_name"][key].message)
            break;
        }
        else{
            setFullNameError("");
        }
    };
    for( const key in validations["email"]) {
        if(validations["email"][key].logic(email)){
            setEmail_Error(validations["email"][key].message)
            break;
        }
        else{
            setEmail_Error("");
        }
    };
    for( const key in validations["contact"]) {
        if(validations["contact"][key].logic(contact)){
            setContactError(validations["contact"][key].message)
            break;
        }
        else{
           setContactError("");
        }
    };
    for( const key in validations["password"]) {
        if(validations["password"][key].logic(password)){
            setPasswordError(validations["password"][key].message)
            break;
        }
        else{
            setPasswordError("");
        }
    };
  }

  return (
    <div className='form_container'>
      <form action="">
        <h2 className="form_header">Create your account</h2>
        <div className='input_container'>
           <Input   field="Full name"
                    id="full_name"
                    type="text"
                    require={true}
                    value={full_name}
                    setValue={setFull_name}
                    error={full_name_error}
                    setError={setFullNameError}
                    />
            <Input   field="Email"
                    id="email"
                    type="text"
                    require={true}
                    value={email}
                    setValue={setEmail}
                    error={email_error}
                    setError={setEmail_Error}
                    />
            <Input  field="Contact"
                    id="contact"
                    type="text"
                    require={true}
                    value={contact}
                    setValue={setContact}
                    error={contact_error}
                    setError={setContactError}
                    />
            <Input  field="password"
                    id="password"
                    type="password"
                    require={true}
                    value={password}
                    setValue={setPassword}
                    error={password_error}
                    setError={setPasswordError}
                    />
            <Input  field="Date of birth"
                    id="DOB"
                    type="date"
                    require={false}
                    value={DOB}
                    setValue={setDOB}
                    error={DOB_error}
                    setError={setDOBError}
                    />
            <Input  field="College"
                    type="text"
                    id="college"
                    require={false}
                    value={college}
                    setValue={setCollege}
                    error={college_error}
                    setError={setCollegeError}
                    />
        </div>
        <button className="btn submit" onClick={(e)=>{e.preventDefault(); checkError()}}>Submit</button>
         {/* <button className="btn update">Update</button>  */}
      </form>
    </div>
  )
}


export default Form
