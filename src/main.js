
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import '../public/assets/extensions/bootstrap-icons/font/bootstrap-icons.css';
// import '../public/assets/compiled/css/app.css'
// import '../public/assets/compiled/css/app-dark.css'
// import '../public/assets/compiled/css/iconly.css'
// import '../public/assets/static/js/initTheme.js'
// import '../public/assets/static/js/components/dark.js'
// import '../public/assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js'
// import '../public/assets/compiled/js/app.js'
// import '../public/assets/static/js/pages/dashboard.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
