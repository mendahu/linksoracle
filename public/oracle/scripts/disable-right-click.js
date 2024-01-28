function disableRightClick() {
  document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("mousedown", function(e) {
      let isRightMB;
      e = e || window.event;

      if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
          isRightMB = e.which == 3; 
      else if ("button" in e)  // IE, Opera 
          isRightMB = e.button == 2; 

      if (isRightMB) {
          alert('Copyright 1999 Ganon (links_oracle@hotmail.com)')
      }
    }, false)
  })
}