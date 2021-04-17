const SelectField = ( props ) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} name={props.name} onChange={props.handleChange} value={props.groupe}>
                <option value="" hidden>--Selectionner un groupe--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
            </select>
        </>
    );
};

export default SelectField;