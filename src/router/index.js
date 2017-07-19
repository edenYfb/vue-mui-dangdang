import Vue from 'vue'
import Router from 'vue-router'

//导航栏主要
import Home from '../components/home/Home.vue'
import Classify from '../components/classify/Classify.vue'
import Discover from '../components/discover/Discover.vue'
import Buy from '../components/buy/Buy.vue'
import Self from '../components/self/Self.vue'
import Message from '../components/message/Message.vue'
//注册登录
import Login from '../components/loginRegister/Login.vue'
import Register from '../components/loginRegister/Register.vue'
import Forget from '../components/loginRegister/Forget.vue'
//侧滑栏组件
import Aside from '../components/aside/Aside.vue'
import HomeAside from '../components/aside/components/HomeAside.vue'
import ClassifyAside from '../components/aside/components/ClassifyAside.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{path: '/home', components: {main: Home, aside: HomeAside}},
		{path: '/classify', components: {main: Classify, aside: ClassifyAside}},
		{path: '/discover',components: {main: Discover}},
		{path: '/buy',components: {main: Buy}},
		{path: '/self',components: {main: Self}},
		{path: '/login',components: {main: Login}},
		{path: '/register',components: {main: Register}},
		{path: '/forget', components: {main: Forget}},
		{path: '/message', components: {main: Message}},
		{path: '/', redirect: '/home'}
	  ]
	}
);
router.beforeEach((to, from, next) => {
    if (to.matched.length == 0) {
        next('/home');
    } else {
        next()
    }
});
export default router
