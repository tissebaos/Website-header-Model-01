/*-- main.js --*/
/*-- By Togodba Tissébé Jean (Tissébaos) --*/

function smaller_menu_display (id) {
  if (document.getElementById(id).style.transform == "translateY(0%)") {
    document.getElementById(id).style.transform = "translateY(-100%)"
  } else {
    document.getElementById(id).style.transform = "translateY(0%)"
  }
}