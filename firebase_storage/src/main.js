// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBD1KXlWbVsnCB39bGIAMYbbVw-2CTHbXg",
  authDomain:"emailjs-d243d.firebaseapp.com",
  projectId:"emailjs-d243d",
  storageBucket:"emailjs-d243d.appspot.com",
  messagingSenderId:"113793824553",
  appId:"1:113793824553:web:c8e3d715a6b45663662938",
  measurementId:"G-79T0DMC7H1"
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


