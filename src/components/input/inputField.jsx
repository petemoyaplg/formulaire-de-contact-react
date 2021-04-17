const InputField = ( props ) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} onChange={props.handleChange} value={props.value} />
        </>
    );
};
export default InputField;