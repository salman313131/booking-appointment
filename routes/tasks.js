const express = require('express')
const router = express.Router()
const taskController = require('../controller/tasks')

router.get('/',taskController.getAllDetails)
router.post('/add',taskController.postDetails)
router.delete('/:userId',taskController.deleteUser)
router.get('/:userId',taskController.getDetail)

module.exports = router