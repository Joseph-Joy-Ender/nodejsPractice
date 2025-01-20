const User = require("../model/user");
const NotFoundException = require("../exceptions/NotFoundException");

const createUser = async (request) =>{
    console.log("I am here in service")
    const {firstName, lastName, email, password} = request;

    const user = await User.findOne({email});
    console.log(user)
    if (user){
        throw new NotFoundException("Email already in use");
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };

    console.log("newUser", newUser)

    const savedUser = await User.create(newUser)
    console.log("newUser", savedUser.firstName)

    console.log("newUser", savedUser)

    const response = {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
    };

    return{
        data: response,
        message: "Registration successful"
    }

}

const login = async (request) =>{
    const {email, password} = request;

    const user = await User.findOne({email})
    if (!user){
        throw new NotFoundException("User doesn't exit");
    }

    if (user.password !== password){
        throw new NotFoundException("Invalid credentials")
    }

    return{
        msg: "Login successful"
    }
}

const deleteUser = async (request) =>{
    const {id} = request
    const user = await User.findByIdAndDelete(id)
    if (!user){
        throw new NotFoundException("User doesn't exit");
    }

    return{
        msg: "Delete was successful"
    }




}
module.exports = {createUser, login, deleteUser};