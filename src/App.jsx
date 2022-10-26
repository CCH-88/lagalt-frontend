import AppContext from './context/AppContext'
import { useState } from 'react'
import { OurRoutes } from './Routes'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { keycloak, initOptions } from './auth/keycloak'

function App() {
	const [loading, setLoading] = useState(true)

	return (
		<ReactKeycloakProvider
			authClient={keycloak}
			initOptions={initOptions}
			onEvent={(event, error) => {
				console.log(event)
				if (event && event === 'onAuthSuccess') {
					setLoading(false)
				}
			}}>
			<AppContext>
				<OurRoutes loading={loading} ></OurRoutes>
			</AppContext>
		</ReactKeycloakProvider>
	)
}

export default App
