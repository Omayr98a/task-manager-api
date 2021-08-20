const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })
// const me = new User({
//     name: 'Andrew',
//     age: '29'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })
// const tasks = mongoose.model('tasks', {
//     description: {
//         type: String,
//         trim:true,
//         default:false
//     },
//     CompletedFields: {
//         type: Boolean
//     },
//     password: {
//        type: String,
//        required: true,
//         trim:true,
//         minLength:6,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('you cant make this a password')

//             }

//         }
//     }
// })
// const me = new tasks({
    
//     CompletedFields: 'true',
//     password:'umairazeem'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })
