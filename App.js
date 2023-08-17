const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const app = express();
dotenv.config();
const staticFilesDirectory = path.join(__dirname, 'public');
app.set('view engine', 'ejs');
// Serve static files from the specified directory
app.use(express.static(staticFilesDirectory));
app.use("/",indexRouter);
const PORT = process.env.PORT || 5030;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
