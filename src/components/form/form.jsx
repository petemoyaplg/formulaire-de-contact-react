import React, { Component } from "react";
import Button from "../button/button";
import InputField from "../input/inputField";
import SelectField from "../selectField/selectField";
import TextAreaField from "../textArea/textAreaField";
// import Avatar from "../../img/icons8-checked-user-male-80.png";


class Form extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
        this.contact = props.contact;
    }
    changeImage = ( event ) => {
        const file = this.files[ 0 ];
        alert( 'You' )
        if ( file ) {
            const reader = new FileReader();
            reader.addEventListener( 'load', function () {
                // this.contact.photo = this.result;
                document.querySelector( '.div-photo img' ).setAttribute( 'src', this.result );
                // th.setAttribute( 'src', this.result );

                // itemPhoto = URL.createObjectURL( file );
            } );
            reader.readAsDataURL( file );
        }
        else {
            // photoChoisie.setAttribute( 'src', ' ' );
            // photoChoisie.setAttribute( 'alt', 'Accune Image Sélectionné' );
        }
    }

    render () {
        return (
            <form onSubmit={this.props.onSubmit}>
                <InputField type="text" id="prenom" name="prenom" label="Prenom" handleChange={this.props.handleChange} value={this.props.contact.prenom} />
                <InputField type="text" id="nom" name="nom" label="nom" handleChange={this.props.handleChange} value={this.props.contact.nom} />
                <SelectField id="groupe" name="groupe" label="Groupe" handleChange={this.props.handleChange} value={this.props.contact.groupe} />
                <TextAreaField htmlFor="biographie" label="Biographie" id="biographie" name="biographie" cols="30" rows="3" handleChange={this.props.handleChange} value={this.props.contact.biographie} />
                <div className="div-select-img">
                    <div>
                        <input type="file" name="hoix-photo" id="choix-photo" accept=".jpg,.png" handleChange={this.changeImage} />
                    </div>
                    <div className="div-photo">
                        <img src={this.props.contact.photo} width="100" height="100" alt="avatar" name="photo" handleChange={this.props.handleChange} />
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