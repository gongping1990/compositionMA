import wepy from 'wepy'
import { getStore } from 'wepy-redux'

const store = getStore()
export default class testMixin extends wepy.mixin {
  methods = {
    onChangeTabbar(event) {
      switch (event.detail) {
        case 0:
          wx.redirectTo({ url: '/pages/index' })
          break
        case 1:
          if (this.logined && !this.remindData.hasChild) {
            wx.setStorageSync('redirect', '/pages/lesson')
            wx.redirectTo({ url: '/user/info' })
          } else {
            wx.redirectTo({ url: '/pages/lesson' })
          }
          break
        case 2:
          wx.redirectTo({ url: '/pages/server' })
          break
        case 3:
          wx.redirectTo({ url: '/pages/user' })
          break
      }
    }
  }
  getBottomTipsVO() {
    let { api } = this.$parent.globalData
    api.center
      .getBottomTipsVO()
      .then(({ data }) => {
        store.dispatch({ type: 'UPDATE_TAB_REMIND', payload: data.resultData })
      })
      .catch(e => {})
  }
  onShow() {
    this.getBottomTipsVO()
  }
}
