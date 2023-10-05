import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent {

  displaymodal: boolean = false;
  showModal(){
    this.displaymodal = true;
    console.log(this.displaymodal)
  }
}
