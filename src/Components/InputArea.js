import React, {useState} from 'react'

const InputArea = (props) => {
    const [InputText, setInputText] = useState("");
    const handleChange=(event)=>{
        setInputText(event.target.value)
    };
    return (
        <div className="form">
             <input type="text" onChange={handleChange} value={InputText}/> 
             <button onClick={()=>{
                 if(InputText!==""){
                 props.additems(InputText);
                 setInputText("");
                 }
             }}>
                 <span>Add</span>
             </button>            
        </div>
    );
}

export default InputArea
