
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function EducationFormSection({educationArray, setEducationArray, createEducation, deleteEducation, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Education constituents
    function handleOnChange(education, field, value){
        const newEducation = {...education, [field]: value};    //Update constituent object
        const newEducationArray = educationArray.map((edu) => edu === education? newEducation: edu) //Update its state array
        setEducationArray(newEducationArray);
    }

    function removeField(field, education){
        const {[field]:_, ...newEducation} = education;
        const newEducationArray = educationArray.map((edu) => edu === education? newEducation: edu) //Update its state array
        setEducationArray(newEducationArray);
    }

    function addField(education){
        const newField = prompt("Name your new field").trim();
        const newEducation = {...education, [newField]:''};     //update constituent object
        const newEducationArray = educationArray.map((edu) => edu === education? newEducation: edu) //Update its state array
        setEducationArray(newEducationArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createEducation}>Add new Education Entry</button>

          {educationArray.map((education, i) => {
            return (
              <div className="form-object" key={education.id}>
                {education !== educationArray[0] ? (
                  <h3>Education Entry {i + 1}</h3>
                ) : null}

                <button onClick={() => addField(education)}>
                  Add new field
                </button>

                {Object.keys(education).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        <input
                          value={education[field]}
                          onChange={(e) =>
                            handleOnChange(education, field, e.target.value)
                          }
                          id={field}
                          placeHolder={field}
                          type="text"
                        />
                        {!standardKeys.includes(field) ? (
                          <button onClick={() => removeField(field, education)}>
                            Remove Field
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                {education === educationArray[0] ? null : (
                  <button onClick={() => deleteEducation(education)}>
                    Delete Education Entry
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
