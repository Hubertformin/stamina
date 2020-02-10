import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {SeoService} from '../../providers/seo.service';
import {NzMessageService} from 'ng-zorro-antd';
import {StorageService} from '../../providers/storage.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  createPostForm: FormGroup;
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };
  selectedDate: Date;
  isCreateModalVisible = false;
  isAddingPostLoading = false;
  importedImages = [];

  constructor(private fb: FormBuilder,
              private title: SeoService,
              private storage: StorageService,
              private msg: NzMessageService) {
    this.title.setTitle('Schedule Post');
  }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      label: 'New post',
      locationID: '',
      caption: '',
      time: new Date(),
      photoUrls: this.fb.array([])
    });
  }

  get photos_control() {
    return this.createPostForm.get('photoUrls') as FormArray;
  }
  get time_control() {
    return this.createPostForm.get('time');
  }

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  onDateSelected(date: Date) {
    date.setHours(23, 59, 59);
    if (date < new Date()) {
      this.msg.warning('Please select today or a future date');
      this.selectedDate = null;
      return;
    }
    this.selectedDate = date;
  }

  onSubmitPost() {
    console.log('adding');
    console.log(this.createPostForm);
  }

  onFileSelected($event) {
    // when a file is selected...
    for (const file of $event.target.files) {
      this.importedImages.push(file);
    }
  }
}
