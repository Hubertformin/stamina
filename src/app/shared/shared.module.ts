import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzAlertModule,
  NzBadgeModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzCalendarModule, NzFormModule,
  NzIconModule, NzInputModule,
  NzMenuModule,
  NzMessageModule, NzModalModule,
  NzPageHeaderModule, NzSelectModule, NzTimePickerModule
} from 'ng-zorro-antd';

const modules = [
  NzMenuModule,
  NzMessageModule,
  NzButtonModule,
  NzIconModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzCalendarModule,
  NzBadgeModule,
  NzModalModule,
  NzAlertModule,
  NzFormModule,
  NzTimePickerModule,
  NzInputModule,
  NzSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
