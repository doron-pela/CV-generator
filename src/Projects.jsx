import { useState } from "react";
import AddButton from './AddButton.jsx' 
import ProjectFormSection from './ProjectFormSection.jsx'
export default function Project(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='projects'>
            <h1>Projects</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every project object in the state's award array belonging to app.jsx */}
            {isClicked? <ProjectFormSection {...props}/> : null}
        </div>
    )
}