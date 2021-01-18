import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProjectsSectionComponent } from './professional-projects-section.component';

describe('ProfessionalProjectsSectionComponent', () => {
  let component: ProfessionalProjectsSectionComponent;
  let fixture: ComponentFixture<ProfessionalProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalProjectsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
