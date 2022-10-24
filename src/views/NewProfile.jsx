import withAuth from "../hoc/withAuth";
import { useKeycloak } from "@react-keycloak/web";


const NewProfile = () => {
  const { keycloak } = useKeycloak()


  return (

  <>
    {keycloak.subject}
  </>
  )

}

export default withAuth(NewProfile)
