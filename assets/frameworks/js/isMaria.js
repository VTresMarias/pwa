function isMaria() {
  
  var isMaria = new URLSearchParams(window.location.search).get("isMaria");

  switch(isMaria) {
    case "1":
      document.getElementById("mariaNm").innerHTML = "the First Maria🍃";
      document.getElementById("mariaPfp").src = "https://vtresmarias.github.io/assets/images/profile/maria_pfp_" + isMaria + ".png";
      document.getElementById("mariaPfp").alt = "Mother Agatha, the First Maria🍃";
      window.location.replace("https://thebelovedmoon.github.io");
      break;
    case "2":
      document.getElementById("mariaNm").innerHTML = "the Second Maria🪷";
      document.getElementById("mariaPfp").src = "https://vtresmarias.github.io/assets/images/profile/maria_pfp_" + isMaria + ".png";
      document.getElementById("mariaPfp").alt = "Aura Ostara, the Second Maria🪷";
      window.location.replace("https://thebelovedmoon.github.io/auraostara");
      break;
    case "3":
      document.getElementById("mariaNm").innerHTML = "the Third Maria🌸";
      document.getElementById("mariaPfp").src = "https://vtresmarias.github.io/assets/images/profile/maria_pfp_" + isMaria + ".png";
      document.getElementById("mariaPfp").alt = "Hina Oujo, the Third Maria🌸";
      window.location.replace("https://thebelovedmoon.github.io/hinaoujo");
      break;
    default:
      // some of isPWA() code is in here cuz for some reason the html does not read the codeblock lmao
      var isPWA = new URLSearchParams(window.location.search).get("isPWA");
      if (isPWA == null) { window.location.replace("/notPWA"); } else { window.location.replace("/?isPWA=1"); }
      break;
  }

}