import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title) { }
  /*
  * set page's title
  * */
  setTitle(title) {
    this.title.setTitle(`${title} - Stamina scheduler`);
  }
}
