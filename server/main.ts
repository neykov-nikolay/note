import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("../client/dist"));

app.get("/notes", (req, res) => {
  res.json(Array.from({ length: 20 }, (_, i) => ({ text: `Note #${i}` })));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
