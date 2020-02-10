import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../providers/seo.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.setTitle('Terms and conditions');
  }

}
