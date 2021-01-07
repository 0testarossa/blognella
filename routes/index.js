//import { Router } from 'express'
//import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos/index.js'


const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/todos/index');

//const router = Router()

router.get('/todos', controllers.getTodos)

router.post('/add-todo', controllers.addTodo)

router.put('/edit-todo/:id', controllers.updateTodo)

router.delete('/delete-todo/:id', controllers.deleteTodo)

//export default router
module.exports = router;