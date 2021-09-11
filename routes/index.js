
import authRoutes from './auth.js'



const routes = function(app) {
    app.use('/', authRoutes)
}

export default routes