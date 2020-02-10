import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../providers/seo.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.setTitle('Page not found');
  }

}
