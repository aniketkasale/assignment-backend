const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const jsonData = {
  Users: ["User-1", "User-2", "User-3"],
  Tasks: [
    {
      Task: "Sample task -1",
      Expiry_date: "10/21/2022",
      User: "User-1",
      Important: true,
      Created_on: "01/10/2022",
    },
    {
      Task: "Sample task -2",
      Expiry_date: "03/03/2022",
      User: "User-2",
      Important: false,
      Created_on: "01/10/2022",
    },
    {
      Task: "Sample task -3",
      Expiry_date: "05/30/2022",
      User: "User-2",
      Important: true,
      Created_on: "01/10/2022",
    },
  ],
};

app.get("/tasks", async (req, res) => {
  return res.status(200).json({ tasks: jsonData.Tasks });
});

app.get("/users", async (req, res) => {
  return res.status(200).json({ users: jsonData.Users });
});

app.listen(process.env.PORT);
