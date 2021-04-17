const TextAreaField = ( props ) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} name={props.name} cols={props.cols} rows={props.rows} value={props.biographie} onChange={props.handleChange}></textarea>
        </>
    );
};

export default TextAreaField;