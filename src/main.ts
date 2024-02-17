import express from "express";
const app = express();

app.use(express.json());

app.post("/tickets", async function (req, res) {
  res.end();
});

app.listen(3000);