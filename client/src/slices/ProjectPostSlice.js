import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectposted: false,
    addedProjects: []
}

export const PostProjectSlice = createSlice({
    name: 'post-project',
    initialState,
    reducers: {
        postingProject: state => {
            state.projectposted = false
        },
        postedProject: (state, {payload}) => {
            state.projectposted = true
            state.addedProjects = payload
        },
        errorPosting: state => {
            state.projectposted = false
        }
    },
})

export const PostSelector = state => state.postedprojects
export const {postingProject, postedProject, errorPosting} = PostProjectSlice.actions
export default PostProjectSlice.reducer

export const PostProjectAPI = ({userData}) => {
    return async dispatch => {
        dispatch(postingProject())
        try {
            const postproject = await fetch('http://localhost:8080/api/project/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
              })
            dispatch(postedProject(userData))
        } catch (error) {
            dispatch(errorPosting())
        }
    }
}