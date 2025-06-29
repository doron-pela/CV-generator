import { useState } from "react";
import AddEducationButton from './AddButton.jsx' 
import EducationFormSection from './EducationFormSection.jsx'
export default function Education(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='education'>
            <h1>Education</h1>
            <AddEducationButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {isClicked? <EducationFormSection {...props}/> : null}
        </div>
    )
}