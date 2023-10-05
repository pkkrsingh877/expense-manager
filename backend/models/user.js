const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        min: [8, "Password must be of atleast 8 characters!"],
        max: [64, "Password must be of atmost 64 characters!"]
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }]
},{ timestamps: true });

// Function for hashing a password || SIGNUP FEATURE PART
/*
At first a salt is generated.
then we hash the password given by user during the signup part 
with the salt that we generated.
we save the new hashed password in this.password.
next() function is saying that now we continue to save the data of 
user to database with updated password.
*/ 

// This keyword works better with normal function and not arrow one

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Helps user Login || LOGIN PART
/*
This userSchema.statics.login method is responsible 
for verifying a user's login credentials. 

It first checks if a user with the provided username exists in the 
database. 

If so, it compares the entered password with the stored 
hashed password. 

If both the username and password are correct, it returns the 
user document, indicating a successful login. 

Otherwise, it throws errors to indicate that either the 
username or password is incorrect.
*/

userSchema.statics.login = async function(username, password){
    const user = await this.findOne({ username });
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }else{
            throw Error('Password is incorrect!')
        }
    }else{
        throw Error('Username is incorrect!')
    }
}