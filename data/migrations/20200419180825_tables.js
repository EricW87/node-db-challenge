
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments()
            table.text("project_name").notNullable();
            table.text("project_description")
            table.boolean("complete").notNullable().defaultTo(0);
        })
        .createTable("tasks", table => {
            table.increments()
            table.text("task_description").notNullable();
            table.text("task_notes");
            table.boolean("complete").notNullable().defaultTo(0);
            table.integer("project_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
        .createTable("resources", table => {
            table.increments()
            table.text("resource_name").notNullable().unique();
            table.text("resource_description");
        })
        .createTable("project_resource", table => {
            table.integer("project_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            table.integer("resource_id")
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("project_resource")
};
