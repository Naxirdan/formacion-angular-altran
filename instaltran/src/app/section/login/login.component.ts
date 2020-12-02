import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean;
  constructor(private fomBuilder: FormBuilder) {
    this.submitted = false
    this.loginForm = this.fomBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls
  }

  onClear = () => {
    this.submitted = false;
    this.loginForm.reset()
  }

  onSubmit = (): void => {
    this.submitted = true
  }

}
