
import AddFieldButton from './AddFieldButton.jsx'
import RemoveFieldButton from './RemoveFieldButton.jsx'
export default function ProjectFormSection({projectArray, setProjectArray, createProject, deleteProject, standardKeys}){

    //Helper functions
    function toTitleCase(str) {
        return str
          .toLowerCase()
          .replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
      }
    
    //Project constituents
    function handleOnChange(project, field, value){
        const newProject = {...project, [field]: value};    //Update constituent object
        const newProjectArray = projectArray.map((pro) => pro === project? newProject: pro) //Update its state array
        setProjectArray(newProjectArray);
    }

    function removeField(field, project){
        const {[field]:_, ...newProject} = project;
        const newProjectArray = projectArray.map((pro) => pro === project? newProject: pro) //Update its state array
        setProjectArray(newProjectArray);
    }

    function addField(project){
        const newField = prompt("Name your new field").trim();
        const newProject = {...project, [newField]:''};     //update constituent object
        const newProjectArray = projectArray.map((pro) => pro === project? newProject: pro) //Update its state array
        setProjectArray(newProjectArray);
    }

    return (
      <>
        <div className="form-section">
          <button onClick={createProject}>Add new Project Entry</button>

          {projectArray.map((project, i) => {
            return (
              <div className="form-object" key={project.id}>
                {project !== projectArray[0] ? (
                  <h3>Project Entry {i + 1}</h3>
                ) : null}

                <button onClick={() => addField(project)}>
                  Add new field
                </button>

                {Object.keys(project).map((field) => {
                  return field === "id" ? null : (
                    <div key={field}>
                      <div className="input-container">
                        <label htmlFor={field}>{toTitleCase(field)}: </label>
                        <input
                          value={project[field]}
                          onChange={(e) =>
                            handleOnChange(project, field, e.target.value)
                          }
                          id={field}
                          placeHolder={field}
                          type="text"
                        />
                        {!standardKeys.includes(field) ? (
                          <button onClick={() => removeField(field, project)}>
                            Remove Field
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                {project === projectArray[0] ? null : (
                  <button onClick={() => deleteProject(project)}>
                    Delete Project Entry
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
}
