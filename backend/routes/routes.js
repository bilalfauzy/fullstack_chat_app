const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const messageRoutes = require('./message.routes')

const routes = [
    {
        path: "/api/auth",
        handler: authRoutes
    },
    {
        path: "/api/users",
        handler: userRoutes
    },
    {
        path: "/api/messages",
        handler: messageRoutes
    },
]

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};