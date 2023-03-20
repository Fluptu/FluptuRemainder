import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-check-box"
export default class extends Controller {
  connect() {
    document.getElementById('scheduled_date').visibility = true;
  }

  switch(){
    const x = document.getElementById('scheduled_check_box').checked;
    if (x == true){
      document.getElementById('scheduled_date').disabled = false;
    }
  }
}
