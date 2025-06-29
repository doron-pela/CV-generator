import { useState } from "react";
import AddButton from './AddButton.jsx' 
import FormSection from './FormSection.jsx'
export default function PersonalInformation(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='personal-information'>
            <h1>Personal Information</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {isClicked? <FormSection {...props}/> : null}
        </div>
    )
}