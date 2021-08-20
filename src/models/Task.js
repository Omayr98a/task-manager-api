const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a postive number')
//             }
//         }
//     }
// })
const userSchema = new mongoose.Schema({
    description: {
        type: String,
        trim:true,
        default:false
    },
    Completed: {
        type: Boolean
    },
    password: {
       type: String,
       required: true,
        trim:true,
        minLength:6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('you cant make this a password')

            }

        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps:true
})

userSchema.pre('save', async function (next) {
    const currenTask= this
// console.log('just before saving')
    if (currenTask.isModified('password')) {
        currenTask.password = await bcrypt.hash(currenTask.password, 8)
    }

    next()
})

const NewTask = mongoose.model('NewTask', userSchema)







module.exports = NewTask