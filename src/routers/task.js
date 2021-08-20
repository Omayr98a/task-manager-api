const express = require('express')
const router = new express.Router()
const NewTask = require('../models/Task')
const auth = require('../middleware/auth')
const bcrypt = require('bcrypt')

router.post('/NewTask',auth,async (req,res)=>{
    // const task = new NewTask(req.body)
    const task = new NewTask({
        ...req.body,
        owner: req.user._id
    })
    try{
    await task.save()
    res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }

})
// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc

router.get('/task', auth,async (req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }


    try{
        // const task = await NewTask.find({owner: req.user._id })
        await req.user.populate({
            path: 'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
            }

        }).execPopulate()
        res.send(req.user.tasks)
    }
          catch(e){
            res.status(500).send()
          }    
})

router.get('/task/:id', auth ,async (req, res) => {
    // const _id = req.params.id

    try{
        const task = await NewTask.findById({ _id: req.params.id, owner: req.user._id})
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
        
    }
          catch(e){
            res.status(500).send()

          }

    
})
router.patch('/NewTask/:id', auth,async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['password','description', 'CompletedFields']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        // const task = await NewTask.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        // const task = await NewTask.findById(req.params.id)
        const task = await NewTask.findOne({ _id: req.params.id, owner: req.user._id})

        

        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/NewTask/:id',auth, async (req, res) => {
    try {
        const task = await NewTask.findByIdAndDelete({ _id: req.params.id, owner: req.user._id})

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router