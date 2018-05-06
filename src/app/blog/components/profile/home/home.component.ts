import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../core/service/profile.service';
import { UserService } from '../../../../core/service/user.service';
import { Profile } from '../../../../core/model/profile.model';
import { FormControl, Validators } from '@angular/forms';
import { AssetService } from '../../../../core/service/asset.service';
import { Asset } from '../../../../core/model/asset.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isEditing = false;
  isLoading = false;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  birthday = new FormControl();
  aboutMe = new FormControl('');
  phoneNumber = new FormControl();
  profile: Profile = new Profile();

  constructor(private profileService: ProfileService,
              private assetService: AssetService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getCurrentUserProfile(this.userService.getUserInfoFromLocalStorage().id)
      .subscribe((profile: Profile) => {
        this.profile = profile;
        this.birthday.setValue(new Date(profile.birthday));
      });
  }

  getErrorMessage() {

  }

  onPhotoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const photo = event.target.files[0];
      this.assetService.uploadImage(photo).subscribe((asset: Asset) => {
        if (asset) {
          this.profile.photoName = asset.fileName;
          this.profile.photoUrl = asset.url;
        }
      });
    }
  }

  getImageUrl() {
    if (this.profile.photoName) {
      return this.assetService.getImageUrl(this.profile.photoName);
    }
    return null;
  }

  onDateChanged(event) {
    this.profile.birthday = event;
  }

  onEdit() {
    this.isEditing = !this.isEditing;
  }

  onSave() {
    this.isLoading = true;
    this.profileService.updateProfile(this.userService.getUserInfoFromLocalStorage().id, this.profile)
      .subscribe((profile: Profile) => {
        this.isLoading = false;
        this.isEditing = false;
      });
  }
}
