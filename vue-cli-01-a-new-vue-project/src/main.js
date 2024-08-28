import { createApp } from 'vue';
import App from './App.vue'
import FriendsList from './components/FriendsList.vue';

const app = createApp(App)

app.component('friend-list', FriendsList)

app.mount('#app');
