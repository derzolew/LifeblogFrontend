import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  private ACCESS_TOKEN = 'access_token';

  public getAccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN);
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
