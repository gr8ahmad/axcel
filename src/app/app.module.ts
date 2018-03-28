import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsService } from "./projects/projects.service";
import { DemoMaterialModule} from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DataStorageService } from './shared/data-storage.service';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    DemoMaterialModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ProjectsService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
