import mongoose from "mongoose"
import { Projects } from "../model/dbmodel.js"

const getProjects = async (req, res) => {
    await inputValidation(req.body, res)
    Projects.find({})
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err.message))
}

const getProjectByID = async (req, res) => {
    await inputValidation(req.body, res)
    Projects.findById(req.params.id).exec()
    .then(data => {res.status(200).send(data)})
    .catch(err => {res.status(400).send(err)})
}

const deleteProject = async (req, res) => {
    await inputValidation(req.body, res)
    Projects.deleteMany({}).then(res.send("All items deleted"))
    .catch(err => res.status(400).send(err))

}

const deleteProjectByID = async (req, res) => {
    await inputValidation(req.body, res)
    Projects.findByIdAndRemove(req.params.id)
    .then(res.send(`deleted ${req.body.ProjectName}`))
    .catch(err => {res.status(400).send(err)})
}

const editProject = async (req, res) => {
    await inputValidation(req.body, res)
    Projects.findByIdAndUpdate(req.params.id, req.body)
    .then(data =>{
        if(!data){
            res.status(400).send("Cannot find data")
        } else res.send("Updated Data")
    })
    .catch(err => {res.status(400).send("Error wrong Id Number")})
}

const addProject = async (req, res) => {
    await inputValidation(req.body, res)
    const newproject = new Projects({    
    ProjectName: req.body.ProjectName,
    ProjectDescription: req.body.ProjectDescription,
    ProjectMembers: req.body.ProjectMembers,
    ProjectTeam: req.body.ProjectTeam,
})
    newproject.save().then(data => {res.send(data)}).catch(err => {res.status(400).send(err)})
}


const inputValidation = (data, res) => {
    if(!data){
        res.status(400).send("This is an empty Request")
        return;
    }
}

export const controllerhandler = {getProjects, getProjectByID, deleteProject, deleteProjectByID, editProject, addProject}
