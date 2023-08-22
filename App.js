const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const app = express();
const helmet = require("helmet");
const xss = require("xss");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cors = require("cors");



const indexRouter = require("./routes/index");
const connectDb = require("./config/db")


const PORT = process.env.PORT || 5030;
const MONGO_URI = process.env.MONGO_URI;

const usersRequestLimiter =  rateLimit({
    windowMs: 1000*60*15,
    max: 40,
    message: 'Too many requests from this IP, please try again later.'
})
const staticFilesDirectory = path.join(__dirname, 'public');


app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize({
    replaceWith: '_',
    allowDots: true
}));


dotenv.config();
app.set('view engine', 'ejs');
// Serve static files from the specified directory
app.use(express.static(staticFilesDirectory));
app.use("/", usersRequestLimiter,indexRouter);


connectDb(MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
