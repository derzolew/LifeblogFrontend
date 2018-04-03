import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageCommonModule } from '../page-common/page-common.module';

@NgModule({
  imports: [
    CommonModule,
    PageCommonModule
  ],
  declarations: [HomepageComponent]
})
export class BlogModule { }
