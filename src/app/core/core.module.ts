import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TokenService } from './service/token.service';
import { UserService } from './service/user.service';
import { BlogService } from './service/blog.service';
import { EqualValidator } from './directives/validate-equal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    EqualValidator
  ],
  providers: [
    ApiService,
    TokenService,
    UserService,
    BlogService
  ],
  exports: [
    EqualValidator
  ]
})
export class CoreModule {
}
