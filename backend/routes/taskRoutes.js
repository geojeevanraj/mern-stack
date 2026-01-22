const express = require('express');
const router = express.Router();

const { createTask, getTask, getTaskById, updateTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware')

router.post('/newTask', protect, createTask);
router.get('/getTask', protect, getTask)
router.get("/getTask/:id",protect,getTaskById)
router.put("/updateTask/:id",protect,updateTask)

module.exports = router;