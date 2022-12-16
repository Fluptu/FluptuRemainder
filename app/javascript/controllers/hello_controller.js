import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  greet() {
    if(document.getElementById("navBar").style.width == "20vh"){
      this.element.style.marginLeft="0vh";
      document.getElementById("navBar").style.width = "10vh";
      document.getElementById("main").style.marginLeft = "10vh";  
      document.getElementById("homePage").textContent = "1";
    }else{
      this.element.style.marginLeft="10vh";
      document.getElementById("navBar").style.width = "20vh";
      document.getElementById("main").style.marginLeft = "20vh";  
      document.getElementById("homePage").textContent = "Pełna nazwa";  
    }
      //document.getElementById("mySidebar").style.width = "10vh";
      //document.getElementById("main").style.marginLeft= "10vh";
    
  }
}
