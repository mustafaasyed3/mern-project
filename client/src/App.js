import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './view/component/Navbar';
import Dashboard from './view/component/Dashboard';
import Project from './view/component/Project';
import { combineReducers } from 'redux';
import projectsReducer from './slices/ProjectSlice'
import PostProjectSliceReducer from './slices/ProjectPostSlice';
import ProjectPostForm from './view/component/ProjectPostForm';
import ProjectPage from './view/component/ProjectPage';
import DeletedProjectReducer from './slices/DeleteProject'
import updateSliceReducer from './slices/UpdateProject'


export const rootReducer = combineReducers({
  projects: projectsReducer,
  postedprojects: PostProjectSliceReducer,
  deletedprojects: DeletedProjectReducer,
  updateproject: updateSliceReducer,
})

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Project" element={
          <ProjectPage>
            <Project/>
            <ProjectPostForm/>
        </ProjectPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
