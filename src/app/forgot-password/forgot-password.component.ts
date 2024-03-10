import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  SuccessMsg: string = '';
  errMsg: string = '';
  resetCode: any;
  success: boolean = false;

  showResetForm: boolean = false;
  email: string = ``;

  constructor(private _AuthService: AuthService) {}
  forgotPasswordBox: FormGroup = new FormGroup({
    // email: new FormControl(null, [Validators.required, Validators.email]),
    email: new FormControl(),
  });

  sendResetCode(form: FormGroup): void {
    this._AuthService.forgotPassword(form.value).subscribe({
      next: (response) => {
        this.SuccessMsg = response.message;
        console.log(this.SuccessMsg);
        if (response.statusMsg == 'success') {
          this.success = true;
        }
      },
      error: (err) => {
        this.errMsg = err.error.message;

        console.log(this.errMsg);
      },
    });
  }

  verifyCodeBox: FormGroup = new FormGroup({
    resetCode: new FormControl(),
  });

  verifyResetCode(form: FormGroup): void {
    this._AuthService.verifyCode(form.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.statusMsg == 'success') {
          this.showResetForm = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  resetpassword: FormGroup = new FormGroup({
    resetpassword: new FormControl(),
  });
  newpassword() {
    let resetform = this.resetpassword.value;
    resetform.email = this.email;
    this._AuthService.resetPAssword(resetform).subscribe({
      next: (res) => {
        alert('Your password has been changed successfully');
        window.location.reload();
      },
    });
  }
}
