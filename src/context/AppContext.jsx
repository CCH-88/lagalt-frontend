import UserProvider from "./UserContext";
import ProjectProvider from "./ProfileContext";

const AppContext = (props) => {
  return (
    <UserProvider>        
      {props.children}
    </UserProvider>
  );
};
export default AppContext;
