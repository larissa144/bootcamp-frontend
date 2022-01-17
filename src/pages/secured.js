import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useKeycloak } from '@react-keycloak/web'

function Secured () {
    const { keycloak, initialized } = useKeycloak()
    
    useEffect(() => {
        if(initialized && !keycloak.authenticated){
            console.log({keycloak})
            keycloak.login();
        }
    }, [ initialized, keycloak ]);

    if (keycloak) {
        if (keycloak.authenticated) return (
            <Navigate to="/feed" />
        ); else return (
            <div>Carregando...</div>
        )
    }
}
export default Secured;