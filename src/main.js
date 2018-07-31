import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import { fabric } from "fabric";

Vue.use(fabric);
Vue.use(Buefy, {
  defaultIconPack: "fas"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
