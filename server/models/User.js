const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
//salt is used to encrypt the password so we create salt first
//salt round represents how many salt 
const saltRounds = 10
const jwt = require('jsonwebtoken')
const { async } = require('rxjs')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxLength: 30,
        // required: true
    },
    email: {
        type: String,
        trim: true, //removes all the whitespaces
        unique: 1,
        // required: true
    },
    password: {
        type: String,
        minLength: 1,
    }, 
    workLevel: {
        type: String,
        enum: ['Secondary School', 'Junior College', "ITE",
                'Polytechnic', 'University'],
        // required: true
        // edited secondary school to secondary, removed working
    },
    bio: {
        type: String,
        maxlength: 200
    },
    provider: {
        type: String,
        enum: ['GOOGLE', 'LOCAL', 'FACEBOOK'],
        // required: true
    },
    telegram: {
        type: String,
        default: null
    },
    googleid: {
        type: String,
        default: null
    },
    facebookid : {
        type: String,
        default: null
    },
    photoURL: {
        type: String,
        default: null
    },
    photoKey: {
        type: String,
        default: null
    }
})
//pre is a mongoose method 
//Means before the 'save' method is executed, something will be done (encryption)

userSchema.pre('save', function(next){
    var user = this //points to this userschema since before this we created an instance of user 
    //Whenever a user changes his name, worklevel or any field other than password, the password will be encrypted
    //again because whenever save method is called, this function will be called so we add in the below condition

    if(user.isModified('password')){
        //encrypt password
        bcrypt.genSalt(saltRounds, (err, salt) => {  //generate salt
            if (err) return next(err) //if there is an error call next function with err parameter
            //salt below generated by above function
            //hash below is the hashed(encrypted) password
            bcrypt.hash(user.password, salt, (err, hash) => {
                //store hash in your db
                if (err) return next(err)
                user.password = hash
                next() //go back
            })
        })
    } else { //if changing something else just exit this encryption function
        next()
    }
})

userSchema.methods.comparePassword = async function(plainPassword, cb){
    //plainpassword is the password entered by the user
    //we cannot decrypt the encrypted password to compare with the plain password
    //so we encrypt the plainpassword then compare it with the encrypted string
    console.log('within user method')
    console.log(plainPassword)
    
    console.log(this.password)
    // await bcrypt.compare(plainPassword, this.password, function (err, isMatch)  {
    //     //console.log(isMatch)
    //     console.log('Comparing Password')
    //     console.log(isMatch)
    //     if (err) return cb(err),
    //         cb(null, isMatch)
        
    //     //if password match, return null as error and return isMatch = True

    // })
    
    try {
        return await bcrypt.compare(plainPassword, this.password)
    } catch (error) {
        console.log(error)
    }
    return false
}

userSchema.methods.generateToken = function(callback){
    var user = this
    //using jwt, create token
    var token = jwt.sign(user._id.toHexString(), 'secretToken') //combine the two to create the token
    user.token = token
    user.save(function(err, user){
        if(err) return callback(err) //if error pass error to the callback function
        callback(null, user) //if no error pass no error(null) and user to the callback function

    })
}


userSchema.statics.findByToken = function (token, cb){
    var user = this
    
    //decrypt token
    jwt.verify(token, 'secretToken', (err, decoded) => { //decoded is the user._id
        //find the user using the userid (decoded)
        //check whether the token from the client and the token stored in the database match

        user.findOne({"_id": decoded, "token": token}, (err, user) => {
            if (err) return cb(err)
            cb(null, user)
        })
    })
}

userSchema.methods.getToken = function(token, cb){
    return this.token
}


const User = mongoose.model('User', userSchema)
module.exports = {User}