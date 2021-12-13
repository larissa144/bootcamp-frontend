import Cookies from 'js-cookie';
import Keycloak from 'keycloak-js';

const authenticate = (keycloak, setIsAuth) => {
    const { token, refreshToken, tokenParsed } = keycloak;
    Cookies.set('authentication', JSON.stringify({ token, refreshToken, tokenParsed }));
    console.log({keycloak})
    setIsAuth(JSON.stringify({ token, refreshToken }));
};

const isAuthenticated = () => {
    return Cookies.get('authentication');
};

const getAuthData = () => {
    return JSON.parse(Cookies.get('authentication')); 
}

const logout = () => {
    Cookies.remove('authentication');
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init().then(authenticated => {
        keycloak.logout({ redirectUri : "http://localhost:8000/" });
    });
}

export { authenticate, isAuthenticated, getAuthData, logout }