import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView    from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticlePage from '../components/ArticlePage.vue'
import LoginView   from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleView
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticlePage,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
