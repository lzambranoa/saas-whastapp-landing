import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderNavbar } from './builder-navbar';

describe('BuilderNavbar', () => {
  let component: BuilderNavbar;
  let fixture: ComponentFixture<BuilderNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
