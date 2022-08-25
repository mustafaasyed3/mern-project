import React, {useEffect, useState} from 'react'
import { PostProjectAPI, PostSelector } from '../../slices/ProjectPostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../slices/ProjectSlice'

export default function ProjectPostForm() {
    const dispatch = useDispatch()
    const {projectposted, addedProjects} = useSelector(PostSelector)

    const initialFormState = {
    ProjectName: "",
    ProjectDescription: "",
    ProjectMembers: 0,
    ProjectTeam: ""}

    const [userData, setData]  = useState(initialFormState)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userData.ProjectName || !userData.ProjectDescription || !userData.ProjectMembers || !userData.ProjectTeam){
            setData(initialFormState)
        }
        await dispatch(PostProjectAPI({userData}))
        await dispatch(fetchProjects())
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        setData({...userData, [name]: value})
    }


    const PostForm = () => {
        return(
            <form className='Posting-Form' onSubmit={handleSubmit}>
                <h1>Post a Project</h1>
                <label>Project Name
                    <input name='ProjectName' type="text" value={userData.ProjectName} onChange={handleChange}></input>
                </label>
                <label>Project Description
                    <input name='ProjectDescription' type="text" value={userData.ProjectDescription} onChange={handleChange}></input>
                </label>
                <label>Project Members
                    <input name='ProjectMembers' type="text" value={userData.ProjectMembers} onChange={handleChange}></input>
                </label>
                <label>Project Team Members Name
                    <input name='ProjectTeam' type="text" value={userData.ProjectTeam} onChange={handleChange}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
  return (
    <div>
      {PostForm()}
    </div>
  )
}
