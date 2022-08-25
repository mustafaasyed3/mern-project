import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProjects } from '../../slices/ProjectSlice'
import { updateAPI } from '../../slices/UpdateProject'
import Project from './Project'
import ProjectPostForm, { initialFormState } from './ProjectPostForm'
import UpdateForm from './UpdateForm'


export default function ProjectPage() {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [currentProject, setCurrentProject] = useState(initialFormState)


  const projectUpdate = async(id, project) => {
    setEditMode(false)
    await setCurrentProject(project)
    await dispatch(updateAPI(id, project))
    await dispatch(fetchProjects())
  }
  const editProject = project => {
    setEditMode(true)
    setCurrentProject({
      ProjectName: project.ProjectName,
      ProjectDescription: project.ProjectDescription,
      ProjectMembers: project.ProjectMembers,
      ProjectTeam: project.ProjectTeam,
      id: project._id,
    })
  }
  return (
    <div>

      <Project editProject={editProject}/>
      {editMode ? <UpdateForm  currentProject={currentProject} editMode={editMode} setEditMode={setEditMode} projectUpdate={projectUpdate}/> : <ProjectPostForm/>}
    </div>
  )
}
