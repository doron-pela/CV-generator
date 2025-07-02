// import { useState } from 'react';
import PersonalInformation from './PersonalInformation.jsx'
import Education from './Education.jsx'
import Awards from './Awards.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Activities from './Activities.jsx'
import Skills from './Skills.jsx'
// import References from './References.jsx'

export default function Inputs(props){
    return (
        <section className='inputs'>
            <PersonalInformation updatedFieldList={props.updatedFieldList} updateFieldList={props.updateFieldList} updatePersonals={props.updatePersonals} personals={props.personals}/> {/* Equivalent to passing them individually like this => updatePersonals={updatePersonals} fullName={fullName} location={location} email={email} linkedIn={linkedIn} gitHub={gitHub}*/}
            <Education educationArray={props.educationArray} setEducationArray={props.setEducationArray} createEducation={props.createEducation} deleteEducation={props.deleteEducation} standardKeys= {props.standardEducationKeys}/>
            <Awards awardArray={props.awardArray} setAwardArray={props.setAwardArray} createAward={props.createAward} deleteAward={props.deleteAward} standardKeys= {props.standardAwardKeys}/>
            <Experience experienceArray={props.experienceArray} setExperienceArray={props.setExperienceArray} createExperience={props.createExperience} deleteExperience={props.deleteExperience} standardKeys= {props.standardExperienceKeys}/>
            <Projects projectArray={props.projectArray} setProjectArray={props.setProjectArray} createProject={props.createProject} deleteProject={props.deleteProject} standardKeys= {props.standardProjectKeys}/>    
            <Activities activityArray={props.activityArray} setActivityArray={props.setActivityArray} createActivity={props.createActivity} deleteActivity={props.deleteActivity} standardKeys= {props.standardActivityKeys}/>
            <Skills skillArray={props.skillArray} setSkillArray={props.setSkillArray} createSkill={props.createSkill} deleteSkill={props.deleteSkill} standardKeys= {props.standardSkillKeys}/>
            {/* <References /> */}
        </section>
        
    )
    
}