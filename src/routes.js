import Header from './components/Header.vue';
import Home from './components/Home.vue';

// Lazy Loading
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'bundleGroupName');
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'bundleGroupName');
}

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'bundleGroupName');
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'bundleGroupName');
}

const Fourohfour = resolve => {
  require.ensure(['./components/Fourohfour.vue'], () => {
    resolve(require('./components/Fourohfour.vue'));
  });
}

export const routes = [
  { path: '', components: { default: Home, 'header-top': Header } },
  { path: '/user', components: { default: User, 'header-bottom': Header }, children: [
    { path: '', component: UserStart  },
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('beforeEnter for UserDetail component');
      next();
    } },
    { path: ':id/edit', component: UserEdit, name: 'editUser'  }
  ] },
  { path: '/woot', redirect: '/user' },
  { path: '*', components: { default: Fourohfour, 'header-top': Header } }
];