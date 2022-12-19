import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  sideMenuToggle() {
    if(document.getElementById("navBar").style.width == "20vh")
    {
      document.getElementById("navBar").style.width = "10vh";
      document.getElementById("homePage").textContent = "";
      document.getElementById("homeOSPage").textContent = "";
    }
    else
    {
      document.getElementById("navBar").style.width = "20vh";
      document.getElementById("homePage").style.fontSize = "16px";
      document.getElementById("homePage").textContent = "Home Page";  
      document.getElementById("homeOSPage").style.fontSize = "16px";
      document.getElementById("homeOSPage").textContent = "Home OS";  
    }
  }
}
