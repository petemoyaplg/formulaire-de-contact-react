// import DIvPersonne from "./components/div-personne/div-personne";
import React, { Component } from "react";
// import CardContact from "./components/card-ersonne/CardContact";
import Form from "./components/form/form";
import Avatar from "./img/icons8-checked-user-male-80.png";


import "./css/style.css";
// import ContactList from "./components/card-personne/ContactList";
import CardContact from "./components/card-personne/CardContact";

// const App = () => {

// };
class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            contact: {
                prenom: '',
                nom: '',
                groupe: '',
                biographie: '',
                photo: Avatar
            },
            listContact: [

            ]
        }
    }

    handleChange = ( event ) => {
        // this.state.contact[ event.target.name ] = event.target.value;
        this.setState( {
            contact: { ...this.state.contact, [ event.target.name ]: event.target.value }
        } );
        // console.log( `${event.target.name} = ${event.target.value}` );
        console.log( this.state.contact )
    }
    addContact = ( evt ) => {
        evt.preventDefault();
        this.setState( { listContact: [ ...this.state.listContact, this.state.contact ] } );
        this.setState( {
            contact: {
                prenom: '',
                nom: '',
                groupe: '',
                biographie: '',
                photo: ''
            }
        } )
    }

    render () {
        console.log( this.state.listContact );
        return (
            <>
                <div className="container">
                    <div className="entete1">
                        <h1 className="text">Répertoire de contact</h1>
                    </div>
                    <div className="col">
                        <div className="row1">
                            <div className="entete">
                                <h2 className="text">Formulaire de contact</h2>
                            </div>
                            <Form onSubmit={this.addContact} contact={this.state.contact} handleChange={this.handleChange} />
                        </div>
                        <div className="row2">
                            <div className="entete">
                                <h2 className="text">Liste de contact</h2>
                            </div>
                            <div className="corp">
                                {/* <ContactList listContact={this.state.listContact} /> */}
                                {
                                    this.state.listContact.map( ( { prenom, nom, groupe, biographie, photo } ) => {
                                        return <CardContact prenom={prenom} nom={nom} groupe={groupe} biographie={biographie} photo={photo} />
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default App;