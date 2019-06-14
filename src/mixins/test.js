import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    remindData: {}
  }
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
  getUCRemindVO() {
    let {api} = this.$parent.globalData
    api.study.getUCRemindVO().then(({data}) => {
      this.remindData = data.resultData
    })
  }
  onShow() {
    this.getUCRemindVO()
  }
}
