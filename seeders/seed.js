const { Candidate, Party } = require("../models"); // Update the path accordingly

const seedCandidates = async () => {
  try {
    await Party.bulkCreate([
      {
        name: "Somos UCSG",
      },
      {
        name: "GIGA",
      },
    ]);
    console.log("Parties seeded successfully.");
    await Candidate.bulkCreate([
      {
        name: "Somos UCSG",
        photoUrl: "https://i.ibb.co/JvvLB61/03.jpg",
        party_id: 1,
        proposals:
          "Busca cumplir con el cambio del porcentaje de calificación de 50% formativo y 50% examen a lo que era antes el manejo de las notas en la institución",
      },
      {
        name: "Nova",
        photoUrl: "https://i.ibb.co/Rc6JTFX/04.jpg",
        party_id: 1,
        list: "A",
        proposals:
          "Busca la seguridad de la institución cerrando las puertas de la misma y que los automóviles entrantes solo puedan ingresar a través de un qr previamente reconocido por la institución. Para los estudiantes propone que cada estudiante cuente con un carnet de identificación que puede ser escaneado y asegurar que es parte de la institución educativa",
      },
      {
        name: "GIGA",
        photoUrl: "https://i.ibb.co/0Fx3Gr1/05.jpg",
        party_id: 2,
        list: "B",
        proposals:
          "Mis propuestas son las mejores. Creare clubes, desde deportivos hasta de lectura.",
      },
    ]);
    console.log("Candidates seeded successfully.");
  } catch (error) {
    console.error("Error seeding candidates:", error);
  }
};

seedCandidates();
