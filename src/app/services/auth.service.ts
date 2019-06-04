import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    )
  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.addUserDataIfNotExist(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  private addUserDataIfNotExist({ uid, email, displayName }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    userRef.valueChanges().subscribe(res => {
      if (!res) {
        console.log('doesnt exist')
        const data = {
          uid,
          email,
          displayName
        };

        return userRef.set(data, { merge: true });
      }
    })


  }
}
