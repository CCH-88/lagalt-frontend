import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: import.meta.env.VITE_keycloak_base_url,
 realm: import.meta.env.VITE_keycloak_realm,
 clientId: import.meta.env.VITE_keycloak_client,
});

/* keycloak.updateToken(5)
    .then(function(refreshed) {
        if (refreshed) {
            alert('Token was successfully refreshed');
        } else {
            alert('Token is still valid');
        }
    }).catch(function() {
        alert('Failed to refresh the token, or the session has expired');
    }); */
export default keycloak;

