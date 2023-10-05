import { Component } from '@angular/core';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  logo = properties.logo;
  sede1 = properties.sede1;
  sede2 = properties.sede2;
  sede3 = properties.sede3;
  vision = properties.vision;
  mission = properties.mission;
  values = properties.values;

  ngOnInit(): void {
      // Llama al método mostrarAnoActual al inicializar el componente
      this.mostrarAnoActual();
  }

// Función para mostrar el menú de navegación
showNav(): void {
  // Busca el elemento en el DOM con el ID "navLinks" y lo asigna a la variable navLinks
  const navLinks: HTMLElement | null = document.getElementById("navLinks");

  // Verifica si navLinks no es nulo (es decir, si se encontró el elemento en el DOM)
  if (navLinks) {
    // Modifica la propiedad 'right' del elemento para mostrar el menú (right = 0)
    navLinks.style.right = "0";
  }
}

// Función para ocultar el menú de navegación
hideNav(): void {
  // Busca el elemento en el DOM con el ID "navLinks" y lo asigna a la variable navLinks
  const navLinks: HTMLElement | null = document.getElementById("navLinks");

  // Verifica si navLinks no es nulo (es decir, si se encontró el elemento en el DOM)
  if (navLinks) {
    // Modifica la propiedad 'right' del elemento para ocultar el menú (right = -200px)
    navLinks.style.right = "-200px";
  }
}
  // Funcion para mostrar el año actual en el elemento con el ID "year"
  mostrarAnoActual(): void {
  // Obtiene el año actual utilizando la clase Date de JavaScript
  const anioActual: number = new Date().getFullYear();
  // Busca el elemento en el DOM con el ID "year" y lo asigna a la variable elementoAnio
  const elementoAnio: HTMLElement | null = document.querySelector('#year');

  // Verifica si elementoAnio no es nulo (es decir, si se encontró el elemento en el DOM)
  if (elementoAnio) {
    // Modifica el contenido del elemento para mostrar el año actual
    elementoAnio.textContent += `${anioActual}`;
  }
}
}
