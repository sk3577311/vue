import { createWebHistory, createRouter } from "vue-router";
import HomeApp from '../components/HomeApp.vue'
import UserList from '../components/UserList.vue'
import UserDetails from '@/components/UserDetails'
import MyRegistration from '@/components/MyRegistration'
import MyLogin from "@/components/MyLogin.vue";
 
 
  const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp,
  },
  {
    path: '/login',
    name: 'login',
    component: MyLogin,
  },
  {
    path: '/users',
    name: 'userlist',
    component: UserList,
  },
  {
    path: '/users/:userID',
    name: 'userdetails',
    component: UserDetails,
  },
  {
    path: '/about',
    name: 'MyRegistration',
    component: MyRegistration,
  },
]
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;