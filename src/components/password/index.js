class PassWord {
  constructor (className, callback) {
    this.className = className
    this.init()
    this.realInput = ''
    this.maxLength = 6
    this.callback = callback
  }
  init () {
    const el = document.querySelector(this.className)
    if (!el) {
      throw 'can\'t find the specific className'
    }
    const html = `
        <input type="text" class="realInput" />
        <div class="bogusInput">
           <input type="password" maxlength="6" disabled/>
           <input type="password" maxlength="6" disabled/>
           <input type="password" maxlength="6" disabled/>
           <input type="password" maxlength="6" disabled/>
           <input type="password" maxlength="6" disabled/>
           <input type="password" maxlength="6" disabled/>
        </div>
      `
    el.insertAdjacentHTML('beforeend', html)
    this.bind(el)
  }
  bind (el) {
    const element = el.firstElementChild
    let bogusEl = element.nextElementSibling.children
    element.addEventListener('input', () => {
      element.value = element.value.replace(/\D/g, '')
      this.realInput = element.value
      let realStr = element.value
      for (var i = 0; i < this.maxLength; i++) {
        bogusEl[i].value = realStr[i] ? realStr[i] : ''
      }
      if (realStr.length >= this.maxLength) {
        element.value = realStr.substring(0, 6)
        this.realInput = element.value
        if (typeof  this.callback === 'function') {
          this.callback()
        }
      }
    })

  }

  /**
   *  返回
   * @returns {string}
   */
  getRealValue () {
    return this.realInput
  }
}

export default PassWord