const express = require("express");
const db = require("./router-help");
const router = express.Router();

router.get("/projects", (req, res) =>{
    db
        .getProjects()
        .then(p => res.status(201).json(p))
        .catch(e => res.status(500).json(e))
})

router.get("/resources", (req, res) =>{
    db
        .getResources()
        .then(r => res.status(201).json(r))
        .catch(e => res.status(500).json(e))
})

router.get("/tasks", (req, res) =>{
    db
        .getTasks()
        .then(t => res.status(201).json(t))
        .catch(e => res.status(500).json(e))
})

router.post("/projects", (req, res) =>{
    db
        .addProject(req.body)
        .then(p => res.status(201).json(p))
        .catch(e => res.status(500).json(e))
})

router.post("/resources", (req, res) =>{
    db
        .addResource(req.body)
        .then(r => res.status(201).json(r))
        .catch(e => res.status(500).json(e))
})

router.post("/tasks", (req, res) =>{
    db
        .addTask(req.body)
        .then(t => res.status(201).json(t))
        .catch(e => res.status(500).json(e))
})

module.exports = router;