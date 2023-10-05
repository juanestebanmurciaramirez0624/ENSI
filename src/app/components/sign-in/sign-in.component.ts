import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/users';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  fullName: string = '';
  gender: string = '';
  typeDocument: string = '';
  document: number = 0;
  phone: string = '';
  email: string = '';
  address: string = '';
  role: string = '';
  username: string = '';
  password: string = '';
  loading: boolean = false

  constructor(private toastr: ToastrService, private userService: UserService, private router: Router, private errorService: ErrorService) {}

  formLogin: FormGroup = new FormGroup({});

  addUser(){
    //validar que el usuario no deje campos vacios
    if(this.fullName == ''){
      this.toastr.error('El nombre es obligatorio', 'Error');
      return;
    }else if(this.gender == ''){
      this.toastr.error('El genero es obligatorio', 'Error');
      return;
    }else if(this.typeDocument == ''){
      this.toastr.error('El tipo de documento es obligatorio', 'Error');
      return;
    }else if(this.document == 0){
      this.toastr.error('El numero de documento es obligatorio', 'Error');
      return;
    }else if(this.phone == ''){
      this.toastr.error('El telefono es obligatorio', 'Error');
      return;
    }else if(this.email == ''){
      this.toastr.error('El correo electronico es obligatorio', 'Error');
      return;
    }else if(this.address == ''){
      this.toastr.error('La direccion es obligatorio', 'Error');
      return;
    }else if(this.role == ''){
      this.toastr.error('El rol es obligatorio', 'Error');
      return;
    }else if(this.username == ''){
      this.toastr.error('El nombre de usuarios es obligatorio', 'Error');
      return;
    }else if(this.password == ''){
      this.toastr.error('La contraseña es obligatorio', 'Error');
      return;
    }

    //Crear obj o body
    const user: User = {
      fullName: this.fullName,
      gender: this.gender,
      typeDocument: this.typeDocument,
      document: this.document,
      phone: this.phone,
      email: this.email,
      address: this.address,
      role: this.role,
      username: this.username,
      password: this.password
    }
  
    this.loading = true;
    this.userService.singIn(user).subscribe({ 
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El ${this.username} fue registrado con exito', 'Usuario registrado`);
        this.router.navigate(['/bienvenido']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.errorService.megError(e);
      }
    })
  }

  ngOnInit(): void {
  }

  displaymodal: boolean = false;
  showModal(){
    this.displaymodal = true;
    console.log(this.displaymodal)
  }
}
