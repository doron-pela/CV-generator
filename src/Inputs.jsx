// import { useState } from 'react';
import PersonalInformation from './PersonalInformation.jsx'
import Education from './Education.jsx'
// import Experience from './Experience.jsx'
// import Projects from './Projects.jsx'
// import Skills from './Skills.jsx'
// import References from './References.jsx'

export default function Inputs(props){
    return (
        <section className='inputs'>
            <PersonalInformation updatedFieldList={props.updatedFieldList} updateFieldList={props.updateFieldList} updatePersonals={props.updatePersonals} personals={props.personals}/> {/* Equivalent to passing them individually like this => updatePersonals={updatePersonals} fullName={fullName} location={location} email={email} linkedIn={linkedIn} gitHub={gitHub}*/}
            <Education updateEducation={props.updateEducation} education={props.education} updateFieldList={props.updateEducationFieldList} updatedFieldList={props.updatedEducationFieldList} />
            {/* <Experience />
            <Projects />    
            <Activities/>
            <Skills />
            <References /> */}
        </section>
        
    )
    
}