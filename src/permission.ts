// 路由鉴权 ：项目中路由能不能被访问的权限的设置
// 某一个路由什么条件下可以访问 什么条件下不能访问

import router from '@/router'

// 获取用户相关小仓库内部token数据 去判断用户是否登陆成功
import { useUserStore } from './store/index.js'
// 组件外访问小仓库是访问不到的 需要访问 大仓库
import pinia from './store'
const userStore = useUserStore(pinia)

// 全局守卫: 项目中任意路由切换都会触发的钩子
// 全局前置守卫 访问某一个路由之前守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  // to => 将要访问哪个路由
  // from => 从哪个路由而来
  // next => 路由放行函数
  // 获取token 判断用户登录还是未登录
  const token = userStore.token
  // 获取用户名字
  const username = userStore.userInfo.username
  if (token) {
    // 登陆成功 想访问login 不能访问指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      // 登陆成功访问其余6个路由
      // 有用户信息
      if (username) {
        next()
      } else {
        // 没有用户信息 在守卫这发请求 获取到了用户信息在放行
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          // 没有用户信息 并且发请求还没拿到
          // token过期，获取不到信息了 / 用户手动修改了本地存储token
          // 退出登录 => 用户相关的数据清空
          await userStore.userLogout()
          // 退出成功后 立即回到登录页
          next({ path: '/login', redirect: to.path })
        }
      }
    }
  } else {
    // 用户未登录判断
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  next()
})

// 全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
  // nprogress.done() // 关闭进度条
  // // 每次跳转后 修改对应页面标题 根据路由设置的名字
  // document.title = `${setting.title} - ${to.meta.title}`
})

/**
 *  1. 任意路由切换实现【进度条】业务  -- 【pnpm i nprogress】
 *  2. 路由鉴权(路由组件访问权限的设置)
 *      全部路由组件: 登录|404|任意路由|首页|数据大屏|权限管理(3)|商品管理(4)
 *    用户未登录 => 只能访问login,其余的不能访问(指向login)
 *    用户已登录 => 不可访问login(指向首页),其余的路由可以访问
 */

// 最后需要在main.ts 中引入并使用
