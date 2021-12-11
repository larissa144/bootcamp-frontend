import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import Ongs from '../components/ongs/Ongs'
import { authenticate } from '../utils/authenticate'
import { Navigate } from 'react-router';
class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required', checkLoginIframe: false}).then(authenticated => {
     this.setState({ keycloak: keycloak, authenticated: authenticated })
     authenticate(keycloak, this.props.setIsAuth);
    })
}

render() {
    if (this.state.keycloak) {
        if (this.state.authenticated) return (
          <Navigate to="/feed" />
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
     <div>
         Carregando
     </div>
    );
  }
}
export default Secured;