import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProfessionalProjectsSectionComponent } from './professional-projects-section/professional-projects-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';

const routes: Routes = 
[
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutSectionComponent},
  {path: 'experience', component: ExperienceSectionComponent},
  {path: 'education', component: EducationSectionComponent},
  {path: 'skills', component: SkillsSectionComponent},
  {path: 'projects', component: ProfessionalProjectsSectionComponent},
  {path: 'blog', component: BlogSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
