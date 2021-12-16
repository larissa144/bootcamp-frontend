import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak("https://raw.githubusercontent.com/larissa144/bootcamp-frontend/main/public/keycloak.json");

export default keycloak;