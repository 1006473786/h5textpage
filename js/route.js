function goBackminipage(route, params, val) {
        if (!params) {
            params = {};
        }

        let url;
        if (params) {
            url = route + "?_params=" + JSON.stringify(params);
        } else {
            url = route;
        }
        if (val === '1') {
            wx.miniProgram.navigateTo({ url: route }) //不能跳到 tabbar 页面
        } else if (val === '2') {
            wx.miniProgram.redirectTo({ url: route }) // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
        } else if (val === '3') {
            wx.miniProgram.switchTab({ url: route }) // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
        } else if (val === '4') {
            wx.miniProgram.postMessage({ url: route }) //向小程序发送消息
        } else if (val === '5') {
            wx.miniProgram.navigateBack({ url: route }) // 返回
        } else {
            wx.miniProgram.getEnv(function (res) { console.log(res.miniprogram) })
        }
  }

   
  module.exports = {
    goBackminipage
}