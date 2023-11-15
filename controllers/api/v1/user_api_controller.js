const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function (req, res) {
    console.log("triggred", req.body);
    try {
        let user = await User.findOne({ email: req.body.email });
        console.log("user ", user, req.body.email);
        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: 'Invalid Id or password',
            });
        }
        else {
            return res.json(200, {
                data: {
                    token: jwt.sign(user.toJSON(), 'todo', { expiresIn: 100000 })
                }
            })
        }
    }
    catch (err) {
        return res.json(500, {
            message: 'Internal server error',
        })
    }
}

module.exports.createUser = async function (req, res) {
    console.log("req.body",req.body);
    User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    })
    .then((user) => {
        return res.json(200, {
            data: {
                token: jwt.sign(user.toJSON(), 'todo', { expiresIn: 100000 })
            }
        })
    })
    .catch((err) => {
        return res.json(500, {
            message: 'Internal server error',
        })
    })
}