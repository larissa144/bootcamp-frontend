import Keycloak from 'keycloak-js';
import jsonObhect from './keycloak.json';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(jsonObhect);

export default keycloak;