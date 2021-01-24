import User from '../models/user';
import Comment from '../models/comment';
import UserValidator from '../classValidators/userClassValidator';
import { validateOrRejectExample } from '../classValidators/validation';
import { decrypt, encrypt } from '../crypto/crypto';

// const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        const decryptedUsers = users.map((user) => {
            return {
                _id: user.id,
                nick: user.nick,
                login: user.login,
                password: decrypt(user.password),
                role: user.role,
                email: user.email
            }
        })
        res.status(200).json({users: decryptedUsers })
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
        const decryptedUser = {
                _id: user.id,
                nick: user.nick,
                login: user.login,
                password: decrypt(user.password),
                role: user.role,
                email: user.email
            }

        res.status(200).json({user: decryptedUser })
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

        const encryptedUser = new User({
            nick: body.nick,
            login: body.login,
            password: encrypt(body.password),
            role: body.role,
            email: body.email
        }) 

        const newUser = await encryptedUser.save()
        // const allUsers = await User.find()

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
            {...body, password: encrypt(body.password)}
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
        const comments = await Comment.find();
            comments.map(async (comment) => {
                if(comment.user === user.nick) {
                    const deletedComment = await Comment.findByIdAndRemove(
                        comment._id
                    )
                }        
            })

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