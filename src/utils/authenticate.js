import Cookies from 'js-cookie';

const authenticate = (keycloak, setIsAuth) => {
    const { token, refreshToken } = keycloak;
    Cookies.set('authentication', JSON.stringify({ token, refreshToken }));
    setIsAuth(JSON.stringify({ token, refreshToken }));
};

const isAuthenticated = () => {
    return Cookies.get('authentication');
};

export { authenticate, isAuthenticated }