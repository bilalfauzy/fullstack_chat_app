const router = require('express').Router()
const getUsersForSidebar = require('../controllers/user.controller.js');
const protectRoute = require('../middleware/protectRoute.js')

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router