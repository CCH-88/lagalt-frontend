import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./NavBar/Navbar";
import ProfileView from "./views/ProfileView";
import MainView from "./views/MainView";
import EditProfileView from "./views/EditProfileView";
import ProjectView from "./views/ProjectView";
import CreateProjectView from "./views/CreateProjectView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/profile">
            <Route path=":userId" element={<ProfileView />} />
          </Route>
          <Route path="/project">
            <Route path=":projectId" element={<ProjectView />} />
          </Route>
          <Route path="/editprofile" element={<EditProfileView />} />
          <Route path="/createproject" element={<CreateProjectView/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
