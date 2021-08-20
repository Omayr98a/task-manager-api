const express = require('express')
const app = express()
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const port = process.env.PORT
// const User = require('./models/Task')
// const NewTask = require('./models/')
require('./db/mongoose')
// app.use((req, res, next) => {
//     res.status(500).send('Site is under maintainance ')
//     })
app.use(express.json())
app.use(taskRouter)
app.use(userRouter)

    


// app.post('/users', async (req,res)=>{
//     const user = new User(req.body)
//     try{
//     await user.save()
//     res.status(201).send(user)
// }
//       catch(e){
//         res.status(400).send(e)
//       }   

// })
// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.post('/NewTask',async (req,res)=>{
//     const task = new NewTask(req.body)
//     try{
//     await task.save()
//     res.status(201).send(task)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }

// })
// app.get('/task', async (req, res) => {

//     try{
//         const task = await NewTask.find({})
//         res.send(task)
//     }
//           catch(e){
//             res.status(500).send()
//           }    
// })

// app.get('/task/:id', async (req, res) => {
//     const _id = req.params.id

//     try{
//         const task = await NewTask.findById(_id)
//         if (!NewTask) {
//             return res.status(404).send()
//         }

//         res.send(task)
        
//     }
//           catch(e){
//             res.status(500).send()

//           }

    
// })
// app.patch('/NewTask/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'CompletedFields']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const task = await NewTask.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
// app.delete('/NewTask/:id', async (req, res) => {
//     try {
//         const task = await User.findByIdAndDelete(req.params.id)

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })








app.listen(port,()=>{
    console.log('Server is up and running at port : ' + port)
})
const Task = require('./models/Task')
const User = require('./models/User')

// const upload = multer({
//     dest: 'avatars'
// })
// app.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
//     res.send()
// })
// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6119310db177d8386c39b069')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()