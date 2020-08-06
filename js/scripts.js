const routes = [
    { name: 'not-found', path: '*', component: NotFound },
    { name: 'home', path: '/', component: Home },
    { name: 'view', path: '/view/:id', component: View}
];

const router = new VueRouter({
    routes 
})

let app = new Vue({
    el: '#app',
    router: router,
    data: {
        currentRoute: window.location.pathname,
    },
    methods: {
    },
})

