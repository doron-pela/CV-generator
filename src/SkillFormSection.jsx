
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function SkillFormSection({skillArray, setSkillArray, createSkill, deleteSkill, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Skill constituents
    function handleOnChange(skill, field, value){
        const newSkill = {...skill, [field]: value};    //Update constituent object
        const newSkillArray = skillArray.map((ski) => ski === skill? newSkill: ski) //Update its state array
        setSkillArray(newSkillArray);
    }

    function removeField(field, skill){
        const {[field]:_, ...newSkill} = skill;
        const newSkillArray = skillArray.map((ski) => ski === skill? newSkill: ski) //Update its state array
        setSkillArray(newSkillArray);
    }

    function addField(skill){
        const newField = prompt("Name your new field").trim();
        const newSkill = {...skill, [newField]:''};     //update constituent object
        const newSkillArray = skillArray.map((ski) => ski === skill? newSkill: ski) //Update its state array
        setSkillArray(newSkillArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createSkill}>Add new Skill Entry</button>

          {skillArray.map((skill, i) => {
            return (
              <div className="form-object" key={skill.id}>
                {skill !== skillArray[0] ? (
                  <h3>Skill Entry {i + 1}</h3>
                ) : null}

                <button onClick={() => addField(skill)}>
                  Add new field
                </button>

                {Object.keys(skill).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        <input
                          value={skill[field]}
                          onChange={(e) =>
                            handleOnChange(skill, field, e.target.value)
                          }
                          id={field}
                          placeHolder={field}
                          type="text"
                        />
                        {!standardKeys.includes(field) ? (
                          <button onClick={() => removeField(field, skill)}>
                            Remove Field
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                {skill === skillArray[0] ? null : (
                  <button onClick={() => deleteSkill(skill)}>
                    Delete Skill Entry
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
