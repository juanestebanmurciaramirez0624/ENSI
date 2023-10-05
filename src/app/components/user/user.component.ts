import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listUser: User[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser().subscribe(data =>{
      this.listUser = data;
    })
  }
}
