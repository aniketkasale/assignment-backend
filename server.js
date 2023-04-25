const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const jsonData = {
  users: ["User-1", "User-2", "User-3"],
  tasks: [
    {
      task: "Sample task -1",
      expiry_date: "10/21/2022",
      user: "User-1",
      important: true,
      created_on: "01/10/2022",
    },
    {
      task: "Sample task -2",
      expiry_date: "03/03/2022",
      user: "User-2",
      important: false,
      created_on: "01/10/2022",
    },
    {
      task: "Sample task -3",
      expiry_date: "05/30/2022",
      user: "User-2",
      important: true,
      created_on: "01/10/2022",
    },
  ],
};

app.get("/tasks", async (req, res) => {
  return res.status(200).json({ tasks: jsonData.tasks });
});

app.get("/users", async (req, res) => {
  return res.status(200).json({ users: jsonData.users });
});

app.listen(process.env.PORT);
