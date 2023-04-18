import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Notes from '../pages/Notes.vue'
import PageNotFound from '../pages/PageNotFound.vue'

// autori
import Autori from '../pages/Autori.vue'
import ListAutori from '../components/Autore/ListAutori.vue'
import CreateAutore from '../components/Autore/CreateAutore.vue'
import EditAutore from '../components/Autore/EditAutore.vue'

// authentication
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'
import * as settings from '../settings'

// items
import Items from '../pages/Items.vue'
import ListItems from '../components/Item/ListItems.vue'
import CreateItem from '../components/Item/CreateItem.vue'
import EditItem from '../components/Item/EditItem.vue'
import InfoItem from '../components/Item/InfoItem.vue'
import SearchItem from '../components/Item/SearchItem.vue'
import model1 from '../components/Item//PrintItem/model1.vue'


const routes = [
    { path: '/', component: MainLayout, children: [
        { path: '',  name: 'home', component: Home ,meta: { requiresAuth: true } },
        { path: '/profile',  name: 'user', component: User ,meta: { requiresAuth: true } },
        { path: '/notes',  name: 'notes', component: Notes, meta: { requiresAuth: true }  },
        { path: '/items/search', name: 'SearchItem', component: SearchItem,meta: { requiresAuth: true }, props: false, },
        { path: '/items/:collection', component: Items, children: [
            { path: '', name: 'listItems', component: ListItems },
            { path: 'create', name: 'createItem', component: CreateItem, props: true, },
            { path: 'edit/:id', name: 'editItem', component: EditItem, props: true, },
            { path: '/items/:collection/:id', name: 'infoItem', component: InfoItem, props: true, },
            { path: '/print', name: 'model1', component: model1, props: true, },


        ],props: true, meta: { requiresAuth: true } },
        { path: '/login',  name: 'login', component: Login },
        { path: '/logout',  name: 'logout', component: Logout },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },

    ] },
]

export default routes