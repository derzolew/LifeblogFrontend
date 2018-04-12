import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../core/service/user.service';
import { UserCredentials } from '../../../core/model/user.model';
import { OAuthTokenResponse } from '../../../core/model/oauth.model';
import { TokenService } from '../../../core/service/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  user = new UserCredentials();
  isLoading = false;

  constructor(private userService: UserService, private tokenService: TokenService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.isLoading = true;
    this.userService.authorize(this.user).subscribe((oAuthTokenResponse: OAuthTokenResponse) => {
      this.isLoading = false;
      this.tokenService.saveTokensToLocalStorage(oAuthTokenResponse);
    }, (error) => {
      this.isLoading = false;
    });
  }

}
