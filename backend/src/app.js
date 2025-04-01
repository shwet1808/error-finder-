const express = require("express");
const aiRoutes = require("./routes/ai.routes"); 
require("dotenv").config();
const cors = require("cors"); 

const app = express();
const port = process.env.PORT || 3000; 
app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/ai", aiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
