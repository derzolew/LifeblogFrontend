import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TokenService } from './service/token.service';
import { UserService } from './service/user.service';
import { BlogService } from './service/blog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    TokenService,
    UserService,
    BlogService
  ]
})
export class CoreModule {
}
