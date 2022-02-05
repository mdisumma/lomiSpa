import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send(`server running on port ${PORT}`));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
