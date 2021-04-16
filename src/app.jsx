import React from "react";
import Form from "./components/form/form";
// import Avatar from "./img/icons8-checked-user-male-80.png";


import "./css/style.css";

// const App = () => {

// };
class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            contacts: []
        }
    }
    // componentDidUpdate ( prevProps, prevState ) {
    //     console.log( prevState );
    // }
    // componentDidMount = () => {
    //     console.log( this.state );
    // }

    render () {
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
                            {/* <Form listContact={this.state.listContact} /> */}
                            <Form listContact={this.state.listContact} />
                        </div>
                        <div className="row2">
                            <div className="entete">
                                <h2 className="text">Liste de contact</h2>
                            </div>
                            <div className="corp">
                                {/* <div class="div-personne">
                                    <div className="info-personne">
                                        <img src={Avatar} alt="Photo de la personne" width="70"
                                            height="70" />
                                    </div>
                                    <div className="info-personne">
                                        <p id="prenom-nom">Prénom Nom</p>
                                        <p id="para-groupe">Groupe</p>
                                        <p id="para-bio">
                                            hchchchgvfjguyjkgfujtfcyhdctrgtcrfc
                                            kujgyjgvyujgvujgvfujfvutftfctyfcy
                                            hgchtfcfhcfhcfh
                                        </p>
                                    </div>
                                    <div class="info-personne">
                                        <p>X</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default App;