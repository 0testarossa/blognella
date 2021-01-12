import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todoController'
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/userController'

const router = Router()


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

router.get('/todos', getTodos)

router.post('/add-todo', addTodo)

router.put('/edit-todo/:id', updateTodo)

router.delete('/delete-todo/:id', deleteTodo)

router.get('/users', getUsers)

router.post('/user', addUser)

router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)

export default router
// module.exports = router;