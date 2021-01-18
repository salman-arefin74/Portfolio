import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectsSectionComponent } from './pet-projects-section.component';

describe('PetProjectsSectionComponent', () => {
  let component: PetProjectsSectionComponent;
  let fixture: ComponentFixture<PetProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProjectsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
