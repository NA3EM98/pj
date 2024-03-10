import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  RxwebValidators,
  compare,
  required,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  SINGUPFORM!: FormGroup;
  isLoading = false;
  //  rePassword!:string
  //  @compare({fieldName:'password'}) rePassword: string = ``;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.SINGUPFORM = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/),
        ]),
        rePassword: new FormControl(``),
        // rePassword : <any>['', RxwebValidators.compare({fieldName:'password' }) ,  ],

        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^01[0125][0-9]{8}$/),
        ]),
      },
      { validators: [this.confirmpassword] } as FormControlOptions
    );
  }
  confirmpassword(group: FormGroup) {
    let password = group.get(`password`);
    let rePassword = group.get(`rePassword`);
    if (rePassword?.value == null) {
      rePassword?.setErrors({ required: true });
    } else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  constructor(private _AuthService: AuthService, private _router: Router) {}
  show(form: FormGroup) {
    this._AuthService.senddataup(this.SINGUPFORM.value).subscribe({
      next: (res) => {
        console.log(this.SINGUPFORM.value);
        this._router.navigate(['signin']);
      },
      error: (err) => {},
    });
  }
}
