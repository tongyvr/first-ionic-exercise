import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName;
  userSignedIn = false;

  // constructor(public navCtrl: NavController,
  //   private afAuth: AngularFireAuth) {
  //   afAuth.authState.subscribe(user => {
  //     if (!user) {
  //       this.displayName = null;
  //       this.userSignedIn = false;
  //       return;
  //     }
  //     this.displayName = user.displayName;
  //     this.userSignedIn = true;
  //   });
  // }
  //
  // signInWithFacebook() {
  //   this.afAuth.auth
  //     .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then(res => console.log(res));
  // }
  //
  // signOut() {
  //   this.afAuth.auth.signOut();
  // }


}
