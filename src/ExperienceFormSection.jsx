
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function ExperienceFormSection({experienceArray, setExperienceArray, createExperience, deleteExperience, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Experience constituents
    function handleOnChange(experience, field, value){
        const newExperience = {...experience, [field]: value};    //Update constituent object
        const newExperienceArray = experienceArray.map((exp) => exp === experience? newExperience: exp) //Update its state array
        setExperienceArray(newExperienceArray);
    }

    function removeField(field, experience){
        const {[field]:_, ...newExperience} = experience;
        const newExperienceArray = experienceArray.map((exp) => exp === experience? newExperience: exp) //Update its state array
        setExperienceArray(newExperienceArray);
    }

    function addField(experience){
        const newField = prompt("Name your new field").trim();
        const newExperience = {...experience, [newField]:''};     //update constituent object
        const newExperienceArray = experienceArray.map((exp) => exp === experience? newExperience: exp) //Update its state array
        setExperienceArray(newExperienceArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createExperience}>Add new Experience Entry</button>

          {experienceArray.map((experience) => {
            return (
              <div className="form-object" key={experience.id}>
                {experience!==experienceArray[0]? <h3>New Experience Entry</h3>: null}
                
                <button onClick={() => addField(experience)}>
                        Add new field
                </button>

                {Object.keys(experience).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        <input
                          value={experience[field]}
                          onChange={(e) =>
                            handleOnChange(experience, field, e.target.value)
                          }
                          id={field}
                          placeHolder={field}
                          type="text"
                        />
                        {(!standardKeys.includes(field))?
                          <button onClick={() => removeField(field, experience)}>
                            Remove Field
                          </button>
                          : null
                        }
                      </div>
                    </div>
                  );
                })}

                {experience === experienceArray[0] ? null : (
                  <button onClick={()=>deleteExperience(experience)}>Delete Experience Entry</button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
