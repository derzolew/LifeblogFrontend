import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TokenService } from './service/token.service';
import { UserService } from './service/user.service';
import { BlogService } from './service/blog.service';
import { EqualValidator } from './directives/validate-equal';
import { HttpClientModule } from '@angular/common/http';
import { WarningBlockComponent } from './components/warning-block/warning-block.component';
import { ProfileService } from './service/profile.service';
import { AssetService } from './service/asset.service';
import { PostService } from './service/post.service';

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
    BlogService,
    ProfileService,
    AssetService,
    PostService
  ],
  exports: [
    EqualValidator,
    WarningBlockComponent
  ]
})
export class CoreModule {
}
