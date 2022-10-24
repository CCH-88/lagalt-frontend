import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
 url: import.meta.env.VITE_keycloak_base_url,
 realm: import.meta.env.VITE_keycloak_realm,
 clientId: import.meta.env.VITE_keycloak_client,
 
});

export const initOptions = {
    onload:'check-sso',
    silentCheckSsoRedirectUri: import.meta.env.VITE_keycloak_frontend_url
}

