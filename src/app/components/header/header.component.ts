import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RedirectsService } from '../../services/redirects.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private authSrv: AuthService, private redirect: RedirectsService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authSrv.logout()

    setTimeout(() => {
      this.redirect.goToLogin()
    }, 100)
  }

}
