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
          wx.redirectTo({ url: '/pages/praiseOfWorks' })
          break
        case 2:
          wx.redirectTo({ url: '/pages/card' })
          break
        case 3:
          wx.redirectTo({ url: '/pages/user' })
          break
      }
    }
  }
  getUCRemindVOL() {
    let {api} = this.$parent.globalData
    api.study.getUCRemindVO().then(({data}) => {
      store.dispatch({ type: 'UPDATE_TAB_REMIND', payload: data.resultData })
    })
  }
  onShow() {
    this.getUCRemindVOL()
  }
}
