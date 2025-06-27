export default function AddButton({onClick, formStatus}){
    return(
        <button onClick={onClick}>{formStatus? 'Remove':'Add'} Form</button>
    )
}
