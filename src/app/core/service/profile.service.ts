import { Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../model/profile.model';

@Injectable()
export class ProfileService {

  constructor(private apiService: ApiService) {
  }

  public getCurrentUserProfile(userId: number): Observable<Profile> {
    return this.apiService.get(`profile/${userId}`, AuthorizationType.BEARER);
  }

  public updateProfile(userId: number, profile: Profile) {
    return this.apiService.put(`profile/${userId}`, AuthorizationType.BEARER, profile);
  }
}
