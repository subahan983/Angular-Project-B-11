import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFileComponent } from './success-file.component';

describe('SuccessFileComponent', () => {
  let component: SuccessFileComponent;
  let fixture: ComponentFixture<SuccessFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
