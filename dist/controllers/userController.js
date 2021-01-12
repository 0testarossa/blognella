"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
// const User = require('../models/user');
const getUsers = async (req, res) => {
    try {
        const users = await user_1.default.find();
        res.status(200).json({ users });
    }
    catch (error) {
        throw error;
    }
};
exports.getUsers = getUsers;
const addUser = async (req, res) => {
    try {
        const body = req.body;
        const user = new user_1.default({
            nick: body.nick,
            login: body.login,
            password: body.password,
            role: body.role,
            email: body.email
        });
        const newUser = await user.save();
        const allUsers = await user_1.default.find();
        console.log("newUser");
        console.log(newUser);
        res.status(201).json({ message: 'User added', user: newUser, users: allUsers });
    }
    catch (error) {
        throw error;
    }
};
exports.addUser = addUser;
const updateUser = async (req, res) => {
    try {
        const { params: { id }, body, } = req;
        const updateUser = await user_1.default.findByIdAndUpdate({ _id: id }, body);
        const allUsers = await user_1.default.find();
        res.status(200).json({
            message: 'User updated',
            user: updateUser,
            users: allUsers,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await user_1.default.findByIdAndRemove(req.params.id);
        const allUsers = await user_1.default.find();
        res.status(200).json({
            message: 'User deleted',
            user: deletedUser,
            users: allUsers,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.deleteUser = deleteUser;
// module.exports.getUsers = getUsers;
// module.exports.addUser = addUser;
// module.exports.updateUser = updateUser;
// module.exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map