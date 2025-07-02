
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function AwardFormSection({awardArray, setAwardArray, createAward, deleteAward, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Award constituents
    function handleOnChange(award, field, value){
        const newAward = {...award, [field]: value};    //Update constituent object
        const newAwardArray = awardArray.map((awa) => awa === award? newAward: awa) //Update its state array
        setAwardArray(newAwardArray);
    }

    function removeField(field, award){
        const {[field]:_, ...newAward} = award;
        const newAwardArray = awardArray.map((awa) => awa === award? newAward: awa) //Update its state array
        setAwardArray(newAwardArray);
    }

    function addField(award){
        const newField = prompt("Name your new field").trim();
        const newAward = {...award, [newField]:''};     //update constituent object
        const newAwardArray = awardArray.map((awa) => awa === award? newAward: awa) //Update its state array
        setAwardArray(newAwardArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createAward}>Add new Award Entry</button>

          {awardArray.map((award) => {
            return (
              <div className="form-object" key={award.id}>
                {award!==awardArray[0]? <h3>New Award Entry</h3>: null}
                
                <button onClick={() => addField(award)}>
                        Add new field
                </button>

                {Object.keys(award).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        <input
                          value={award[field]}
                          onChange={(e) =>
                            handleOnChange(award, field, e.target.value)
                          }
                          id={field}
                          placeHolder={field}
                          type="text"
                        />
                        {(!standardKeys.includes(field))?
                          <button onClick={() => removeField(field, award)}>
                            Remove Field
                          </button>
                          : null
                        }
                      </div>
                    </div>
                  );
                })}

                {award === awardArray[0] ? null : (
                  <button onClick={()=>deleteAward(award)}>Delete Award Entry</button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
