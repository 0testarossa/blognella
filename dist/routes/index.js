"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const userController_1 = require("../controllers/userController");
const router = express_1.Router();
// const express = require('express');
// const router = express.Router();
// const controllers = require('./../controllers/todoController');
// const controllersUser = require('./../controllers/userController');
// router.get('/todos', controllers.getTodos)
// router.post('/add-todo', controllers.addTodo)
// router.put('/edit-todo/:id', controllers.updateTodo)
// router.delete('/delete-todo/:id', controllers.deleteTodo)
// router.get('/users', controllersUser.getUsers)
// router.post('/user', controllersUser.addUser)
// router.put('/user/:id', controllersUser.updateUser)
// router.delete('/user/:id', controllersUser.deleteUser)
router.get('/todos', todoController_1.getTodos);
router.post('/add-todo', todoController_1.addTodo);
router.put('/edit-todo/:id', todoController_1.updateTodo);
router.delete('/delete-todo/:id', todoController_1.deleteTodo);
router.get('/users', userController_1.getUsers);
router.get('/user/:id', userController_1.getUser);
router.post('/user', userController_1.addUser);
router.put('/user/:id', userController_1.updateUser);
router.delete('/user/:id', userController_1.deleteUser);
exports.default = router;
// module.exports = router;
//# sourceMappingURL=index.js.map