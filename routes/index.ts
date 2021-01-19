import { Router } from 'express'
import { addContent, deleteContent, getContent, getContents, updateContent } from '../controllers/contentController'
import { addImage, deleteImage, getImage, getImages, updateImage } from '../controllers/imageController'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todoController'
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController'

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

router.get('/user/:id', getUser)

router.post('/user', addUser)

router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)

router.get('/images', getImages)

router.get('/image/:id', getImage)

router.post('/image', addImage)

router.put('/image/:id', updateImage)

router.delete('/image/:id', deleteImage)

router.get('/contents', getContents)

router.get('/content/:id', getContent)

router.post('/content', addContent)

router.put('/content/:id', updateContent)

router.delete('/content/:id', deleteContent)

router.get('/posts', getPosts)

router.get('/post/:id', getPost)

router.post('/post', addPost)

router.put('/post/:id', updatePost)

router.delete('/post/:id', deletePost)

export default router
// module.exports = router;