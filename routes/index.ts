import { Router } from 'express'
import { addBookmark, deleteBookmark, getBookmark, getBookmarks, updateBookmark } from '../controllers/bookmark'
import { addComment, deleteComment, getComment, getComments, updateComment } from '../controllers/commentController'
import { addContent, deleteContent, getContent, getContents, updateContent } from '../controllers/contentController'
import { addImage, deleteImage, getImage, getImages, updateImage } from '../controllers/imageController'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController'
import { addTag, deleteTag, getTag, getTags, updateTag } from '../controllers/tagController'
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

router.get('/tags', getTags)

router.get('/tag/:id', getTag)

router.post('/tag', addTag)

router.put('/tag/:id', updateTag)

router.delete('/tag/:id', deleteTag)

router.get('/bookmarks', getBookmarks)

router.get('/bookmark/:id', getBookmark)

router.post('/bookmark', addBookmark)

router.put('/bookmark/:id', updateBookmark)

router.delete('/bookmark/:id', deleteBookmark)

router.get('/comments', getComments)

router.get('/comment/:id', getComment)

router.post('/comment', addComment)

router.put('/comment/:id', updateComment)

router.delete('/comment/:id', deleteComment)

export default router
// module.exports = router;