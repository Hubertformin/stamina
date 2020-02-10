import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../providers/seo.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.setTitle('Privacy policy');
  }

}
