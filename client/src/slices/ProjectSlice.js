import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    projects: [],
    projectsloaded: false,
    loadingerror: false
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects: state => {
            state.projectsloaded = true
        },
        getProjectsSuccess: (state, {payload}) => {
            state.projectsloaded = false
            state.projects = payload
            state.loadingerror = false
        },
        getProjectsFailed: state => {
            state.projectsloaded = false
            state.loadingerror = true
        },
    },
})

export const {getProjects, getProjectsSuccess, getProjectsFailed} = projectsSlice.actions
export const ProjectsSelector = state => state.projects
export default projectsSlice.reducer

export const fetchProjects = () => {
    return async dispatch => {
        dispatch(getProjects())
        try {
            const projects = await fetch('http://localhost:8080/api/project/')
            const projectsdata = await projects.json()
            dispatch(getProjectsSuccess(projectsdata))
        } catch (error) {
            dispatch(getProjectsFailed())
        }
    }
}
