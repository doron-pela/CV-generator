
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function FormSection(props){

    function handleOnChange(field, value){
        const newPersonals = {[field]: value}
        props.updatePersonals(newPersonals);
        console.log(props);
    }
    
    return(
        <>
            <div className='form-section'>
                <div className="input-container">
                    <label htmlFor="fullName">Full Name: </label>
                    <input value={props.personals.fullName} onChange={(e) => handleOnChange('fullName', e.target.value)} id='fullName' placeHolder='Doron Pela' type="text" />
                </div>

                <div className="input-container">
                    <label htmlFor="fullName">Location: </label>
                    <input value={props.personals.location} onChange={(e) => handleOnChange('location', e.target.value)} id='location' placeHolder='PMB CT 3, Cantonments, Accra, Ghana' type="text" />
                </div>

                <div className="input-container">
                    <label htmlFor="fullName">Email: </label>
                    <input value={props.personals.email} onChange={(e) => handleOnChange('email', e.target.value)} id='email' placeHolder='alepNorod@gmail.com' type="email" />
                </div>

                <div className="input-container">
                    <label htmlFor="fullName">LinkedIn: </label>
                    <input value={props.personals.linkedIn} onChange={(e) => handleOnChange('linkedIn', e.target.value)} id='linkedIn' placeHolder='doronpela@linkedIn.com' type="url" />
                </div>

                <div className="input-container">
                    <label htmlFor="fullName">Github: </label>
                    <input value={props.personals.gitHub} onChange={(e) => handleOnChange('gitHub', e.target.value)} id='gitHub' type="url" />
                </div>

                {props.updatedFieldList?
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
