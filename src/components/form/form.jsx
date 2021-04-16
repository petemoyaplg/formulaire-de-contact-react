import React from "react";
import Button from "../button/button";
import InputField from "../input/inputField";
import SelectField from "../selectField/selectField";
import TextAreaField from "../textArea/textAreaField";
import Avatar from "../../img/icons8-checked-user-male-80.png";


class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
        this.contact = {};
        this.listContact = props.listContact;
        console.log(props.state);
        // this.getData = props.data;
        // this.setDataContact = this.setDataContact.bind( this);
    }
    afficher = (event) => {
        event.preventDefault();
        // this.listContact.push( this.contact );
        this.listContact.push( this.contact );
        console.log( this.props.state.listContact )
    }
    setDataContact = ( event ) => {
        this.contact[ event.target.name ] = event.target.value;
        // this.setState(this.state.contact[ event.target.name ] = event.target.value);
        // console.log( this.contact )
    }

    render () {
        return (
            <form onSubmit={this.afficher} onInput={this.setDataContact}>
                <InputField type="text" id="prenom" name="prenom" label="Prenom" />
                <InputField type="text" id="nom" name="nom" label="nom" />
                <SelectField id="groupe" name="group" label="Groupe" />
                <TextAreaField htmlFor="biographie" label="Biographie" id="biographie" name="biographie" cols="30" rows="3" />
                <div className="div-select-img">
                    <div>
                        <input type="file" name="choisir un fichier" id="choix-photo" accept=".jpg,.png" />
                    </div>
                    <div className="div-photo">
                        <img src={Avatar} alt="" width="100" height="100" />
                    </div>
                </div>
                <div className="div-btn">
                    <Button type="submit" label="Créer" className="btn" id="btn-creer-contact" />
                    <Button type="reset" label="Réinit" className="btn" id="btn-reinit" />
                </div>
            </form>
        );
    }
};
export default Form;