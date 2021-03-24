import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbilitiesComponent } from './abilities/abilities.component';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationExperienceComponent } from './experience/education-experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkExperienceComponent } from './experience/work-experience.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    WorkExperienceComponent,
    EducationExperienceComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
