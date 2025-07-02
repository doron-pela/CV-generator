import { useState } from "react";
import AddButton from './AddButton.jsx' 
import EducationFormSection from './EducationFormSection.jsx'
export default function Education(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='education'>
            <h1>Education</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every education object in the state's education list belonging to app.jsx */}
            {isClicked? <EducationFormSection {...props}/> : null}
        </div>
    )
}