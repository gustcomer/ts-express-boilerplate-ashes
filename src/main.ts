import express from "express";
const app = express();
import crypto from "crypto";
import pgp from "pg-promise";

app.use(express.json());

app.post("/tickets", async function (req, res) {
  const ticketId = crypto.randomUUID();
	const connection = pgp()("postgres://postgres:123456@localhost:5432/example");
	await connection.query("insert into example.ticket (ticket_id, requester_id, content, start_date, status) values ($1, $2, $3, $4, $5)", [ticketId, req.body.requesterId, req.body.content, new Date(), "open"]);
	await connection.$pool.end();
	res.json({
		ticketId
	});
});

app.listen(3000);