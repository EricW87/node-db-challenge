
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "computer", resource_description: "Remarkable"},
        {resource_name: "desk", resource_description: "well done"},
        {resource_name: "pen", resource_description: "great"},
        {resource_name: "pencil", resource_description: "17"},
        {resource_name: "car", resource_description: "fantastic"},
        {resource_name: "carpet", resource_description: "nice"},
        {resource_name: "microphone", resource_description: "42"},
        {resource_name: "toilet", resource_description: "terrible"},
        {resource_name: "trashbin", resource_description: "really really really bad"},
        {resource_name: "lights", resource_description: "good"},
      ]);
    });
};
