import User from '../models/user';
import UserValidator from '../classValidators/userClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';

// const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const getUser = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const user = await User.findOne({_id: id})
        if(!user) {
            res.status(404).json("Id doesn't exist");
            return;
        }
        res.status(200).json({ user })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
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

        const userValidator = new UserValidator(user);
        await validateOrRejectExample(userValidator);

        const newUser = await user.save()
        const allUsers = await User.find()

        // res.status(201).json({ message: 'User added', user: newUser, users: allUsers })
        res.status(201).json({ user: newUser })
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const updateUser = async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req

        const userValidator = new UserValidator(body);
        await validateOrRejectExample(userValidator);

        const user = await User.findOne({_id: id})
        if(!user) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const updateUser = await User.findByIdAndUpdate(
            { _id: id },
            body
        )
        //const allUsers = await User.find()

        // res.status(200).json({
        //     message: 'User updated',
        //     user: updateUser,
        //     users: allUsers,
        // })
        res.status(200).json({user: updateUser})
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
    }
}

const deleteUser = async (req, res) => {
    try {
        const {params: { id }} = req;
        const user = await User.findOne({_id: id})
        if(!user) {
            res.status(404).json("Id doesn't exist");
            return;
        }

        const deletedUser = await User.findByIdAndRemove(
            // req.params.id
            id
        )

        // const allUsers = await User.find()
        // res.status(200).json({
        //     message: 'User deleted',
        //     user: deletedUser,
        //     users:allUsers,
        // })
        res.status(200).json({ user: deletedUser });
    } catch (error) {
        console.log("myerror");
        console.log(error);
        res.status(403).json("Fordidden");
        // throw error
    }
}

// async function validateOrRejectExample(input) {
//     try {
//       await validateOrReject(input);
//       return 'OK'
//     } catch (errors) {
//     //   console.log('Caught promise rejection (validation failed). Errors: ', errors);
//       throw errors;
//     }
//   }

export { getUsers, getUser, addUser, updateUser, deleteUser }

// module.exports.getUsers = getUsers;
// module.exports.addUser = addUser;
// module.exports.updateUser = updateUser;
// module.exports.deleteUser = deleteUser;