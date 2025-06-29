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
            {isClicked? <EducationFormSection {...props}/> : null} 

            {/* Create add Education form button which should add another education object (empty by default) to the education list in the app.jsx. Then the form objects in the list
                                                                                                                                                    are basically passed down as props to the corresponding 
                                                                                                                                                    Education Form section, while also sending back the 
                                                                                                                                                    new Education object back to the right position in the 
                                                                                                                                                    state array on every change. */}
        </div>
    )
}