import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './blog/components/homepage/homepage.component';
import { BlogModule } from './blog/blog.module';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BlogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
