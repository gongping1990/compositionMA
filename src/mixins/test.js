import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    },
    onChangeTabbar(event) {
      switch (event.detail) {
        case 0:
          wx.redirectTo({ url: '/pages/index' });
          break;
        case 1:
          wx.redirectTo({ url: '/pages/praiseOfWorks' });
          break;
        case 2:
          wx.redirectTo({ url: '/pages/card' });
          break;
        case 3:
          wx.redirectTo({ url: '/pages/user' });
          break;
      }
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
