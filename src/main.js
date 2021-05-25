import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mitt from 'mitt';
const emitter = mitt();
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
app.provide('emitter', emitter);
app
  .use(store).use(router)
  .use(VueAxios, axios)
  .mount("#app");
