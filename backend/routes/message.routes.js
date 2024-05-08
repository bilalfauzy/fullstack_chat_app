const { getMessages, sendMessages } = require('../controllers/message.controller.js')
const router = require('express').Router()
const protectRoute = require('../middleware/protectRoute.js')

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

module.exports = router

