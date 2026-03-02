require("dotenv").config();
const db = require("../pkg/db/index");
const Tour = require("../pkg/tours/tourSchema");

(async () => {
  await db.init();

  await Tour.deleteMany();

  await Tour.create([
    { title: "Охрид Викенд", destination: "Ohrid", days: 2, price: 99, seatsAvailable: 20 },
    { title: "Истанбул 5 дена", destination: "Istanbul", days: 5, price: 299, seatsAvailable: 35 },
  ]);

  console.log("Tours seeded");
  process.exit(0);
})();