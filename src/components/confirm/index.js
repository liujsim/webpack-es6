class Confirm {
  constructor ({
    message = 'Are you sure',
    cancelButtonText = 'No',
    confirmButtonText = 'Yes'
    } = {}, cancel, confirm) {
    this.message = message
    this.cancelButtonText = cancelButtonText
    this.confirmButtonText = confirmButtonText
    this.cancel = cancel
    this.confirm = confirm
    this.html = `
      <div class="ui_confirm_wraper">
        <div class="ui_confirm">
          <div class="ui_dialog_bd">
            <div class="ui_dialog_content">
              <p style="text-align:center;">${this.message}</p>
            </div>
          </div>
          <div class="ui_dialog_ft ">
            <button class="ui_dialog_btn dialog_cancel">${this.cancelButtonText}</button>
            <button class="ui_dialog_btn dialog_confirm">${this.confirmButtonText}</button>
          </div>
        </div>
        <div class="ui_mask"></div>
      </div>
    `
    document.body.insertAdjacentHTML('beforeend', this.html)
    this.init()
  }

  init () {
    document.querySelector('.dialog_cancel').addEventListener('click', ()=> {
        if (typeof this.cancel === 'function') {
          this.cancel()
        }
        this.destroy()
      }
      , false)
    document.querySelector('.dialog_confirm').addEventListener('click', () => {
      if (typeof this.confirm === 'function') {
        this.confirm()
      }
      this.destroy()
    }, false)
  }

  destroy () {
    let el = document.querySelector('.ui_confirm_wraper')
    if (el) {
      document.body.removeChild(el)
    }
  }
}

export default Confirm
