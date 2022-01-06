import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RedirectsService {

  constructor(private router: Router) { }

  /**
   * goToHome
  : void */
  public goToHome(): void {
    this.router.navigate(['/home']);
  }

  public goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
