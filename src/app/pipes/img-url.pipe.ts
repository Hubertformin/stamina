import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, ...args: any[]): any {
    return typeof value === 'string' ? value : this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(value));
  }

}
