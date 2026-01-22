const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create ({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            user: req.user.id
        })
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'error', error: error.message });
    }
}

exports.getTask = async(req, res) => {
    try {
        const tasks = await Task.find({
            user:req.user.id
        })
        res.json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.getTaskById = async(req,res)=>{
    try {
        const task = await Task.findOne({
            _id:req.params.id,
            user:req.user.id
        })
        if(!task){
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    }
    catch (error){
        res.status(500).json({ message: 'Error fetching task', error: error.message })
    }

}

exports.updateTask = async(req,res)=>{
    try {
        const task = await Task.findOneAndUpdate({
            _id: req.params.id,
            user:req.user.id
        },
        {
            title:req.body.title,
            description:req.body.description,
            status:req.body.status
        },
        { new: true }
        )
        if(!task){
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error: error.message })
    }
}

exports.patchTask = async(req,res)=>{
    try {
        const task = await Task.findOneAndUpdate({
            _id: req.params.id,
            user:req.user.id
        },
        req.body,
        { new: true, runValidators: true }
        )
        if(!task){
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({ message: 'Error patching task', error: error.message })
    }
}

exports.deleteTask = async(req,res)=>{
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            user:req.user.id
        })
        if(!task){
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json({ message: 'Task deleted successfully', task })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message })
    }
}