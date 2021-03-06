import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutHeader from '@/layout/layout-header.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   name: 'loading',
  //   component: () => import('../views/Loading.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  // >>>>>>>首页栏目
  {
    path: '',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: LayoutHeader,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    }]
    // >>>>>>>笔记栏目
  }, {
    path: '/note',
    name: 'note',
    meta: {
      title: '笔记'
    },
    component: LayoutHeader,
    redirect: '/note/noteList',
    children: [{
      path: 'noteList',
      name: 'noteList',
      component: () => import('../views/notes/NoteList.vue'),
      meta: {
        title: '笔记列表页'
      }
    }, {
      path: 'noteDetails',
      name: 'noteDetails',
      component: () => import('../views/notes/NoteDetails.vue'),
      meta: {
        title: '笔记详情页'
      }
    }]
    // >>>>>>>商城栏目
  }, {
    path: '/mall',
    name: 'mall',
    meta: {
      title: '商城'
    },
    component: LayoutHeader,
    redirect: '/mall/introduction',
    children: [{
      path: 'introduction',
      name: 'introduction',
      component: () => import('../views/mall/Introduction.vue'),
      meta: {
        title: '橘子介绍'
      }
    }, {
      path: 'purchase',
      name: 'purchase',
      component: () => import('../views/mall/Purchase.vue'),
      meta: {
        title: '下单页面'
      }
    }, {
      path: 'payment',
      name: 'payment',
      component: () => import('../views/mall/Payment.vue'),
      meta: {
        title: '支付页面'
      }
    }, {
      path: 'management',
      name: 'management',
      component: () => import('../views/mall/Management.vue'),
      meta: {
        title: '管理页面'
      }
    }, {
      path: 'heiwu-list',
      name: 'heiwu-list',
      component: () => import('../views/heiwu/heiwu-suggsetion.vue'),
      meta: {
        title: '黑物留言列表页面'
      }
    }]
    // >>>>>>>黑物栏目
  }, {
    path: '/heiwu',
    name: 'heiwu',
    meta: {
      title: '黑物'
    },
    component: LayoutHeader,
    redirect: '/heiwu/heiwu-suggsetion',
    children: [{
      path: 'heiwu-suggsetion',
      name: 'heiwu-suggsetion',
      component: () => import('../views/heiwu/heiwu-suggsetion.vue'),
      meta: {
        title: '小黑意见箱列表页面'
      }
    }, {
      path: 'heiwu-funDreamMachine',
      name: 'heiwu-funDreamMachine',
      component: () => import('../views/heiwu/heiwu-funDreamMachine.vue'),
      meta: {
        title: '趣味造梦机列表页面'
      }
    }, {
      path: 'heiwu-manage',
      name: 'heiwu-manage',
      component: () => import('../views/heiwu/heiwu-manage.vue'),
      meta: {
        title: '菜单管理'
      }
    }]
    // >>>>>>>我要提建议栏目
  }, {
    path: '/suggestion',
    name: 'suggestion',
    meta: {
      title: '我要提建议'
    },
    component: LayoutHeader,
    // redirect: '/suggestion',
    children: [{
      path: '/suggestion',
      name: 'suggestion',
      component: () => import('../views/suggestion/Suggestion.vue'),
      meta: {
        title: '我要提建议'
      }
    }]
  },
  {
    path: '/downloadPicture',
    name: 'downloadPicture',
    component: () => import('../views/DownloadPicture.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
