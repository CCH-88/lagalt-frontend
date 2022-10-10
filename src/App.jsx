import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './NavBar/Navbar'
import ProfileView from './views/ProfileView'
import MainView from './views/MainView'
import ProjectView from './views/ProjectView'


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<MainView />} />
					<Route path='/profile' element={<ProfileView />} />
					<Route path='/project' element={<ProjectView />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
