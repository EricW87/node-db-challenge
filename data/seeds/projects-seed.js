
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "first", project_description: "blah blah blah", complete: false},
        {project_name: "second", project_description: "what what", complete: false},
        {project_name: "third", project_description: "i like cats", complete: true},
        {project_name: "fourth", project_description: "something important", complete: false},
        {project_name: "fifth", project_description: "star-spangled banner", complete: true},
      ]);
    });
};
