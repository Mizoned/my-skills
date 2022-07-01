import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import componentsUI from '@/components/UI'
import store from '@/store'
import directives from "@/directives";
import firebase from "./firebase";

import '@/assets/styles/main.css';

const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component);
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app
    .use(store)
    .use(router)
    .mount('#app');
