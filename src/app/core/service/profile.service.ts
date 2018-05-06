import { Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../model/profile.model';

@Injectable()
export class ProfileService {

  readonly KEY_PROFILE_ID = 'profile_id';

  constructor(private apiService: ApiService) {
  }

  public getCurrentUserProfile(userId: number): Observable<Profile> {
    return this.apiService.get(`profile/${userId}`, AuthorizationType.BEARER);
  }

  public updateProfile(userId: number, profile: Profile) {
    return this.apiService.put(`profile/${userId}`, AuthorizationType.BEARER, profile);
  }

  public saveProfileIdToLocalStorage(profileId: number) {
    window.localStorage.setItem(this.KEY_PROFILE_ID, profileId.toString());
  }

  public getProfileIdFromLocalStorage(): number {
    const profileId = window.localStorage.getItem(this.KEY_PROFILE_ID);
    if (profileId) {
      return +profileId;
    }
    return null;
  }
}
