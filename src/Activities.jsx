import { useState } from "react";
import AddButton from './AddButton.jsx' 
import ActivityFormSection from './ActivityFormSection.jsx'
export default function Activity(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='activities'>
            <h1>Activities</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every project object in the state's activity array belonging to app.jsx */}
            {isClicked? <ActivityFormSection {...props}/> : null}
        </div>
    )
}