import { Component, OnInit } from '@angular/core';
import { Snack } from 'src/app/interfaces/snacks';
import { SnacksService } from 'src/app/services/snacks.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  listSnack: Snack[] = []

  constructor(private snanckService: SnacksService){}

  ngOnInit(): void {
    this.getSnack();
  }

  getSnack(){
    this.snanckService.getSnancks().subscribe(data => {
      this.listSnack = data;
    })
  }

}
