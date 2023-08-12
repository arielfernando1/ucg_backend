const { Candidate, Party, Vote, sequelize } = require("./models");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
// get candidates by party
app.get("/api/candidates/:list", async (req, res) => {
  try {
    const candidates = await Candidate.findAll({
      where: {
        party_id: req.params.list,
      },
    });
    res.json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// get candidate by id
app.get("/api/candidates/:id", async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);
    res.json(candidate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// vote for a candidate
app.post("/api/candidates/:id/vote", async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    // a user can only vote once
    // const existingVote = await CandidateVotes.findOne({
    //   where: {
    //     votantId: req.body.votantId,
    //   },
    // });
    // if (existingVote) {
    //   return res.status(400).json({ message: "Ya has votado" });
    // }
    const candidateVote = await Vote.create({
      candidate_id: candidate.id,
      votant_id: req.body.votantId,
    });
    res.json(candidateVote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// get votes count for a candidate
app.get("/api/candidates/:id/votes", async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    const votes = await Vote.count({
      where: {
        candidate_id: candidate.id,
      },
    });
    res.json({ votes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/:id/hasvoted/:party", async (req, res) => {
  try {
    const existingVoteInParty = await Vote.findOne({
      where: {
        votant_id: req.params.id,
      },
      include: [
        {
          model: Candidate,
          where: {
            party_id: req.params.party,
          },
        },
      ],
    });
    if (existingVoteInParty) {
      return res.status(200).json({ message: "Ya has votado" });
    } else {
      return res.status(404).json({ message: "No has votado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: true });
    require("./seeders/seed");
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database: ", error);
  }
  console.log(`Server running on port ${PORT}`);
});
