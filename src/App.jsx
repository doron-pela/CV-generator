import { useState } from 'react'
import './App.css'
import Inputs from './Inputs.jsx'
import Outputs from './Outputs.jsx'

function App() {
  /*PERSONAL INFORMATION SECTION*/

  //PI object data
  const standardPIKeys = [
    "fullName",
    "location",
    "email",
    "linkedIn",
    "gitHub",
  ];
  const [personals, setPersonals] = useState({
    fullName: "",
    location: "",
    email: "",
    linkedIn: "",
    gitHub: "",
  });

  //PI field list data (as array)
  const [updatedPIFieldList, setPIList] = useState([]);

  function updatePIFieldList(field) {
    let newField = null;
    if (field) {
      setPIList(
        (updatedPIFieldList) =>
          updatedPIFieldList.filter((value) => field !== value) //Here, through the filter method, I filter out the unwanted field from the rest of the personal information field list
      );
      setPersonals((personals) => {
        const { [field]: _, ...rest } = personals; //Here, through destructuring, I filter out the unwanted field from the rest of the personals object. Destructuring means - take out by the key. In arrays, means - take out by the position.
        return rest;
      });
    } else {
      newField = prompt("Enter field name").toString().trim();
      setPIList((updatedPIFieldList) => [...updatedPIFieldList, newField]);
      setPersonals({ ...personals, [newField]: " " });
    }
  }

  function updatePersonals(newPersonals) {
    setPersonals({ ...personals, ...newPersonals });
  }

  if (personals) {
    console.log("State lifting successful");
    console.log(personals);
  }


  /*EDUCATION SECTION*/

  //Education Template Section
  const standardEducationKeys = [
    "id",
    "institution",
    "degree",
    "location",
    "date",
  ];
  const standardEducationObject = {
    id: crypto.randomUUID(),
    institution: "",
    degree: "",
    location: "",
    date: "",
  };

  //Education State section
  const [educationArray, setEducationArray] = useState([
    standardEducationObject,
  ]);

  //Education CD section (Create, Delete)
  function createEducation() {
    setEducationArray((educationArray) => [
      ...educationArray,
      standardEducationObject,
    ]);
  }
  function deleteEducation(education) {
    setEducationArray(educationArray.filter((edu) => edu !== education));
  }

  //ACHIEVEMENTS SECTION
  const standardAwardKeys = ["id", "award", "grantor", "date"];
  const standardAwardObject = {
    id: crypto.randomUUID(),
    award: "",
    grantor: "",
    date: "",
  };

  //Award state Section
  const [awardArray, setAwardArray] = useState([standardAwardObject]);

  //Award CD section (Create, Delete)
  function createAward() {
    setAwardArray((awardArray) => [
      ...awardArray,
      standardAwardObject,
    ]);
  }
  function deleteAward(award) {
    setAwardArray(awardArray.filter((awa) => awa !== award));
  }

  //EXPERIENCE SECTION
  const standardExperienceKeys = ["id", "establishment", "location", "role", "date", "task1"];
  const standardExperienceObject = {
    id: crypto.randomUUID(),
    establishment: "",
    location: "",
    role: "",
    date: "",
    task1: ""
  };

  //Experience state Section
  const [experienceArray, setExperienceArray] = useState([standardExperienceObject]);

  //Experience CD section (Create, Delete)
  function createExperience() {
    setExperienceArray((experienceArray) => [...experienceArray, standardExperienceObject]);
  }
  function deleteExperience(experience) {
    setExperienceArray(experienceArray.filter((exp) => exp !== experience));
  }

  //PROJECTS SECTION
  const standardProjectKeys = ["id", "title", "role", "date", "task1"];
  const standardProjectObject = {
    id: crypto.randomUUID(),
    title: "",
    role: "",
    date: "",
    task1: ""
  };

  //Project state Section
  const [projectArray, setProjectArray] = useState([standardProjectObject]);

  //Project CD section (Create, Delete)
  function createProject() {
    setProjectArray((projectArray) => [...projectArray, standardProjectObject]);
  }
  function deleteProject(project) {
    setProjectArray(projectArray.filter((pro) => pro !== project));
  }

  //ACTIVITIES SECTION
  const standardActivityKeys = ["id", "title", "date", "entry", "task1"];
  const standardActivityObject = {
    id: crypto.randomUUID(),
    title: "",
    date: "",
    entry: "",
    task1: "",
  };

  //Activity state Section
  const [activityArray, setActivityArray] = useState([standardActivityObject]);

  //Activity CD section (Create, Delete)
  function createActivity() {
    setActivityArray((activityArray) => [...activityArray, standardActivityObject]);
  }
  function deleteActivity(activity) {
    setActivityArray(activityArray.filter((act) => act !== activity));
  }



  //SKILLS SECTION
  const standardSkillKeys = ["id", "title",  "entry"];
  const standardSkillObject = {
    id: crypto.randomUUID(),
    title: "",
    entry: ""
  };

  //Skill state Section
  const [skillArray, setSkillArray] = useState([standardSkillObject]);

  //Skill CD section (Create, Delete)
  function createSkill() {
    setSkillArray((skillArray) => [...skillArray, standardSkillObject]);
  }
  function deleteSkill(skill) {
    setSkillArray(skillArray.filter((ski) => ski !== skill));
  }

  ///REFERENCES SECTION
  

  return (
    <main>
      {/*Props are just object key-value pairs. I can pass them down by spreading in any object. Here, personals object is a state value*/}
      <Inputs
        updatedFieldList={updatedPIFieldList}
        updateFieldList={updatePIFieldList}
        updatePersonals={updatePersonals}
        personals={personals}

        educationArray={educationArray}
        setEducationArray={setEducationArray}
        createEducation={createEducation}
        deleteEducation={deleteEducation}
        standardEducationKeys={standardEducationKeys}

        awardArray={awardArray}
        setAwardArray={setAwardArray}
        createAward={createAward}
        deleteAward={deleteAward}
        standardAwardKeys={standardAwardKeys}

        experienceArray={experienceArray}
        setExperienceArray={setExperienceArray}
        createExperience={createExperience}
        deleteExperience={deleteExperience}
        standardExperienceKeys={standardExperienceKeys}

        projectArray={projectArray}
        setProjectArray={setProjectArray}
        createProject={createProject}
        deleteProject={deleteProject}
        standardProjectKeys={standardProjectKeys}

        activityArray={activityArray}
        setActivityArray={setActivityArray}
        createActivity={createActivity}
        deleteActivity={deleteActivity}
        standardActivityKeys={standardActivityKeys}

        skillArray={skillArray}
        setSkillArray={setSkillArray}
        createSkill={createSkill}
        deleteSkill={deleteSkill}
        standardSkillKeys={standardSkillKeys}

      />
      <Outputs
        updatedFieldList={updatedPIFieldList}
        personals={personals}
        standardPIKeys={standardPIKeys}

        educationArray={educationArray}
        standardEducationKeys={standardEducationKeys}

        awardArray={awardArray}
        standardAwardKeys={standardAwardKeys}

        experienceArray={experienceArray}
        standardExperienceKeys={standardExperienceKeys}

        projectArray={projectArray}
        standardProjectKeys={standardProjectKeys}

        activityArray={activityArray}
        standardActivityKeys={standardActivityKeys}

        skillArray={skillArray}
        standardSkillKeys={standardSkillKeys}

        // referenceArray={referenceArray}
        // standardReferenceKeys={standardReferenceKeys}
      >
      </Outputs>
    </main>
  );
}

export default App
