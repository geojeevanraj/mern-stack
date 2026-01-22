const express = require('express');
const router = express.Router();

const { createTask, getTask, getTaskById, updateTask, patchTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware')

router.post('/newTask', protect, createTask);
router.get('/getTask', protect, getTask)
router.get("/getTask/:id",protect,getTaskById)
router.put("/updateTask/:id",protect,updateTask)
router.patch("/patchTask/:id",protect,patchTask)
router.delete("/deleteTask/:id",protect,deleteTask)

module.exports = router;