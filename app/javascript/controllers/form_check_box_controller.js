import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-check-box"
export default class extends Controller {

  connect() {
    this.switch();
  }

  switch(){
    const checkBox = document.getElementById('scheduled_check_box');
    const dateSelector = document.getElementById('scheduled_date');
    if(checkBox.checked) {
      dateSelector.style.display = 'block';
    }else{
      dateSelector.style.display = 'none';
    }
  }

}
