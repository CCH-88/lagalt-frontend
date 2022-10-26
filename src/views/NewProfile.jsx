import withAuth from '../hoc/withAuth'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NewProfile = () => {
	const { keycloak, initialized } = useKeycloak()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	async function createUser() {
		setLoading(true)
		
		try {
			const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/v1/freelancers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${keycloak.token}`,
				},
				body: JSON.stringify({
					username: keycloak.tokenParsed.preferred_username,
					email: keycloak.tokenParsed.email,
				}),
			})
			if (response.status == 200) {
				console.log('success')
				navigate(`/profile/${keycloak.subject}`)
			}
			if (response.status == 409) {
				navigate(`/profile/${keycloak.subject}`)
			}
			setLoading(false)
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className="w-full flex flex-col justify-center">
			<h2 className="text-center mt-10 text-2xl ">To fully use our platfor you need to Create your User in our Backend</h2>
			<ul id="errors"></ul>
			<button type="button" onClick={createUser} disabled={!initialized && keycloak.authenticated | loading} className="base-btn mt-10 mx-auto text-white bg-primary-blue">
				Create Backend User from Auth user.
			</button>
		</div>
	)
}

export default NewProfile
