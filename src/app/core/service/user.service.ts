import { EventEmitter, Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { TokenService } from './token.service';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { User, UserCredentials } from '../model/user.model';
import { OAuthTokenResponse } from '../model/oauth.model';

@Injectable()
export class UserService {

  public userAuthorizedEventEmitter = new EventEmitter<boolean>();
  public readonly KEY_USER_INFO = 'user_info';

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  public authorize(userCredentials: UserCredentials): Observable<OAuthTokenResponse> {
    const queryParams = new HttpParams()
      .append('scope', 'write')
      .append('grant_type', 'password')
      .append('username', userCredentials.email)
      .append('password', userCredentials.password);
    return this.apiService.post('/oauth/token', AuthorizationType.BASIC, null, queryParams);
  }

  public getCurrentUserInfo(): Observable<User> {
    return this.apiService.get('user/current', AuthorizationType.BEARER);
  }

  public saveUserInfoToLocalStorage(userInfo: User) {
    window.localStorage.setItem(this.KEY_USER_INFO, JSON.stringify(userInfo));
  }

  public getUserInfoFromLocalStorage(): User | null {
    if (window.localStorage.getItem(this.KEY_USER_INFO)) {
      return JSON.parse(window.localStorage.getItem(this.KEY_USER_INFO));
    }
    return null;
  }

  public signUp(userCredentials: UserCredentials): Observable<User> {
    return this.apiService.post('/user/signup', AuthorizationType.NONE, userCredentials, null);
  }

  public isAuthorized(): boolean {
    return !!this.tokenService.getTokenDetails();
  }

  public logout() {
    this.tokenService.clearLocalStorage();
    this.userAuthorizedEventEmitter.emit(true);
  }
}
