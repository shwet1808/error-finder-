const express = require('express');
const aiRoutes = require("./routes/ai.routes");
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/ai", aiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
