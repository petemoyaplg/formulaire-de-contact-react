const TextAreaField = ( props ) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} name={props.name} cols={props.cols} rows={props.rows}></textarea>
        </>
    );
};
export default TextAreaField;