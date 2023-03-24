import routes from './routes'
import {authentication} from '../API'

import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

router.beforeEach(async (to, from) => {
    // Try to authenticate with token if exists
    if(to.meta?.requiresAuth===true) {
        const authenticated = await authentication.isAuthenticated()
        if(!authenticated && to.name!=='login') return {
            name: 'login',
            query: { redirect: to.fullPath },
        }
        return true
    }
    return true
  })

export default router