const userService = require('../service/userService');

const register = async (req, res) =>{
    try {
        const response = await userService.createUser(req.body);
        res.status(200).json({response});
    }catch (error){
        res.status(500).json(error);

    }
    // res.send(userService(req))
};

const login = async (req, res) =>{
    return await userService.login(req.body)
        .then((response) => res.json(response))
        .catch((error) => res.json(error.message))
};

module.exports = {register, login};