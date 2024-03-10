import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  SIGNINFORM!: FormGroup;
  ngOnInit(): void {
    this.SIGNINFORM = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\[A-Z][a-z0-9]{6,10}$/),
      ]),
    });
  }

  submitSignIn(formk: FormGroup) {
    this._AuthService.senddatain(this.SIGNINFORM.value).subscribe({
      next: (res) => {
        localStorage.setItem('eToken', res.token);
        this._Router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
