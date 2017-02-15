class Confirm {
  constructor ({
    tip = '',
    message = 'Are you sure',
    cancelButtonText = 'No',
    confirmButtonText = 'Yes'
    } = {}, cancel, confirm) {
    this.tip = tip
    this.message = message
    this.cancelButtonText = cancelButtonText
    this.confirmButtonText = confirmButtonText
    this.cancel = cancel
    this.confirm = confirm
    this.html = `
      <div class="ui-dialog-wraper">
        <div class="ui-dialog">
          <div class="ui-dialog-header">
            <div class="ui-dialog-title">
              <p style="text-align:center;">${this.tip}</p>
            </div>
          </div>
          <div class="ui-dialog-content">
            <div class="ui-dialog-message">
              <p style="text-align:center;">${this.message}</p>
            </div>
          </div>
          <div class="ui-dialog-btns ">
            <button class="ui-dialog-btn dialog-cancel">${this.cancelButtonText}</button>
            <button class="ui-dialog-btn dialog-confirm">${this.confirmButtonText}</button>
          </div>
        </div>
        <div class="ui-mask"></div>
      </div>
    `
    document.body.insertAdjacentHTML('beforeend', this.html)
    this.init()
  }

  init () {
    console.log('------' + this.tip)
    document.querySelector('.dialog-cancel').addEventListener('click', () => {
      if (typeof this.cancel === 'function') {
        this.cancel()
      }
      this.destroy()
    }, false)
    document.querySelector('.dialog-confirm').addEventListener('click', () => {
      if (typeof this.confirm === 'function') {
        this.confirm()
      }
      this.destroy()
    }, false)
  }

  destroy () {
    let el = document.querySelector('.ui-confirm-wraper')
    if (el) {
      document.body.removeChild(el)
    }
  }
}

function confirm ({message, cancelButtonText, confirmButtonText}, cancel, confirm) {
  return new Confirm({
    message,
    cancelButtonText,
    confirmButtonText
  }, cancel, confirm)
}

export default confirm
