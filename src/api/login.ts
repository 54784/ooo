import request from '@/utils/request'
// 登录接口
export const useLoginService = (username: string, password: string) => {
  return request.post('/api/user/login', {
    username,
    password
  })
}

// 获取用户信息
export const useGetUserInfo = () => {
  return request.get('/api/user/getUserInfo')
}

export const useLogoutService = () => {
  return request.post('api/user/logout')
}
