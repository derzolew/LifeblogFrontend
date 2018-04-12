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
  MatTooltipModule,
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsAllComponent } from './components/posts-all/posts-all.component';
import { PostComponent } from './components/post/post.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { CoreModule } from '../core/core.module';
import { SigninComponent } from './components/signin/signin.component';

const blogRoutes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
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
    MatTooltipModule,
  ],
  declarations: [
    HomepageComponent,
    SignupComponent,
    PostsAllComponent,
    PostComponent,
    AuthContainerComponent,
    SigninComponent
  ]
})
export class BlogModule {
}
