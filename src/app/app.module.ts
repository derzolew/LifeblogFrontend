import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './blog/blog.module';

const appRoutes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: '**', redirectTo: ''}
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
