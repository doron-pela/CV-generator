
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function ActivityFormSection({activityArray, setActivityArray, createActivity, deleteActivity, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Activity constituents
    function handleOnChange(activity, field, value){
        const newActivity = {...activity, [field]: value};    //Update constituent object
        const newActivityArray = activityArray.map((pro) => pro === activity? newActivity: pro) //Update its state array
        setActivityArray(newActivityArray);
    }

    function removeField(field, activity){
        const {[field]:_, ...newActivity} = activity;
        const newActivityArray = activityArray.map((pro) => pro === activity? newActivity: pro) //Update its state array
        setActivityArray(newActivityArray);
    }

    function addField(activity){
        const newField = prompt("Name your new field").trim();
        const newActivity = {...activity, [newField]:''};     //update constituent object
        const newActivityArray = activityArray.map((pro) => pro === activity? newActivity: pro) //Update its state array
        setActivityArray(newActivityArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createActivity}>Add new Activity</button>

          {activityArray.map((activity, i) => {
            return (
              <div className="form-object" key={activity.id}>
                {activity !== activityArray[0] ? (
                  <h3>Activity Entry {i + 1}</h3>
                ) : null}

                <button onClick={() => addField(activity)}>
                  Add new field
                </button>

                {Object.keys(activity).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        {field === standardKeys[standardKeys.length - 1] ||
                        !standardKeys.includes(field) ? (
                          <textarea
                            value={activity[field]}
                            onChange={(e) =>
                              handleOnChange(activity, field, e.target.value)
                            }
                            id={field}
                            placeHolder={field}
                            type="text"
                          />
                        ) : (
                          <input
                            value={activity[field]}
                            onChange={(e) =>
                              handleOnChange(activity, field, e.target.value)
                            }
                            id={field}
                            placeHolder={field}
                            type="text"
                          />
                        )}
                        {!standardKeys.includes(field) ? (
                          <button
                            onClick={() => removeField(field, activity)}
                          >
                            X
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                {activity === activityArray[0] ? null : (
                  <button onClick={() => deleteActivity(activity)}>
                    Delete Activity Entry
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
