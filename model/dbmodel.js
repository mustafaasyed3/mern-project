import mongoose from 'mongoose';
import "dotenv/config"

const {Schema, SchemaTypes} = mongoose
export const ProjectsSchema = new Schema({
    ProjectName: {
        type: String,
        required: true
    },
    ProjectDescription: {
        type: String,
        required: true
    },
    ProjectMembers: {
        type: Number,
        required: true
    },
    ProjectTeam: {
        type: String,
        required: true
    } 
})



export const Projects = mongoose.model("Projects", ProjectsSchema)