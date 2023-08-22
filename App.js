const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const app = express();


const indexRouter = require("./routes/index");
const connectDb = require("./config/db")
const PORT = process.env.PORT || 5030;
const MONGO_URI = process.env.MONGO_URI;
const staticFilesDirectory = path.join(__dirname, 'public');


dotenv.config();
app.set('view engine', 'ejs');
// Serve static files from the specified directory
app.use(express.static(staticFilesDirectory));
app.use("/",indexRouter);

connectDb(MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
