const { Candidate, CandidateVotes, sequelize } = require("./models");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/api/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.findAll();
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
        const candidateVote = await CandidateVotes.create({
            candidateId: candidate.id,
            votantId: req.body.votantId,
        });
        res.json(candidateVote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.get("/api/candidate-votes", async (req, res) => {
  try {
    const candidateVotes = await CandidateVote.findAll();
    res.json(candidateVotes);
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
