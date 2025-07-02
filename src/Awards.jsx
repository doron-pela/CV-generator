import { useState } from "react";
import AddButton from './AddButton.jsx' 
import AwardFormSection from './AwardFormSection.jsx'
export default function Award(props){
    const [isClicked, setClick] = useState(false);

    return(
        <div className='awards'>
            <h1>Awards</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {/* Rendering needs to occur for every award object in the state's award array belonging to app.jsx */}
            {isClicked? <AwardFormSection {...props}/> : null}
        </div>
    )
}