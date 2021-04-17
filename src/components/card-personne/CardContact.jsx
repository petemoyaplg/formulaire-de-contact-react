import React, { Component } from "react";
import Avatar from "../../img/icons8-checked-user-male-80.png";
import ImgDelete from "../../img/icons8-delete-48.png";
import ImgEdit from "../../img/icons8-edit-96.png"

class CardContact extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
        this.contact = props.contact;
    }
    render () {
        return (
            <>
                <div className="div-personne">
                    <div className="info-personne">
                        <img src={this.props.photo || Avatar} alt="avater de la personne" width="70" height="70" />
                    </div>
                    <div className="info-personne">
                        <p id="prenom-nom">{`Noms : ${ this.props.prenom } ${ this.props.nom }`}</p>
                        <p id="para-groupe">Groupe : {this.props.groupe}</p>
                        <p id="para-bio">Biographie : <br />{this.props.biographie}</p>
                    </div>
                    <div className="info-personne">
                        <p title="Supprimer le contact"><img src={ImgDelete} alt="boutton supprimer" width="20" height="20" /></p>
                        <p title="Editer le contact"><img src={ImgEdit} alt="boutton editer" width="20" height="20" /></p>
                    </div>
                </div>
            </>
        );
    }
};
export default CardContact;