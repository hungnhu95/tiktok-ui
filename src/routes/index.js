import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profiles from '~/pages/Profiles'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profiles', component: Profiles },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }