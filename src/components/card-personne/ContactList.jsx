import React, { Component } from "react";
import CardContact from "./CardContact";


class ContactList extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
        this.listContact = props.listContact;
        console.log( this.listContact );
    }
    render () {
        return (
            <>
                {
                    this.listContact.map( ( { prenom, nom, group, biographie } ) => {
                        return <CardContact prenom={prenom} nom={nom} group={group} biographie={biographie} />
                    } )
                }
            </>
        );
    }
}

export default ContactList;