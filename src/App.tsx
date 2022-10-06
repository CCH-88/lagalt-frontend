import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './NavBar/Navbar'
import MainView from './views/MainView'
import ProfileView from './views/ProfileView'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<MainView />} />
					<Route path="/profile" element={<ProfileView />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
