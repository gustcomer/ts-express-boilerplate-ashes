import axios from "axios";

test("Must create a new ticket", async function() {
  const input = {
    requesterId: "b7e6db47-3e5d-4220-9265-0e6eef8c4330",
    content: "The internet is not working"
  }

  const response = await axios.post("http://localhost:3000/tickets", input);
  const output = response.data;

  expect(output.ticketId).toBeDefined();
})