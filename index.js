const express = require('express');
const path = require('path');
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const view = path.join(__dirname, 'public');

// Serve static files from the specified directory
app.use(express.static(staticFilesDir));

const PORT = process.env.PORT || 5030;
app.get("/",(req,res)=>{
    res.render("calc.html",path.join(__filename,"calc"))
})
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
