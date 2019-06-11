import wepy from 'wepy'

export default class initMixin extends wepy.mixin {
  watch = {
    userInfo(n) {
      console.log(n, 40000)
      if (n.id) {
        this.initPage()
      }
    }
  }
  onShow () {
    console.log(this.userInfo, 200)
    if (this.userInfo.id) {
      this.initPage()
    }
  }
}
