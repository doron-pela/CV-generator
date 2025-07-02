import { useState } from "react";
import AddButton from './AddButton.jsx' 
import ExperienceFormSection from './ExperienceFormSection.jsx'
export default function Experience(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='experience'>
            <h1>Experiences</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every award object in the state's award array belonging to app.jsx */}
            {isClicked? <ExperienceFormSection {...props}/> : null}
        </div>
    )
}