import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor( private fb: FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group(
      {
        email:[
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]
        ],

        password:['', [Validators.required]]
      }
    )
  }

  public submit(): void {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.auth.login( email, password )
  }

  public loginWithGoogle(): void {
    this.auth.loginGoogle();
  }

}
