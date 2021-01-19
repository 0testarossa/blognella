"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contentController_1 = require("../controllers/contentController");
const imageController_1 = require("../controllers/imageController");
const postController_1 = require("../controllers/postController");
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
router.get('/images', imageController_1.getImages);
router.get('/image/:id', imageController_1.getImage);
router.post('/image', imageController_1.addImage);
router.put('/image/:id', imageController_1.updateImage);
router.delete('/image/:id', imageController_1.deleteImage);
router.get('/contents', contentController_1.getContents);
router.get('/content/:id', contentController_1.getContent);
router.post('/content', contentController_1.addContent);
router.put('/content/:id', contentController_1.updateContent);
router.delete('/content/:id', contentController_1.deleteContent);
router.get('/posts', postController_1.getPosts);
router.get('/post/:id', postController_1.getPost);
router.post('/post', postController_1.addPost);
router.put('/post/:id', postController_1.updatePost);
router.delete('/post/:id', postController_1.deletePost);
exports.default = router;
// module.exports = router;
//# sourceMappingURL=index.js.map