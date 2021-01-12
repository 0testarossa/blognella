import User from '../models/user';

// const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        throw error
    }
}

const addUser = async (req, res) => {
    try {
        const body = req.body

        const user = new User({
            nick: body.nick,
            login: body.login,
            password: body.password,
            role: body.role,
            email: body.email
        }) 

        const newUser = await user.save()
        const allUsers = await User.find()

        console.log("newUser");
        console.log(newUser);

        res.status(201).json({ message: 'User added', user: newUser, users: allUsers })
    } catch (error) {
        throw error
    }
}

const updateUser = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateUser = await User.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allUsers = await User.find()
        res.status(200).json({
            message: 'User updated',
            user: updateUser,
            users: allUsers,
        })
    } catch (error) {
        throw error
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(
            req.params.id
        )
        const allUsers = await User.find()
        res.status(200).json({
            message: 'User deleted',
            user: deletedUser,
            users:allUsers,
        })
    } catch (error) {
        throw error
    }
}

export { getUsers, addUser, updateUser, deleteUser }

// module.exports.getUsers = getUsers;
// module.exports.addUser = addUser;
// module.exports.updateUser = updateUser;
// module.exports.deleteUser = deleteUser;