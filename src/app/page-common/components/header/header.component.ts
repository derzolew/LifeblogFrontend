import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthorized = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.updateFieldIfAuthorized();
    this.subscribeToUserAuthorization();
  }

  subscribeToUserAuthorization() {
    this.userService.userAuthorizedEventEmitter.subscribe((authorized) => {
      if (authorized) {
        this.updateFieldIfAuthorized();
      }
    });
  }

  updateFieldIfAuthorized() {
    this.isAuthorized = this.userService.isAuthorized();
  }

  onLogout() {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.userService.userAuthorizedEventEmitter.unsubscribe();
  }

}
