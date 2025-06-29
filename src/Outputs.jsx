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
                    {props.updatedFieldList.map((field)=>{
                            return (<span key={field+'id'}>{props.personals[field]+', '}</span>)
                        })}
                    {props.children}
                </p>
            </section>
            <br />

            <section className="education-output">
                {props.education.institution?<h1>EDUCATION</h1>: null}
                <h4>{props.education.institution.toUpperCase()}</h4>
                <p>
                    {props.education.location? props.education.location+',':null} <br />
                    {props.education.degree? props.education.degree+',':null} <br />
                    {props.education.acquisitionDate? props.education.acquisitionDate+', ':null}
                    {props.updatedEducationFieldList.map((field)=>{
                            return (<span key={field+'id'}>{props.education[field]+', '}</span>)
                        })}
                </p>
            </section>
            <br />
        </section>
    )
}