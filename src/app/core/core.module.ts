import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TokenService } from './service/token.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    TokenService
  ]
})
export class CoreModule {
}
