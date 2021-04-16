const Button = ( props ) => {
    return (
        <button onClick={props.onClick} type={props.type} id={props.id} className={props.className}>{props.label}</button>
    );
};
export default Button;
