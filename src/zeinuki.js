(function(){
    document.querySelector(".a-color-price").textContent +=
               "｜税抜き: " + Math.round( document.querySelector(".a-color-price").textContent.replace(/[^0-9]/g, '') / 1.08 ) + "円"
    })()