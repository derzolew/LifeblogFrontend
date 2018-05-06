import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../core/service/user.service';
import { User, UserCredentials } from '../../../core/model/user.model';
import { OAuthTokenResponse } from '../../../core/model/oauth.model';
import { TokenService } from '../../../core/service/token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile } from '../../../core/model/profile.model';
import { ProfileService } from '../../../core/service/profile.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  user = new UserCredentials();
  isLoading = false;
  loginError = false;

  constructor(private userService: UserService,
              private router: Router,
              private profileService: ProfileService,
              private tokenService: TokenService) { }

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
      this.getAndSetCurrentUserInfo();
      this.router.navigate(['/']);
      this.userService.userAuthorizedEventEmitter.emit(true);
    }, (error: HttpErrorResponse) => {
      if (error.status === 400 || error.status === 500) {
        this.loginError = true;
      }
      this.isLoading = false;
    });
  }

  getAndSetCurrentUserInfo() {
    this.userService.getCurrentUserInfo().subscribe((user: User) => {
      this.userService.saveUserInfoToLocalStorage(user);
      this.getAndSaveProfileId();
    });
  }

  getAndSaveProfileId() {
    this.profileService.getCurrentUserProfile(this.userService.getUserInfoFromLocalStorage().id)
      .subscribe((profile: Profile) => {
        this.profileService.saveProfileIdToLocalStorage(profile.id);
        console.log(profile);
      });
  }
}
