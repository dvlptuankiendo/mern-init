const express = require("express");

const PORT = 8888;

const app = express();

app.get("/", (req, res) => {
    res.send("Root")
});

app.listen(PORT, () => {
  console.log(`Backend URL: http://localhost:${PORT}`);
});
