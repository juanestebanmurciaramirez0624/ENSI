import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterTitleService {

  private pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // obtener la ruta actual
        let currentRoute = this.activatedRoute.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }

        // Extrae una parte en especifico de la url
        this.pageTitle = currentRoute.snapshot.url.join('/');
      });
  }

  //Guarda el resultado
  getPageTitle(): string {
    return this.pageTitle;
  }
}