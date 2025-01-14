// root launch args
function init() {
  pageInit(); // pageInit() args
  // ...
}

function isPWA() { // PWA check
  
  var isPWA = new URLSearchParams(window.location.search).get("isPWA");

  if (isPWA == 1) {} else { window.location.replace("/notPWA") }
  // {} = do nothing

}