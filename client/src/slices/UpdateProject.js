import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    projectUpdated: false
}

const updateSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        updateProject: state => {
            state.projectUpdated = true
        },
    },
})

export const {updateProject} = updateSlice.actions
export const UpdateSelector = state => state.updatedproject
export default updateSlice.reducer

export const updateAPI = (id, project) => {
    return async dispatch => {
    try {
        const updatingproject = await fetch(`http://localhost:8080/api/project/${id}`, 
        {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
          })
        dispatch(updateProject())
    } catch (error) {
        console.error(error)
    }
}
}