import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAPI } from '../../slices/UpdateProject'

export default function UpdateForm(props) {
    const [ project, setProject ] = useState(props.currentProject)
    const handleSubmit = async (event) => {
        event.preventDefault()
        props.projectUpdate(props.currentProject.id, project)
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        setProject({...project, [name]: value})
    }
  return (
    <form className='Posting-Form' onSubmit={handleSubmit}>
    <h1>Editing Project</h1>
    <label>Project Name
        <input name='ProjectName' type="text" value={project.ProjectName} onChange={handleChange}></input>
    </label>
    <label>Project Description
        <input name='ProjectDescription' type="text" value={project.ProjectDescription} onChange={handleChange} ></input>
    </label>
    <label>Project Members
        <input name='ProjectMembers' type="text" value={project.ProjectMembers} onChange={handleChange}></input>
    </label>
    <label>Project Team Members Name
        <input name='ProjectTeam' type="text" value={project.ProjectTeam} onChange={handleChange}></input>
    </label>
    <input type="submit" value="Submit"></input>
</form>
  )
}
