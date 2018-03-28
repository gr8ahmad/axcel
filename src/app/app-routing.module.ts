import { NgModule } from '@angular/core';
import {  RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './auth/signin/signin.component';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: SigninComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
