import wepy from 'wepy'

export default class initMixin extends wepy.mixin {
  watch = {
    userInfo(n) {
      if (n.id) {
        this.initPage()
      }
    }
  }
  onShow () {
    if (this.userInfo.id) {
      this.initPage()
    }
  }
}
