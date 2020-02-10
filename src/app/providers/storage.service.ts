import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private afs: AngularFireStorage) { }
  /**
   * @method uploadFile
   */
  uploadFile(filePath, file) {
    return this.afs.upload(filePath, file);
  }

  deleteFile(url: string) {
    return this.afs.storage.refFromURL(url).delete();
  }
}
