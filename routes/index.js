//import { Router } from 'express'
//import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos/index.js'


const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/todoController');
const controllersUser = require('./../controllers/userController');

//const router = Router()

router.get('/todos', controllers.getTodos)

router.post('/add-todo', controllers.addTodo)

router.put('/edit-todo/:id', controllers.updateTodo)

router.delete('/delete-todo/:id', controllers.deleteTodo)

router.get('/users', controllersUser.getUsers)

router.post('/user', controllersUser.addUser)

router.put('/user/:id', controllersUser.updateUser)

router.delete('/user/:id', controllersUser.deleteUser)

//export default router
module.exports = router;