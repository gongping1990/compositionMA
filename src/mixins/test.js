import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    remindData: {}
  }
  methods = {
    onChangeTabbar(event) {
      switch (event.detail) {
        case 0:
          wx.navigateTo({ url: '/pages/index' })
          break
        case 1:
          wx.navigateTo({ url: '/pages/praiseOfWorks' })
          break
        case 2:
          wx.navigateTo({ url: '/pages/card' })
          break
        case 3:
          wx.navigateTo({ url: '/pages/user' })
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
