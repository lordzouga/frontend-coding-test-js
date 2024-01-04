import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import ExerciseLayout from '../components/layout/ExerciseLayout.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import PokemonItems from '../views/PokemonItems.vue';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
]

const exerciseRoutes = [
    {
        path: '',
        name: 'PokemonItems',
        component: PokemonItems
    }
]

const routes = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: ExerciseLayout,
    children: exerciseRoutes
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
