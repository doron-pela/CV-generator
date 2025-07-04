export default function AddButton({onClick, formStatus}){
    return(
        <button onClick={onClick}>{formStatus? 'Remove all Entries':'Add Entry'}</button>
    )
}
