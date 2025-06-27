import { useState } from "react"
import AddFieldButton from './AddFieldButton.jsx'
export default function FormSection(){
    const [updatedFieldList, setList] = useState([]);
    // const [field, setField] = useState('');

    
    function updateFieldList(){
        const newField = prompt('Enter field name').toString();
        // setField(newField);
        setList((updatedFieldList)=>
            [...updatedFieldList, newField]
        )
    }

    console.log(updatedFieldList);

    return(
        <div>
            <label htmlFor="fullName">Full Name: </label>
            <input id= 'fullName' placeHolder='Doron Pela' type="text" />

            <label htmlFor="fullName">Location: </label>
            <input id= 'location' placeHolder='PMB CT 3, Cantonments, Accra, Ghana' type="text" />

            <label htmlFor="fullName">Email: </label>
            <input id= 'email' placeHolder='alepNorod@gmail.com' type="text" />

            <label htmlFor="fullName">LinkedIn: </label>
            <input id= 'linkedIn' placeHolder='doronpela@linkedIn.com' type="text" />

            <label htmlFor="fullName">Github: </label>
            <input id= 'gitHub' type="text" />

            {updatedFieldList? 
                updatedFieldList.map((field)=>{
                    return(
                        <div key={field+'id'}>
                            <label htmlFor={field}>{field}: </label>
                            <input id= {field} placeHolder={field} type="text" /> 
                        </div>
                    )
                })
                : null
            }

            <AddFieldButton onClick={updateFieldList}/>
        </div>
    )
}
