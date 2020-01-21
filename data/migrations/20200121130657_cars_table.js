
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.string("VIN").index().unique().notNullable();
        tbl.string("make", 30).notNullable();
        tbl.string("model", 30).notNullable();
        tbl.integer("mileage").notNullable();
        tbl.string("transmission_type", 30);
        tbl.string("status_of_title", 30);
        tbl.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars")
};
