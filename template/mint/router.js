import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = (resolve) => {
  require.ensure(['./views/Home'], () => {
    resolve(require('./views/Home'))
  })
}

const NotFound = (resolve) => {
  require.ensure(['./views/NotFound'], () => {
    resolve(require('./views/NotFound'))
  })
}

const routes = [{
  path: '/',
  name: '首页',
  component: Home,
}, {
  path: '*',
  name: '404',
  component: NotFound,
}]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

router.afterEach((route) => {
  if (route) {
    document.title = route.name
  } else {
    document.title = '首页'
  }
})

export default router