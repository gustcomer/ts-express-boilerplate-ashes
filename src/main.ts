import express from "express";
const app = express();
import crypto from "crypto";

app.use(express.json());

app.post("/tickets", async function (req, res) {
  const ticketId = crypto.randomUUID();
  res.json({
    ticketId
  });
});

app.listen(3000);