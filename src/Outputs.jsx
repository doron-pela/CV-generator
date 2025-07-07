import References from './References.jsx'
import { useState } from "react";

export default function Outputs(props){
    
    const [isClicked, setClick] = useState(false);

    return(
        <section className="outputs">
            <section className="personal-info-output">
                <div className="section">
                    {props.personals.fullName? <button className='print-button' onClick={()=>window.print()}>Print</button>: null}
                    <h1>{props.personals.fullName.toUpperCase()}</h1>
                    <p>
                        {props.personals.location? props.personals.location+',':null} <br />
                        {props.personals.email? props.personals.email+',':null} <br />
                        {props.personals.linkedIn? props.personals.linkedIn+', ':null}
                        {(!props.updatedFieldList[0]? props.personals[props.standardPIKeys[props.standardPIKeys.length-1]] : props.personals[props.standardPIKeys[props.standardPIKeys.length-1]]+', ')}
                        {props.updatedFieldList.map((field)=>{
                                return (<span key={field+'id'}>{(field === props.updatedFieldList[props.updatedFieldList.length-1]?  props.personals[field]+'': props.personals[field]+', ')}</span>)
                            })}
                        {/* {props.children} */}
                    </p>
                </div>
            </section>

            <section className="education-output">
                {props.educationArray.map((education) => {
                        return (
                            <div className='section' key={education.id}>
                                {education.institution && education===props.educationArray[0]? (<><h3 className="heading">EDUCATION</h3><hr /></>) : null}
                                <p className="heading-line-1"><p className="bold">{education.institution}</p> <p className="bold">{education.location? education.location + "" : null}</p></p>
                                <p className="heading-line-2"><p className="bold">{education.degree? education.degree + "": null}</p> <p className="bold">{education.date ? `Expected date of Graduation:  ${education.date}` + " ": null}</p> </p>
                            </div>
                        );
                    }
                )}
            </section>

            <section className="award-output">
                {props.awardArray.map((award) => {
                        return (
                            <div className='section' key={award.id}>
                                {award.award && (award.grantor && award===props.awardArray[0])? (<><h3 className="heading">ACHIEVEMENTS/AWARDS</h3><hr /></>) : null}
                                <p className="heading-line-1"><p><p className="bold">{award.award? award.award+", ":null}</p> <span className='unbolded'>{award.grantor}</span></p> <p className="bold">{award.date ? award.date: null}</p></p>
                            </div>
                        );
                    }
                )}

            </section>
            
            <section className="experience-output">
                {props.experienceArray.map((experience) => {
                        return (
                            <div className='section' key={experience.id}>
                                {(experience.establishment || experience.role) && experience===props.experienceArray[0]? (<><h3 className="heading">WORK EXPERIENCE</h3><hr /></>) : null}
                                <p className="heading-line-1"><p className="bold">{experience.establishment? experience.establishment+" — ": null}<span className="unbolded">{experience.location? experience.location + "" : null}</span></p> <p className="bold">{experience.date ? experience.date + " ": null}</p></p>
                                <p className="heading-line-2"><p className="bold">{experience.role? experience.role + "": null}</p> </p>
                                <ul>
                                    {experience.task_1? (<p>
                                        <li>{experience.task_1}</li>
                                    </p>): null}
                                    {Object.keys(experience).filter((key)=>(!props.standardExperienceKeys.includes(key)))
                                        .map((newlyAdded)=><p>
                                            <li>{experience[newlyAdded]}</li>
                                        </p>)}
                                </ul>
                            </div>
                        );
                    }
                )}
            </section>

            <section className="project-output">
                {props.projectArray.map((project) => {
                        return (
                            <div className='section' key={project.id}>
                                {(project.title || project.role) && project===props.projectArray[0]? (<><h3 className="heading">PROJECTS</h3><hr /></>) : null}
                                <p className="heading-line-1"><p className="bold">{project.title? project.title+""||" — ": null}{project.location? project.location + "" : null}</p> <p className="bold">{project.date ? project.date + " ": null}</p></p>
                                <p className="heading-line-2"><p className="bold">{project.role? project.role + "": null}</p> </p>
                                <ul>
                                    {project.task_1? (<p>
                                        <li>{project.task_1}</li>
                                    </p>): null}
                                    {Object.keys(project).filter((key)=>(!props.standardProjectKeys.includes(key)))
                                        .map((newlyAdded)=><p>
                                            <li>{project[newlyAdded]}</li>
                                        </p>)}
                                </ul>
                            </div>
                        );
                    }
                )}
            </section>

            <section className="activity-output">
                {props.activityArray.map((activity) => {
                        return (
                            <div className='section' key={activity.id}>
                                {(activity.title || activity.entry) && activity===props.activityArray[0]? (<><h3 className="heading">CO-CURRICULAR ACTIVITIES</h3><hr /></>) : null}
                                <p className="heading-line-1"><p className="bold">{activity.title? activity.title+""||" — ": null}{activity.location? activity.location + "" : null}</p> <p className="bold">{activity.date ? activity.date + " ": null}</p></p>
                                <p className="heading-line-2"><p className="bold">{activity.entry? activity.entry + "": null}</p> </p>
                                <ul>
                                    {activity.task_1? (<p>
                                        <li>{activity.task_1}</li>
                                    </p>): null}
                                    {Object.keys(activity).filter((key)=>(!props.standardActivityKeys.includes(key)))
                                        .map((newlyAdded)=><p>
                                            <li>{activity[newlyAdded]}</li>
                                        </p>)}
                                </ul>
                            </div>
                        );
                    }
                )}
            </section>

            <section className="skill-output">
                {props.skillArray.map((skill) => {
                        return (
                            <div className='section' key={skill.id}>
                                {(skill.title || skill.entry) && skill===props.skillArray[0]? (<><h3 className="heading">SKILLS</h3><hr /></>) : null}
                                <ul>
                                    {(skill.title || skill.entry)? (<li> <p className="bold">{skill.title? skill.title+": " : null}{skill.entry? skill.entry: null}</p></li>): null}
                                    {Object.keys(skill).filter((key)=>(!props.standardActivityKeys.includes(key)))
                                        .map((newlyAdded)=><p>
                                            <li>{skill[newlyAdded]}</li>
                                        </p>)}
                                </ul>
                            </div>
                        );
                    }
                )}
            </section>

            {isClicked ? <References /> : null}
            {props.personals.email? (<button onClick={()=>setClick(!isClicked)}> {isClicked? "Remove Reference section":"Add Reference section"} </button>) : null}
        </section>
    )
}