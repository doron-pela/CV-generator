import { useState } from "react";
import AddButton from './AddButton.jsx' 
import SkillFormSection from './SkillFormSection.jsx'
export default function Skill(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='skills'>
            <h1>Skills</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every project object in the state's award array belonging to app.jsx */}
            {isClicked? <SkillFormSection {...props}/> : null}
        </div>
    )
}