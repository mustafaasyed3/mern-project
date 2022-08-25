import React, { useEffect, useState } from 'react'
import { fetchProjects, ProjectsSelector } from '../../slices/ProjectSlice'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProjectAPI } from '../../slices/DeleteProject'
import { handleEdit, initialFormState } from './ProjectPostForm'


export default function Project(props) {

    const dispatch = useDispatch()
    const {projects, projectsloaded, loadingerror} = useSelector(ProjectsSelector)
    useEffect(() => {
        dispatch(fetchProjects())
    },[dispatch])
    const handleDelete = async (id) => {
        await dispatch(DeleteProjectAPI({id}))
        await dispatch(fetchProjects())
    }

    
    const showingProjects = () => {
        if (projectsloaded) return <p>Projects are currently being processed</p>
        if (loadingerror) return <p>There are errors loading the projects</p>
        return <table className='Project-Table'>
            <thead>
                <tr>
                    <th>Projects</th>
                    <th>Project Description</th>
                    <th>Number of Members</th>
                    <th>Team Members</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => <tr>
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>
                    <td>{project.ProjectMembers}</td>
                    <td>{project.ProjectTeam}</td>
                    <td>
                        <button className="button muted-button" onClick={() => {props.editProject(project)}}>Edit</button>
                        <button className="button muted-button" onClick={() => handleDelete(project._id)}>Delete</button>
                    </td>
                    </tr>)}
            </tbody>
            </table>
    }

  return (
    <div>
    {showingProjects()}
    </div>
  )
}
