const userService = require('../service/userService');

const register = async (req, res) =>{

    try {
        const response = await userService.createUser(req.body);
        console.log("i am in controller")
        console.log(response)
        return res.status(200).json({response});
    }catch (error){
        return res.status(500).json(error.message);

    }
    // res.send(userService(req))
};

const login = async (req, res) =>{
    return await userService.login(req.body)
        .then((response) => res.json(response))
        .catch((error) => res.json(error.message))
};

const deleteUser = async (req, res) =>{
    return await userService.deleteUser(req.body)
        .then((response) => res.json(response))
        .catch((error) => res.json(error.message))
};

module.exports = {register, login, deleteUser};