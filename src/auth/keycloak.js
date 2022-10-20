import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: import.meta.env.VITE_keycloak_base_url,
 realm: import.meta.env.VITE_keycloak_realm,
 clientId: import.meta.env.VITE_keycloak_client,
});

keycloak.updateToken(25).then( (refreshed)=> {
    if(refreshed) {
      alert("Token refresh succesful")
    }
    else {
      throw new Error("Error updating token")
    }
  }).
 catch ((error) => {
  // TODO better this
  alert(error)  
} )
export default keycloak;

