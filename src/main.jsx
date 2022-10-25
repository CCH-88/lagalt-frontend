import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './context/AppContext'
import './index.css'

import { ReactKeycloakProvider } from '@react-keycloak/web'
import { keycloak, initOptions } from './auth/keycloak'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
		<AppContext>
			<App />
		</AppContext>
	</ReactKeycloakProvider>
)
