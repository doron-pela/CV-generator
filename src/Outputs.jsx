export default function Outputs(props){

    return(
        <section className="outputs">
            <section className="personal-info-output">
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
            </section>
            <br />

            <section className="education-output">
                {props.educationArray.map((education) => {
                        return (
                            <div key={education.id}>
                                {education.institution && education===props.educationArray[0]? (<h1>EDUCATION</h1>) : null}
                                <h4>{education.institution.toUpperCase()}</h4>
                                <p>
                                    {education.location
                                        ? education.location + ","
                                        : null}{" "}
                                    <br />
                                    {education.degree
                                        ? education.degree + ","
                                        : null}{" "}
                                    <br />
                                    {education.acquisitionDate
                                        ? education.acquisitionDate + ", "
                                        : null}
                                </p>
                            </div>
                        );
                    }
                )}

            </section>
            <br />

            <section className="award-output">
                {props.awardArray.map((award) => {
                        return (
                            <div key={award.id}>
                                {award.award && award===props.awardArray[0]? (<h1>AWARDS</h1>) : null}
                                <h4>{award.grantor.toUpperCase()}</h4>
                                <p>
                                    {award.award
                                        ? award.award + ","
                                        : null}{" "}
                                    <br />
                                    {award.grantor
                                        ? award.grantor + ","
                                        : null}{" "}
                                    <br />
                                    {award.date
                                        ? award.date + ", "
                                        : null}
                                </p>
                            </div>
                        );
                    }
                )}

            </section>
            <br />
        </section>
    )
}