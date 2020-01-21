
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('VIN').index().unique().notNullable()
        
    });
};

exports.down = function (knex) {

};
