import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import Cordova from "./plugin.cordova";

Vue.config.productionTip = false;
Vue.use(Cordova);

// Remove 300ms delay on mobile links
// Use class="needsclick" on an element to selectively disable
FastClick.attach(document.body);

const app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    console.log("Received deviceready event");

    document.addEventListener("pause", this.pause.bind(this), false);
    document.addEventListener("resume", this.resume.bind(this), false);
  },

  pause: function() {
    console.log("Received pause event");
  },

  resume: function() {
    console.log("Received resume event");
  }
};

app.initialize();
