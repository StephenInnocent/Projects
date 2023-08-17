const express = require("express");

const router = express.Router();

router.get("/calc",(req,res)=>{
    res.render("calc");
    res.end();
});
router.get("/rem",(req,res)=>{
    res.render("rem");
    res.end();
})

const indexRouter = router;
module.exports = indexRouter;