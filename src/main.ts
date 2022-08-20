import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatHello: (str: string) => `hello ${str}`,
};

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.mount('#app');
