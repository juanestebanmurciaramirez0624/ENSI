import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTitleService } from 'src/app/services/router-title.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  pageTitle: string = '';
  username: string = 'username';

  constructor(private routerTitleService: RouterTitleService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    //Trae como valor el nombre de la url
    this.pageTitle = this.routerTitleService.getPageTitle();
  }
}