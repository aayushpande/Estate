import express from "express";

const router = express.Router()

router.post("/register", (req,res)=>{
    console.log("router works")
})
router.post("/loint", (req,res)=>{
    console.log("router works")
})
router.post("/logout", (req,res)=>{
    console.log("router works")
})

export default router;