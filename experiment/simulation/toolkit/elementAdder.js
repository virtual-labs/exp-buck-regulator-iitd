const ElementAdder = {
  init() {
    let headSources = `
      <link rel="stylesheet" href="./toolkit/fix_styling.css">
      <link rel="stylesheet" href="./toolkit/toolkit.css">
      <link rel="stylesheet" href="./toolkit/main_spinner.css">
      <script src="./toolkit/toolkit.js"></script>
    `

    let htmlElementMainSpinner = `
      <div class="main-spinner">
        <div class="loader">
            <span></span>
        </div>
        <p class="text">For Better User Experience, <span>reset zoom to 100% <br>(by pressing 'Ctrl + 0')</span> and <span>refresh the page (by pressing 'Ctrl + R')</span></p>
      </div>
    `

    let htmlElementToolkit = `
      <div class="toolkit">
        <div class="btn-group">
          <!-- <button class="btn mute">
            <img class="btn-mute btn-logo"
                src="./src/images/template_imgs/speech_off_btn.png"
                title="Click To Mute"
              />
          </button> -->
          <button class="btn btn-download-pdf" title="Download">
            <span class="title">Download</span>
            <img class="btn-logo" src="./toolkit/btn_download.png" alt="">
          </button>
        </div>
        <img class="blinkArrowYellow" src="./toolkit/setBlinkArrowYellow.png">
      </div>
    `

    get("head").innerHTML += headSources
    get("body").innerHTML += htmlElementMainSpinner
    get(".main-container").innerHTML += htmlElementToolkit

  },
};





