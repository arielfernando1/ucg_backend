const { Candidate } = require("../models"); // Update the path accordingly

const seedCandidates = async () => {
  try {
    await Candidate.bulkCreate([
      {
        name: "Jhon Doe",
        photoUrl: "https://api.dicebear.com/6.x/adventurer/svg?seed=Mittens",
        party: "Party 1",
        list: "Lista A",
        proposals:
          "Tengo experiencia en el sector publico y privado. Por eso, propongo crear un club de emprendedores.",
      },
      {
        name: "Jane Doe",
        photoUrl: "https://api.dicebear.com/6.x/adventurer/svg?seed=Rascal",
        party: "Party 2",
        list: "Lista B",
        proposals: "Organizare giras internacionales para todos los alumnos.",
      },
      {
        name: "John Smith",
        photoUrl: "https://api.dicebear.com/6.x/adventurer/svg?seed=Fluffy",
        party: "Party 3",
        list: "Lista C",
        proposals:
          "Mis propuestas son las mejores. Creare clubes, desde deportivos hasta de lectura.",
      },
      {
        name: "Jane Smith",
        photoUrl: "https://api.dicebear.com/6.x/adventurer/svg?seed=Tinkerbell",
        party: "Party 4",
        list: "Lista D",
        proposals:
          "Propongo organizar una fiesta cada fin de semana, hasta que se acabe el presupuesto.",
      },
    ]);
    console.log("Candidates seeded successfully.");
  } catch (error) {
    console.error("Error seeding candidates:", error);
  }
};

seedCandidates();
