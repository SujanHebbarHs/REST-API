const express= require("express");
const MensRanking = require("../models/mens");

const router = express.Router();

router.post("/mens",async(req,res)=>{
    try {

        const addingMensRecord = new MensRanking(req.body);
        const insertMens = await addingMensRecord.save();
        res.status(201).send(insertMens);

    }catch(err) {

        res.status(400).send(err);

    }
})

router.get("/mens",async(req,res)=>{
    try {

        const getMens = await MensRanking.find().sort({"ranking":1});
        res.status(201).send(getMens);

    }catch(err) {

        res.status(400).send(err);

    }
})

router.get("/mens/:id",async(req,res)=>{
    try {

        const _id = req.params.id
        const getMens = await MensRanking.find({_id})
        res.status(201).send(getMens);

    }catch(err) {

        res.status(400).send(err);

    }
})

router.patch("/mens/:id",async(req,res)=>{
    try {

        const _id = req.params.id;
        const updateMens = await MensRanking.findByIdAndUpdate({_id},req.body,{new:true});
        res.status(201).send(updateMens);

    }catch(err) {

        res.status(500).send(err);

    }
})

router.delete("/mens/:id",async(req,res)=>{
    try {

        const _id = req.params.id;
        const deleteMens = await MensRanking.findByIdAndDelete({_id});
        res.status(201).send(deleteMens);

    }catch(err) {

        res.status(400).send(err);

    }
})

module.exports = router;