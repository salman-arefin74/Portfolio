import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { AwardsSectionComponent } from './awards-section/awards-section.component';
import { PetProjectsSectionComponent } from './pet-projects-section/pet-projects-section.component';
import { ProfessionalProjectsSectionComponent } from './professional-projects-section/professional-projects-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    AwardsSectionComponent,
    PetProjectsSectionComponent,
    ProfessionalProjectsSectionComponent,
    BlogSectionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
