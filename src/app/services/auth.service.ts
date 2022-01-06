import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
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
    }catch(e){
      console.log(e);
    }
  }

  public async logout(): Promise<void>{
    await this.fireAuth.signOut()
  }
}
