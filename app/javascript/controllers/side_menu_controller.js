import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  sideMenuToggle() {
    const nav = document.getElementById("navBar");
    const homePageText = document.getElementById("homePageText");
    const homeOSPageText = document.getElementById("homeOSPageText");
    const tasksPageText = document.getElementById("tasksPageText");
    if(nav.style.width === "20vh")
    {
      homePageText.style.display = 'none';
      homeOSPageText.style.display = 'none';
      tasksPageText.style.display = 'none';
      nav.style.width = "7vh";
    }
    else
    {
      nav.style.width = "20vh";
      setTimeout(function (){
        homePageText.style.fontSize = "16px";
        homePageText.style.padding = "0px 0px 0px 5px";
        homePageText.style.display = 'inline';
        homeOSPageText.style.fontSize = "16px";
        homeOSPageText.style.padding = "0px 0px 0px 5px";
        homeOSPageText.style.display = 'inline';
        tasksPageText.style.fontSize = "16px";
        tasksPageText.style.padding = "0px 0px 0px 5px";
        tasksPageText.style.display = 'inline';
      },200)
    }
  }

  sideMenuToggleMedia(){
    const nav = document.getElementById("navBar");
    const homePageText = document.getElementById("homePageText");
    const homeOSPageText = document.getElementById("homeOSPageText");
    const tasksPageText = document.getElementById("tasksPageText");
    if(nav.style.width === "40vh")
    {
      nav.style.width = '0';
    }
    else
    {
      nav.style.width = "40vh";
      setTimeout(function (){
        homePageText.style.fontSize = "16px";
        homePageText.style.padding = "0px 0px 0px 5px";
        homePageText.style.display = 'inline';
        homeOSPageText.style.fontSize = "16px";
        homeOSPageText.style.padding = "0px 0px 0px 5px";
        homeOSPageText.style.display = 'inline';
        tasksPageText.style.fontSize = "16px";
        tasksPageText.style.padding = "0px 0px 0px 5px";
        tasksPageText.style.display = 'inline';
      },200)
    }
  }
}
