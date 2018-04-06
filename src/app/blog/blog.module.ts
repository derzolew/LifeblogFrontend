import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageCommonModule } from '../page-common/page-common.module';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const blogRoutes: Routes = [
  {path: '', component: HomepageComponent},
];


@NgModule({
  imports: [
    CommonModule,
    PageCommonModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [
    HomepageComponent,
    SignupComponent
  ]
})
export class BlogModule { }
