import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, WorkExperienceComponent, EducationComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, MainComponent, FooterComponent]
})
export class CoreModule { }
