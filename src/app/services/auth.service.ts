import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { RedirectsService } from '../services/redirects.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireAuth: AngularFireAuth, private redirect:RedirectsService ) { }

  public async createAcount( email:string, password:string ): Promise<void> {
    try{
      await this.fireAuth.createUserWithEmailAndPassword(email, password);
      await this.redirect.goToDashboard();
    }catch(err){
      console.log(err);
    }
  }


  public async login( email:string, password:string ): Promise<void>{
    try{
      await this.fireAuth.signInWithEmailAndPassword( email, password )
      await this.redirect.goToDashboard();
    }catch(err){
      console.log(err);
      
    }

  }


  public async loginGoogle(): Promise<void>{
    try{
      await this.fireAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
      await this.redirect.goToDashboard()
    }catch(err){
      console.log(err);
    }
  }

  public async logout(): Promise<void>{
    await this.fireAuth.signOut()

    setTimeout( () => {
      this.redirect.goToLogin();
    }, 100);
  }
}
