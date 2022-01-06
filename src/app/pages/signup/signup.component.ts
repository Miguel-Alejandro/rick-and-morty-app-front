import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  public initForm(): void {
    this.form = this.fb.group({
      email:[
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]
      ],

      password:[ '', [Validators.required]]
    })
  }


  public async submitForm(): Promise<void>{
    const email = this.form.value.email
    const password = this.form.value.password
    await this.auth.createAcount(email, password);
  }

}
