import withAuth from '../hoc/withAuth'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom'

const NewProfile = () => {
	const { keycloak } = useKeycloak()
	const navigate = useNavigate()

	fetch(import.meta.env.VITE_BACKEND_URL + '/api/v1/freelancers', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${keycloak.token}`,
		},
	}).then(navigate(`/profile/${keycloak.subject}`))

	return (
		<>
			<h2 className="text-center mt-10 text-2xl ">Creating User in the Backend</h2>
		</>
	)
}

export default withAuth(NewProfile)
