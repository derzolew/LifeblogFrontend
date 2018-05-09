import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageCommonModule } from '../page-common/page-common.module';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsAllComponent } from './components/posts-all/posts-all.component';
import { PostComponent } from './components/post/post.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { CoreModule } from '../core/core.module';
import { SigninComponent } from './components/signin/signin.component';
import { AuthResponseMessageComponent } from './components/auth-response-message/auth-response-message.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/profile/menu/menu.component';
import { HomeComponent } from './components/profile/home/home.component';
import { MakePostComponent } from './components/profile/make-post/make-post.component';
import { MyPostsComponent } from './components/profile/my-posts/my-posts.component';
import { HomePostsComponent } from './home-posts/home-posts.component';

const blogRoutes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      {path: '', component: HomePostsComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'profile', pathMatch: 'full',  redirectTo: 'profile/home'},
      {
        path: 'profile', component: ProfileComponent, children: [
          {path: 'home', component: HomeComponent},
          {path: 'make-post', component: MakePostComponent},
          {path: 'my-posts', component: MyPostsComponent}
        ]
      },
      {path: '', component: PostsAllComponent}
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    PageCommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild(blogRoutes),
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [
    HomepageComponent,
    SignupComponent,
    PostsAllComponent,
    PostComponent,
    AuthContainerComponent,
    SigninComponent,
    AuthResponseMessageComponent,
    ProfileComponent,
    MenuComponent,
    HomeComponent,
    MakePostComponent,
    MyPostsComponent,
    HomePostsComponent
  ]
})
export class BlogModule {
}
