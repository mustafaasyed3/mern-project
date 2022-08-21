import express from "express";
import { controllerhandler } from "../routes/projects.routes.js";


export const ProjectRoutes = express.Router()

ProjectRoutes.get("/", controllerhandler.getProjects)

ProjectRoutes.get("/:id", controllerhandler.getProjectByID)

ProjectRoutes.delete("/", controllerhandler.deleteProject)

ProjectRoutes.delete("/:id", controllerhandler.deleteProjectByID)

ProjectRoutes.put("/:id", controllerhandler.editProject)

ProjectRoutes.post("/", controllerhandler.addProject)

