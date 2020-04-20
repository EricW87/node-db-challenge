const db = require("../data/db-config");

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}

function getProjects() {
    return db("projects");
}

function getResources() {
    return db("resources");
}

function getTasks() {
    return db("tasks")
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.task_description", "tasks.task_notes", "tasks.complete", "projects.project_name", "project_description");       
}


function addProject(p) {
    return db("projects").insert(pS);
}

function addResource(r) {
    return db("resources").insert(r);
}

function addTask(t) {
    return db("tasks").insert(t);
}
