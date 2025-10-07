import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const data = {
    endpoints: ["GET /coinflip", "GET /diceroll"],
  };
  res.json(data);
});

app.get("/coinflip", (req, res) => {
  const coinflip = Math.random() < 0.5 ? "heads" : "tails";
  res.json({ coinflip });
});

app.get("/diceroll", (req, res) => {
  if (!req.query.sides) {
    return res.status(400).json({
      error: "Du musst die Anzahl der Seiten angeben",
      example: "/diceroll?sides=20",
    });
  }

  const sides = parseInt(req.query.sides);

  const diceroll = Math.floor(Math.random() * sides) + 1;
  res.json({ diceroll });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
