/* React dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Global Styling */
import './index.css'

/* Routing pages */
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
