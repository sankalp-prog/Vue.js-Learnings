import { createApp } from 'vue';
import App from './App.vue'
import FriendsList from './components/FriendsList.vue';
import NewFriend from './components/NewFriend.vue'

const app = createApp(App)

app.component('friend-list', FriendsList)
app.component('new-friend', NewFriend)

app.mount('#app');
