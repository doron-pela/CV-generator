import { useState } from "react";
import AddButton from './AddButton.jsx' 
import FormSection from './FormSection.jsx'
export default function PersonalInformation(){
    const [isClicked, setClick] = useState(false);
    const [personals, setPersonals] = useState({
        fullName: '',
        location: '',
        email: '',
        linkedIn: '', 
        gitHub: ''
    });

    function updatePersonals(newPersonals){
        setPersonals(
            {...personals, ...newPersonals}
        )
    }

    return(
        <div className='personal-information'>
            <h1>Personal Information</h1>
            <AddButton formStatus={isClicked} onClick = {()=>setClick(!isClicked)}/>
            {isClicked? <FormSection updatePersonals={updatePersonals} fullName={personals.fullName} location={personals.location} email={personals.email} linkedIn={personals.linkedIn} gitHub={personals.gitHub}/> : null}
        </div>
    )
}