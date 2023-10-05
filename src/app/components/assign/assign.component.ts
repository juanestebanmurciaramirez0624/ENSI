import { Component } from '@angular/core';
import { Assign } from 'src/app/interfaces/assigns';
import { AssignService } from 'src/app/services/assign.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent {

  listSnack: Assign[] = []

  constructor(private assignService: AssignService){}

  ngOnInit(): void {
    this.getAssign();
  }

  getAssign(){
    this.assignService.getAssign().subscribe(data => {
      this.listSnack = data;
    })
  }

}
