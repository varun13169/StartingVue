// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import App from './App'
import Users from './components/Users'
import MyFirstComponent from './components/MyFirstComponent'


Vue.use(vueResource);
Vue.use(vueRouter);

const myRouter = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {path:'/', components: Users},
    {path:'/test', components: MyFirstComponent}
  ]
});

Vue.config.productionTip = false

// new Vue({
//   router,
//   template: `
//   <div id="app">
//   <ul>
//     <li><router-link to="/">Users</router-link></li>
//     <li><router-link to="/test">MyFirstComponent</router-link></li>
//   </ul>
//   <router-view></router-view>
//   </div>`
// }).$mount('#app')



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



