import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/interfaces/login';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  
  constructor(private toastr: ToastrService, private userService: UserService, private router: Router, private errorService: ErrorService){}

  displayModal: boolean = false;

  showModal(){
    this.displayModal = true;
  }

  username: string = '';
  password: string = '';
  loading: boolean = false;

  login(){
        //validar que el usuario no deje campos vacios
        if(this.username == ''){
          this.toastr.error('El nombre de usuarios es obligatorio', 'Error');
          return;
        } else if(this.password == ''){
          this.toastr.error('La contraseña es obligatorio', 'Error');
          return;
  }

  //Creamos el obj
  const user: Login = {
    username: this.username,
    password: this.password
  }

  this.loading = true;
  this.userService.login(user).subscribe({
    next: (token) =>{
      localStorage.setItem('token', token)
      this.router.navigate(['/dashboard']);
    },
    error: (e: HttpErrorResponse) => {
      this.errorService.megError(e);
      this.loading = false;
    }
  })
}
}