import express from "express";
import cors from "cors";
import { Users } from "./User.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  // console.log(q);
  res.json(search(Users).slice(0, 10));
});

app.listen(5000, () => console.log("API is working"));
