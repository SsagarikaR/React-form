import { InputProps } from "../Interface";
import { validations } from "../ValidationRule";


function Input({field,id,type,require,value,setValue,error,setError}:InputProps) {   
    
    function checkError(value:string,id:string){
       for( const key in validations[id]) {
            if(validations[id][key].logic(value)){
                setError(validations[id][key].message)
                break;
            }
            else{
                setError("");
            }
        };
    }
  return (
    <div className='input_div'>
        <label htmlFor={id} >{field}: {require && <span className="require-span">*</span>}</label>
        <input list={id === "college" ? "College" : undefined} className={`input_box ${require ? "required" :" " }`} type={type} id={id} value={value} onChange={(e)=>{setValue(e.target.value); checkError(e.target.value,id);}}/>
        {id==="college" &&
            <datalist id="College"  >
                <option value="DRIEMS">DRIEMS</option>
                <option value="Silicon">Silicon</option>
                <option value="KIIT">KIIT</option>
                <option value="IIIT">IIIT</option>
                <option value="IIT">IIT</option>
                <option value="ITER">ITER</option>
            </datalist>
        }
        <div className="error">{error}</div>
    </div>
  )
}

export default Input
