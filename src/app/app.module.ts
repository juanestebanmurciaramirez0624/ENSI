import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modal
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ToastrModule } from 'ngx-toastr';

//forms@
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//http
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

//imports components
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarService } from './services/navbar.service';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { SnackComponent } from './components/snack/snack.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { CourseComponent } from './components/course/course.component';
import { AssignComponent } from './components/assign/assign.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    SpinnerComponent,
    IndexComponent,
    ContactComponent,
    HeaderComponent,
    UserComponent,
    SnackComponent,
    MainHeaderComponent,
    ModifyUserComponent,
    DeleteUserComponent,
    CourseComponent,
    AssignComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ProgressSpinnerModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
