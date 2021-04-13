import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EDUCATIONComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    EDUCATIONComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'experience', component: ProjectsComponent },
      { path: 'education', component: EDUCATIONComponent },
      { path: 'certificates', component: CertificatesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
