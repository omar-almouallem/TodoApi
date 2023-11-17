import express from 'express';

import * as TodoContolleres from '../controllers/todo-controller';

const router = express.Router();

router.get('/', TodoContolleres.getAllTodo);

router.get('/isCompleted', TodoContolleres.getTodoCompleated);

router.get('/isActive', TodoContolleres.getActiveTodo);

router.put('/complete/:id', TodoContolleres.completeTodo);

router.post('/', TodoContolleres.createNewTodo);

router.delete('/:id', TodoContolleres.deleteTodo);

module.exports = router;
