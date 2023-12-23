import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  FirebaseStorage,
  getStorage,
  ref,
  StorageReference,
  getDownloadURL,
} from 'firebase/storage';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private storage: FirebaseStorage;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.storage = getStorage(app);
  }

  public getAvatarUrl(fileName: string): Observable<string> {
    const storageReference: StorageReference = ref(this.storage, fileName);
    return from(getDownloadURL(storageReference));
  }
}
