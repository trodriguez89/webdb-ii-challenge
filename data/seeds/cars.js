
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "111111111",
          make: "Honda",
          model: "Civic",
          mileage: 123500,
          transmission_type: "auto",
          status_of_title: "clean"
        },
        {
          VIN: "222222222",
          make: "Hyundai",
          model: "Elantra",
          mileage: 40000,
          transmission_type: "auto",
          status_of_title: "clean"
        },
        {
          VIN: "333333333",
          make: "Lamborghini",
          model: "Aventador",
          mileage: 2500,
          transmission_type: "manual",
          status_of_title: "salvage"
        },
        {
          VIN: "444444444",
          make: "Tesla",
          model: "Model X",
          mileage: 123121564651,
          transmission_type: "auto",
          status_of_title: "clean"
        }
      ]);
    });
};
