import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User, UserCredentials } from '../../../core/model/user.model';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  user = new UserCredentials();
  confirmPassword = '';
  isLoading = false;
  isRegistrationComplete = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.isLoading = true;
    this.userService.signUp(this.user).subscribe((response: User) => {
      console.log(response);
      this.isLoading = false;
      this.isRegistrationComplete = true;
    }, (error) => {
      this.isLoading = false;
    });
  }
}
