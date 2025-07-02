import { useState } from 'react'
import './App.css'
import Inputs from './Inputs.jsx'
import Outputs from './Outputs.jsx'

function App() {
  /*Personal Information data Section*/

  //PI object data
  const standardPIKeys = ['fullName', 'location', 'email', 'linkedIn', 'gitHub'];
  const [personals, setPersonals] = useState({
        fullName: '',
        location: '',
        email: '',
        linkedIn: '', 
        gitHub: ''
  });

  //PI field list data (as array)
  const [updatedPIFieldList, setPIList] = useState([]);

  function updatePIFieldList(field){
    let newField = null;
    if(field){
      setPIList((updatedPIFieldList)=>
        updatedPIFieldList.filter((value)=>field!==value) //Here, through the filter method, I filter out the unwanted field from the rest of the personal information field list
      )
      setPersonals((personals)=>{
        const {[field]:_, ...rest} = personals; //Here, through destructuring, I filter out the unwanted field from the rest of the personals object. Destructuring means - take out by the key. In arrays, means - take out by the position.
        return rest;
      })
    }else{
      newField = prompt('Enter field name').toString().trim();
      setPIList((updatedPIFieldList)=>
          [...updatedPIFieldList, newField]
      )  
      setPersonals(
        {...personals, [newField]:' '}
      )
    }
  }

  function updatePersonals(newPersonals){
      setPersonals(
          {...personals, ...newPersonals}
      )
  }

  if(personals){
    console.log("State lifting successful");
    console.log(personals);
  }

  const lastChild = personals.gitHub; //Last text node to prevent a comma from being at the end

  /*Education data*/

  //Education Template Section
  const standardEducationKeys = ['id', 'institution', 'degree', 'location', 'date'];
  const standardEducationObject = {
    id: crypto.randomUUID(),
    institution: "",
    degree: "",
    location: "",
    date: "",
  };

  //Education State section
  const [educationArray, setEducationArray] = useState([standardEducationObject]);

  //Education CRUD section
  function createEducation(){
    setEducationArray((educationArray) => [...educationArray, standardEducationObject]);
  }
  function deleteEducation(education){
    setEducationArray(educationArray.filter((edu)=>edu !== education));
  }

  return (
    <main>
      {/*Props are just object key-value pairs. I can pass them down by spreading in any object. Here, personals object is a state value*/}
      <Inputs updatedFieldList={updatedPIFieldList} updateFieldList={updatePIFieldList} updatePersonals={updatePersonals} personals={personals} 
              educationArray={educationArray} setEducationArray={setEducationArray} createEducation={createEducation} deleteEducation={deleteEducation} standardEducationKeys={standardEducationKeys}
      />
      <Outputs updatedFieldList={updatedPIFieldList} personals={personals} standardPIKeys={standardPIKeys}
                educationArray={educationArray} standardEducationKeys={standardEducationKeys}
      >
        {lastChild}
      </Outputs>
    </main>
  )
}

export default App
