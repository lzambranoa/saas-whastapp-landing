import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesEditor } from './features-editor';

describe('FeaturesEditor', () => {
  let component: FeaturesEditor;
  let fixture: ComponentFixture<FeaturesEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
