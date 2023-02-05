import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  sideMenuToggle() {
    if(document.getElementById("navBar").style.width === "20vh")
    {
      document.getElementById("navBar").style.width = "7vh";
      document.getElementById("homePageText").style.display = 'none';
      document.getElementById("homeOSPageText").style.display = 'none';
    }
    else
    {
      document.getElementById("navBar").style.width = "20vh";
      setTimeout(function (){
        document.getElementById("homePageText").style.fontSize = "16px";
        document.getElementById("homePageText").style.padding = "0px 0px 0px 5px";
        document.getElementById("homePageText").style.display = 'inline';
        document.getElementById("homeOSPageText").style.fontSize = "16px";
        document.getElementById("homeOSPageText").style.padding = "0px 0px 0px 5px";
        document.getElementById("homeOSPageText").style.display = 'inline';
      },200)
    }
  }
}
