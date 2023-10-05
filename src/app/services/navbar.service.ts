import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  navbarS(classToAdd: string, classToRemove: string): void {
    const element = document.getElementById('changeClass');
  
    if (element) {
      if (element.classList.contains(classToRemove)) {
        element.classList.remove(classToRemove);
        element.classList.add(classToAdd);
      } else {
        element.classList.remove(classToAdd);
        element.classList.add(classToRemove);
      }
    }
  }
  
  navbarC(): void{
  const elementClose = document.getElementById('close');

  if (elementClose) {
    elementClose.classList.toggle('close');
  }
}

  themeTogle(): void{
    const theme = document.getElementById('dark');

    if(theme){
      theme.classList.toggle('dark')
    }
  }
}