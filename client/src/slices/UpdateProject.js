import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    projectdeleted: false,
    loading: false,
    deletedproject: []
}

export const DeletedProject = createSlice({
    name: "deleted-project",
    initialState,
    reducers: {
        deleteProject: state => {
            state.loading = true
        },
        deleteProjectSuccess: (state, {payload}) => {
            state.projectdeleted = true
            state.deletedproject = payload
        },
        deleteProjectError: state => {
            state.projectdeleted = false
        }
    },
})

export const DeleteSelector = state => state.deletedproject
export const {deleteProject, deleteProjectSuccess, deleteProjectError} = DeletedProject.actions
export default DeletedProject.reducer

export function DeleteProjectAPI({id}) {
    return async dispatch => {
        dispatch(deleteProject())
    try {
        const deletedProject = await fetch(`http://localhost:8080/api/project/${id}`, {method: "DELETE"})
    } catch (error) {
        dispatch(deleteProjectError())
    }
}}