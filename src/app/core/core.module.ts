import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TokenService } from './service/token.service';
import { UserService } from './service/user.service';
import { BlogService } from './service/blog.service';
import { EqualValidator } from './directives/validate-equal';
import { HttpClientModule } from '@angular/common/http';
import { WarningBlockComponent } from './components/warning-block/warning-block.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    EqualValidator,
    WarningBlockComponent
  ],
  providers: [
    ApiService,
    TokenService,
    UserService,
    BlogService
  ],
  exports: [
    EqualValidator,
    WarningBlockComponent
  ]
})
export class CoreModule {
}
