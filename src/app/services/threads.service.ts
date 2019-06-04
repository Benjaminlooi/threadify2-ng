import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getThreads() {
    return this.firestore.collection('threads_main', ref => ref.orderBy('timestamp', 'asc')).snapshotChanges();
  }

  createThread(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('threads_main').add(data).then(res => { }, err => { reject(err) });
    })
  }
}
