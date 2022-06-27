import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import componentsUI from '@/components/UI'
import store from '@/store'

const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component);
});

app
    .use(store)
    .use(router)
    .mount('#app');
