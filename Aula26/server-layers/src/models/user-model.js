import mongoose from "mongoose"

const userCollection = 'users';
const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
});

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }

export const UserModel = mongoose.model(userCollection, userSchema);