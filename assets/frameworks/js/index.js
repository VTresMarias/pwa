function navQuery() {

  var vtm = new URLSearchParams(window.location.search).get("vtm");

  // related answer: https://stackoverflow.com/a/56825511 
  const importCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

  if (vtm == "story") {

    document.title = "STORY";
    
    document.getElementById("btn-lore").classList.add("iconActive");
    document.getElementById("cont-lore").style.display = "block";

    importCSS("@import url('assets/frameworks/css/nav/story.css');");

  } else if (vtm == "letter") {

    document.title = "LETTERS";
    
    document.getElementById("btn-letr").classList.add("iconActive");
    document.getElementById("cont-letr").style.display = "block";

    importCSS("@import url('assets/frameworks/css/nav/letter.css');");

  } else if (vtm == "press") {

    document.title = "PRESS";
    
    document.getElementById("btn-prss").classList.add("iconActive");
    document.getElementById("cont-prss").style.display = "block";

    importCSS("@import url('assets/frameworks/css/nav/press.css');");

  } else if (vtm == "cert") {

    document.title = "CERTIFICATE";
    
    document.getElementById("btn-cert").classList.add("iconActive");
    document.getElementById("cont-cert").style.display = "block";

    importCSS("@import url('assets/frameworks/css/nav/cert.css');");

  } else {

    document.title = "HOME";
    
    document.getElementById("btn-home").classList.add("iconActive");
    document.getElementById("cont-home").style.display = "block";

    importCSS("@import url('assets/frameworks/css/nav/home.css');");

  }

}