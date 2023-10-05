import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    //navbar
  @ViewChild('changeClass') changeClass!: ElementRef;
  constructor(private navbarService: NavbarService){}
  
  navbar(): void{
    this.navbarService.navbarS('active', 'content');
    this.navbarService.navbarC(); 
  }

  themeTogle(): void{
    this.navbarService.themeTogle();
  }

}
