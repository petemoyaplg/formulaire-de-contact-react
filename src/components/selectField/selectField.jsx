const SelectField = ( props ) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} name={props.name}>
                <option value="" disabled hidden selected>--Selectionner un groupe--</option>
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