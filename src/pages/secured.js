import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import Ongs from '../components/ongs/Ongs'
class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required', checkLoginIframe: false}).then(authenticated => {
     this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <>
          <Ongs keycloak={this.state.keycloak}/>
        </>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
     <>
      <Ongs/>
    </>
    );
  }
}
export default Secured;