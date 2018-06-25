const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        index: {unique: true}
    },
    password: String,
    username: String,
});

UserSchema.methods.comparePass = function comparePass(password, callback){
    bcrypt.compare(password, this.password, callback);
}

UserSchema.pre('save', function saveHook(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    return bcrypt.genSalt((saltError, salt)=>{
        
        if(saltError){
            return next(saltError);
        }
        return bcrypt.hash(user.password, salt, (hashError, hash)=>{
            if(hashError){
                return next(hashError);
            }
            user.password = hash;
            return next();
        });
    });
});

var userModel = mongoose.model("UserModel", UserSchema);

module.exports = userModel;