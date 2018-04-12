import { Injectable } from '@angular/core';
import { OAuthTokenResponse } from '../model/oauth.model';

@Injectable()
export class TokenService {

  constructor() { }

  private ACCESS_TOKEN = 'access_token';
  private TOKEN_DETAILS_KEY = 'token_details';

  public getAccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  public saveTokensToLocalStorage(tokenDetails: OAuthTokenResponse) {
    localStorage.setItem(this.TOKEN_DETAILS_KEY, JSON.stringify(tokenDetails));
  }

  public getTokenDetails(): OAuthTokenResponse {
    return JSON.parse(localStorage.getItem(this.TOKEN_DETAILS_KEY));
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN, accessToken);
  }

  public removeTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
