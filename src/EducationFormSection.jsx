
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function EducationFormSection(props){
    

    function handleOnChange(field, value){
        const newEducation = {[field]: value}
        props.updateEducation(newEducation);
        console.log(props);
    }

    return(
        <>
            <div className='form-section'>
                <div className="input-container">
                    <label htmlFor="institution">Institution: </label>
                    <input value={props.education.institution} onChange={(e) => handleOnChange('institution', e.target.value)} id='institution' placeHolder='Ashesi University' type="text" />
                </div>

                <div className="input-container">
                    <label htmlFor="location">Location: </label>
                    <input value={props.education.location} onChange={(e) => handleOnChange('location', e.target.value)} id='location' placeHolder='PMB CT 3, Cantonments, Accra, Ghana' type="text" />
                </div>

                <div className="input-container">
                    <label htmlFor="degree">Degree: </label>
                    <input value={props.education.degree} onChange={(e) => handleOnChange('degree', e.target.value)} id='email' placeHolder='Computer Science' type="text" />
                </div>

                <div className="input-container">
                    <label htmlFor="acquisitionDate">LinkedIn: </label>
                    <input value={props.education.acquisitionDate} onChange={(e) => handleOnChange('acquisitionDate', e.target.value)} id='acquisitionDate' placeHolder='Date' type="date" />
                </div>

                {props.updatedFieldList ?
                    props.updatedFieldList.map((field) => {
                        return (
                            <div key={field + 'id'}>
                                <div className="input-container">
                                    <label htmlFor={field}>{field}: </label>
                                    <input onChange={(e) => handleOnChange(`${field}`, e.target.value)} id={field} placeHolder={field} type="text" />
                                    <RemoveFieldButton onClick={()=>props.updateFieldList(field)} />
                                </div>
                            </div>
                        );
                    })
                    : null}
            </div>
            <AddFieldButton onClick={()=>props.updateFieldList()} />
        </>
    )
}
