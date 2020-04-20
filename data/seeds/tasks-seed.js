
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "run to the store", task_notes: "take a left", complete: false, project_id: 1},
        {task_description: "run to the table", task_notes: "take a left", complete: false, project_id: 1},
        {task_description: "run to the shore", task_notes: "take a left", complete: false, project_id: 2},
        {task_description: "run to the lake", task_notes: "take a left", complete: false, project_id: 2},
        {task_description: "run to the car", task_notes: "take a left", complete: false, project_id: 3},
        {task_description: "run to the tree", task_notes: "take a left", complete: false, project_id: 3},
        {task_description: "run to the window", task_notes: "take a left", complete: false, project_id: 4},
        {task_description: "run to the market", task_notes: "take a left", complete: false, project_id: 4},
        {task_description: "run to the man", task_notes: "take a left", complete: false, project_id: 5},
        {task_description: "run to the woman", task_notes: "take a left", complete: false, project_id: 5},
        {task_description: "run to the office", task_notes: "take a left", complete: false, project_id: 5},
      ]);
    });
};
