
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Inputs from './Inputs.jsx'
import Outputs from './Outputs.jsx'

function App() {
  //Personal Information data
  const [personals, setPersonals] = useState({
        fullName: '',
        location: '',
        email: '',
        linkedIn: '', 
        gitHub: ''
  });

  const [updatedPIFieldList, setPIList] = useState([]);

  function updatePIFieldList(field){
    let newField = null;
    if(field){
      setPIList((updatedPIFieldList)=>
        updatedPIFieldList.filter((value)=>field!==value)
      )
      setPersonals((personals)=>{
        const {[field]:_, ...rest} = personals; //Destructuring means - take out by the key. In arrays, means - take out by the position.
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

  const lastChild = personals.gitHub;

  //Education data

  const [education, setEducation] = useState({
    institution: '',
    degree: '',
    location:  '',
    acquisitionDate: '',
  });

  function updateEducation(newEducation){
    setEducation(
      {...education, ...newEducation}
    )
  }

  const [updatedEducationFieldList, setEducationList] = useState([]);

  function updateEducationFieldList(field){
    let newField = null;
    if(field){
      setEducationList((updatedEducationFieldList)=>
          updatedEducationFieldList.filter((value)=>value!==field)
      )  
      setEducation((education)=>{
        const {[field]: _, ...newEducation} = education; //We can use filter to mutate state arrays, and selective destructuring to mutate state objects
         //An Object is really just k:v PAIRS. There must always be a key and a value. Therefore, the computed property needs a value and _ literally (a variable name) allowed by linters to represent useless variables we don't need.
        return newEducation;
      })
    }else{
      newField = prompt('Enter field name').toString().trim();
      setEducationList((updatedEducationFieldList)=>
        [...updatedEducationFieldList, newField]
      )  
      setEducation(
        {...education, [newField]:' '}
      )
    }
    
  }

  if(education){
    console.log("Edu State lifting successful");
    console.log(education);
  }

  console.log(updatedPIFieldList);

  return (
    <main>
      {/*Props are just object key-value pairs. I can pass them down by spreading in any object. Here, personals object is a state value*/}
      <Inputs updatedFieldList={updatedPIFieldList} updateFieldList={updatePIFieldList} updatePersonals={updatePersonals} personals={personals} 
              updateEducation={updateEducation} education={education} updatedEducationFieldList={updatedEducationFieldList} updateEducationFieldList={updateEducationFieldList}
      />
      <Outputs updatedFieldList={updatedPIFieldList} personals={personals}
                education={education} updatedEducationFieldList={updatedEducationFieldList}
      >
        {lastChild}
      </Outputs>
    </main>
  )
}

export default App
